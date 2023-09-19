import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import CreateNewUserReducer from "../features/user/createUserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    createUser: CreateNewUserReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
