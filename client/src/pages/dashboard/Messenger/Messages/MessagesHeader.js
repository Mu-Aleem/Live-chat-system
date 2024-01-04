import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "../../../../shared/component/Avatar";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    width: "98%",
    display: "flex",
    marginTop: "15px",
    // justifyContent: "center",
    alignItems: "center",
  },
}));

const MessagesHeader = ({ name = "" }) => {
  const classes = useStyles();

  return (
    <Box className={classes.maincontainer}>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "normal",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        This is the beginning of your conversation with {name}
      </Typography>
    </Box>
  );
};

export default MessagesHeader;
