import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  Separator: {
    width: "95%",
    backgroundColor: "#b9bbbe",
    height: "1px",
    position: "relative",
    marginTop: "20px",
    marginBottom: "10px",
  },
  DateLabel: {
    backgroundColor: "#36393f",
    position: "absolute",
    left: "45%",
    top: "-10px",
    color: "#b9bbbe",
    padding: "0 5px",
    fontSize: "14px",
  },
}));

const DateSeparator = ({ date }) => {
  const classes = useStyles();
  return (
    <Box className={classes.Separator}>
      <span className={classes.DateLabel}>{date}</span>
    </Box>
  );
};

export default DateSeparator;
