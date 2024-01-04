import React, { useState } from "react";
import AuthBox from "../../../shared/component/AuthBox";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ApiLogin } from "../../../utils/api";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../../../redux/Slices/UserSlice";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "40px !important",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "15px",
  },
  formMain: {
    marginTop: "20px",
    "& input": {
      borderRadius: "2px !important",
      border: "1px solid rgba(128, 128, 128, 0.521) !important",
      height: "40px !important",
      width: "100%",
      height: "35px",
      padding: "10px",
      backgroundColor: "rgba(255, 255, 255)",
      marginBottom: "10px",
    },
    "& button": {
      backgroundColor: "#005555 !important",
      borderColor: "#005555 !important",
      height: "40px !important",
      width: "max-content !important",
      color: "white !important",
      fontSize: "16px !important",
      width: "100%",
      border: "none",
    },
  },
  anckerTag: {
    fontSize: "0px !important",
    "& a": {
      fontSize: "20px !important",
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "15px",
      color: "#005555",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
    },
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let navigate = useNavigate();
  // const status = useSelector((state) => state.test.updateData);

  const [data, setData] = useState({
    mail: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { ...otherProps } = data;
  const canSave = [...Object.values(otherProps)].every(Boolean);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loginResponse = await ApiLogin(data);
      localStorage.setItem(
        "chatuser",
        JSON.stringify(loginResponse?.data?.userDetails)
      );
      setLoading(false);
      navigate("/dashboard", { replace: true });
      dispatch(setUserDetails(loginResponse?.data?.userDetails));
    } catch (error) {
      // console.log("error", error.message);
      // console.log("error?.response", error?.response);
      toast.error(error?.response?.data);
      setLoading(false);
    }
  };

  return (
    <AuthBox>
      <Box>
        <Typography variant="h1" className={classes.title}>
          Welcome Back
        </Typography>
        <form className={classes.formMain} onSubmit={HandleSubmit}>
          <input
            type="email"
            placeholder="Please Enter The Email"
            name="mail"
            value={data.mail}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password Please "
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <button type="submit" disabled={!canSave}>
            {Loading ? "Please Wait!" : "Submit"}
          </button>
          <Typography variant="h6" className={classes.anckerTag}>
            <Link to="/register"> Go to Register</Link>
          </Typography>
        </form>
      </Box>
    </AuthBox>
  );
};

export default Login;
