import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // fetchUsers: (state, action) => {
    //   state.loading = true;
    //   state.error = "";
    // },
    // fetchUsersSuccess: (state, action) => { },
    // increment: (state, action: PayloadAction<number>) => {
    //   state.count += action.payload;
    // },
    fetchUsers: (state, action: PayloadAction<IUser[]>) => {
      
    },
  }
});

export default userSlice.reducer;
