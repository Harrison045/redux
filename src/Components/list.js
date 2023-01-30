import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteUser,
  editUser,
  editData,
} from "../redux/reducers/users_reducers";

const List = (props) => {
  const student=props.student;
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{student.name}</h2>
      <h3>{student.gen}</h3>
      <button
        onClick={(e) => {
          dispatch(editUser());
          dispatch(editData(student));
        }}
      >
        edit
      </button>
      <button
        onClick={(e) => {
          dispatch(deleteUser(student.id));
        }}
      >
        delete
      </button>
    </div>
  );
};

export default List;
