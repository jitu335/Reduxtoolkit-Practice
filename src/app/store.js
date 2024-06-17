import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../fratures/counter/counterSlice";
import themeReducer from "../fratures/theme/themeSlice";
import PostSlice from "../state/usersSlice";
import userSlice from "../state/usersSlice";

const store = configureStore({
  reducer: {
    counterme: counterReducer,
    theme: themeReducer,
    app: PostSlice,
    users: userSlice,
  },
});

export default store;
