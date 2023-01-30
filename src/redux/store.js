import { configureStore } from "@reduxjs/toolkit";
import users_reducers from "./reducers/users_reducers";
import teacher_reducer from "./reducers/teacher_reducer";

export default configureStore({
  reducer: 
  {
     students: users_reducers,
     teachers: teacher_reducer
    },
});
 

