import { configureStore } from "@reduxjs/toolkit";
import users_reducers from "./reducers/users_reducers";

export default configureStore({
  reducer: { usersReducer: users_reducers },
});


