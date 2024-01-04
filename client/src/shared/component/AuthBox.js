import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  BoxWrapper: {
    backgroundColor: "#005555",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AuthBox = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.BoxWrapper}>
        <Box
          sx={{
            width: 500,
            height: "auto",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default AuthBox;
