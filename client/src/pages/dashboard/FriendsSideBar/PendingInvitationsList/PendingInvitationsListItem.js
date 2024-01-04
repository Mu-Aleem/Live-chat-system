import React, { useState } from "react";
import { Tooltip, Typography, Box } from "@mui/material";
import Avatar from "../../../../shared/component/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import toast from "react-hot-toast";

import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from "../../../../utils/api";

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  // acceptFriendInvitation = () => {},
  // rejectFriendInvitation = () => {},
}) => {
  const [acceptbuttonsDisabled, setacceptbuttonsDisabled] = useState(false);
  const [rejectbuttonsDisabled, setrejectbuttonsDisabled] = useState(false);

  const handleAcceptInvitation = async () => {
    // acceptFriendInvitation({ id });
    const acceptinvitation = await acceptFriendInvitation({ id });
    if (acceptinvitation?.error) {
      toast.error(acceptinvitation?.exception?.response?.data);
    } else if (acceptinvitation.statusText == "OK") {
      toast.success(acceptinvitation?.data);
    }
    setacceptbuttonsDisabled(true);
    console.log("acceptinvitation", acceptinvitation);
  };

  const handleRejectInvitation = async () => {
    const rejectinvitation = await rejectFriendInvitation({ id });
    if (rejectinvitation?.error) {
      toast.error(rejectinvitation?.exception?.response?.data);
    } else if (rejectinvitation.statusText == "OK") {
      toast.success(rejectinvitation?.data);
    }
    setacceptbuttonsDisabled(true);
    console.log("rejectinvitation", rejectinvitation);
    setrejectbuttonsDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            acceptdisabled={acceptbuttonsDisabled}
            rejectdisabled={rejectbuttonsDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListItem;
