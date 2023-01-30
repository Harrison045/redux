import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: [
      { name: "Alberto", gen: 23, id: 1234 },
      { name: "Evans", gen: 23, id: 2345 },
      { name: "Harrison", gen: 23, id: 3456 },
      { name: "Sam", gen: 23, id: 4567 },
      { name: "Mick", gen: 23, id: 5678 },
    ],
    editUser: false,
    editData: {},
  },
  reducers: {
    createUser: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    deleteUser: (state, action) => {
      const newUser = state.user.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });
      state.user = newUser;
    },
    updateUser: (state, action) => {
      const updateUser = state.user.map((item) => {
        if (action.payload.id == item.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      state.user = updateUser;
    },
    editUser: (state) => {
      if (state.editUser == true) {
        state.editUser = false;
      } else {
        state.editUser = true;
      }
    },
    editData: (state, action) => {
      state.editData = action.payload;
    },
  },
});

export const { createUser, updateUser, deleteUser, editUser, editData } =
  usersSlice.actions;
export default usersSlice.reducer;
