import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface UpdateUserRequest {
  userId: number;
  updatedUserData: Partial<User>;
}

export const updateUser = createAsyncThunk<User, UpdateUserRequest>(
  "users/updateUser",
  async ({ userId, updatedUserData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${userId}`,
        updatedUserData
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const updateSlice = createSlice({
  name: "updateUser",
  initialState: [] as User[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const updatedUser = action.payload;
      const index = state.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        state[index] = updatedUser;
      }
    });
  },
});

export default updateSlice.reducer;
