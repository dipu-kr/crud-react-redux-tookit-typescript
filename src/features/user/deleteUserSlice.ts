import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface DeleteUserRequest {
  userId: number;
}

export const deleteUser = createAsyncThunk<void, DeleteUserRequest>(
  "users/deleteUser",
  async ({ userId }, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const deleteUserSlice = createSlice({
  name: "deleteUser",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      // Handle successful deletion if needed
    });
  },
});

export default deleteUserSlice.reducer;
