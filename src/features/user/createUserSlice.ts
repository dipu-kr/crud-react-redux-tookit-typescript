import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const createUser = createAsyncThunk<User, CreateUserRequest>(
  "users/createUser",
  async (requestData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        requestData
      ); // Adjust the API endpoint as needed.
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const createNewUserSlice = createSlice({
  name: "createUser",
  initialState: [] as User[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default createNewUserSlice.reducer;
