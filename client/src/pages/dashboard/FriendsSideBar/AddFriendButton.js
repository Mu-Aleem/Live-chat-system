import React, { useState } from "react";
import AddFriendDialog from "./AddFriendDialog";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ButtonDesign: {
    marginTop: "10px !important",
    width: "80% !important",
    height: "30px !important",
    backgroundColor: "#005555  !important",
    background: "#005555  !important",
    color: "#fff !important",
  },
}));

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const classes = useStyles();
  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpenAddFriendDialog}
        className={classes.ButtonDesign}
      >
        Add Friend
      </Button>
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
