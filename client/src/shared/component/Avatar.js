import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  AvatarPreview: {
    height: "35px",
    width: "35px",
    backgroundColor: "#5865f2",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    marginLeft: "5px",
    color: "white",
  },
}));

const Avatar = ({ username, large }) => {
  const classes = useStyles();
  return (
    <Box
      style={large ? { height: "60px", width: "60px" } : {}}
      className={classes.AvatarPreview}
    >
      {username.substring(0, 2)}
    </Box>
  );
};

export default Avatar;
