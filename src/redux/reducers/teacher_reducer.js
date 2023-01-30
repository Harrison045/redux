import { createSlice } from "@reduxjs/toolkit";

const teacherReducer = createSlice({
  name: "teachers",
  initialState: {
    teachers: [
      { name: "Abena", gen: 23, id:1234 },
      { name: "Ama", gen: 23, id:2345 },
      { name: "Evelyn", gen: 23, id:3456 },
      { name: "Zeinab", gen: 23, id:4567 },
      { name: "Benedicta", gen: 23, id:5678 },
    ],
  },
  reducers: {
    createTeacher: (state) => {},
    deleteTeacher: () => {},
    updateTeacher: () => {},
  },
});

export const { createTeacher, updateTeacher, deleteTeacher, } =
  teacherReducer.actions;
export default teacherReducer.reducer;
