import React, { useState } from "react";
import AuthBox from "../../../shared/component/AuthBox";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { ApiRegister } from "../../../utils/api";

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
      backgroundColor: "#005555",
      borderColor: "#005555 ",
      height: "40px ",
      width: "max-content !important",
      color: "white ",
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

// toast.error(response.data.message);

const Register = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    userpassword: "",
  });
  const [Loading, setLoading] = useState(false);

  const HandlerRegister = async (e) => {
    e.preventDefault();
    const ReqData = {
      username: data.username,
      mail: data.email,
      password: data.userpassword,
    };
    setLoading(true);
    const RetrunRegister = await ApiRegister(ReqData);
    RetrunRegister?.data
      .then((response) => {
        setLoading(false);
        // console.log("al data", response);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data);
      });
    if (RetrunRegister.success) {
      toast.success("user successfully registered");
      navigate("/login", { replace: true });
      toast("Rediect to login", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const handleChange = (e) => {
    // const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const { username, ...otherProps } = data;
  const canSave = [...Object.values(otherProps)].every(Boolean);

  return (
    <AuthBox>
      <Box>
        <Typography variant="h1" className={classes.title}>
          Welcome Back
        </Typography>
        <form className={classes.formMain} onSubmit={HandlerRegister}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Please Enter username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please Enter The Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="userpassword"
            id="userpassword"
            placeholder="Password Please "
            minLength="8"
            value={data.userpassword}
            onChange={handleChange}
          />
          <button type="submit" disabled={!canSave}>
            {Loading ? "Please Wait!" : "Submit"}
          </button>
          <Typography variant="h1" className={classes.anckerTag}>
            <Link to="/login"> Go to Login</Link>
          </Typography>
        </form>
      </Box>
    </AuthBox>
  );
};

export default Register;
