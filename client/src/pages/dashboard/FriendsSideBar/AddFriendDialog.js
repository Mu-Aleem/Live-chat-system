import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import toast from "react-hot-toast";

import { sendFriendInvitation } from "../../../utils/api";

//

const useStyles = makeStyles((theme) => ({
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
}));

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [mail, setMail] = useState("");
  const classes = useStyles();
  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const FriendInvitation = await sendFriendInvitation({
      targetMailAddress: mail,
    });
    if (FriendInvitation?.error) {
      toast.error(FriendInvitation?.exception?.response?.data);
    } else if (FriendInvitation.statusText == "Created") {
      toast.success(FriendInvitation?.data);
      closeDialogHandler();
      setMail("");
    }
  };

  const handleChange = (event) => {
    setMail(event.target.value);
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <form className={classes.formMain} onSubmit={HandleSubmit}>
            <input
              type="email"
              placeholder="Please Enter The Email"
              name="mail"
              value={mail}
              onChange={handleChange}
            />
            <button type="submit">send</button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
