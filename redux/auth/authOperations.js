import authSlice from "./authSlice";
import { apiSlice } from "../apiSlice";
import { updateUserProfile, authStateChange, setIsAuth } from "./authSlice";

export const login =
  ({ login, password }) =>
  async (dispatch) => {
    try {
      const result = await dispatch(
        apiSlice.endpoints.login.initiate({ login, password })
      );
      console.log("result", result);

      if (result.data.access_granted) {
        dispatch(setIsAuth(true));

        const userdata = {
          userId: login,
          nickName: password,
        };

        dispatch(updateUserProfile(userdata));

        // const { userId, nickName } = result.data;

        // dispatch(updateUserProfile({ userId, nickName }));
      } else {
        console.log("Ошибка при запросе: status", result.error);
      }
      return result;
    } catch (error) {
      console.log("Ошибка error при запросе:", error);
    }
  };
