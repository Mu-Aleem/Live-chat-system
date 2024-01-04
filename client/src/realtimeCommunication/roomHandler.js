import store from "../redux/store";
import { isUserInRoomAndisUserRoomCreator } from "../redux/Slices/RoomSlice";

export const createNewRoom = () => {
  store.dispatch(
    isUserInRoomAndisUserRoomCreator({
      isUserInRoom: true,
      isUserRoomCreator: true,
    })
  );
};
