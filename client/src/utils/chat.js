import store from "../redux/store";
import { SetMessage } from "../redux/Slices/ChatSlice";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosen_chat_details?.id;
  const userId = store.getState().userDetails.updateData?._id;
  if (receiverId && userId) {
    const usersInCoversation = [receiverId, userId];

    updateChatHistoryIfSameConversationActive({
      participants,
      usersInCoversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  usersInCoversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return usersInCoversation.includes(participantId);
  });
  if (result) {
    store.dispatch(SetMessage(messages));
  }
};
