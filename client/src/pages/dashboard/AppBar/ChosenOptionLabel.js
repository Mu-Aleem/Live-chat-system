import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
const ChosenOptionLabel = () => {
  const ChosenDetails = useSelector((state) => state.chat.chosen_chat_details);

  return (
    <>
      <Typography
        sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
      >{`${
        ChosenDetails?.name ? `Chosen conversation: ${ChosenDetails?.name}` : ""
      }`}</Typography>
    </>
  );
};

export default ChosenOptionLabel;
