import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  editUser,
  updateUser,
} from "../redux/reducers/users_reducers";

const Form = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.students);
  console.log(edit);

  const userEdit = edit.editUser;

  const [name, setName] = useState("");
  const [gen, setGen] = useState("");

  const [editName, setEditName] = useState(edit.editData.name);
  const [editGen, setEditGen] = useState(edit.editData.gen);

  useEffect(() => {
    const seteditStates = () => {
      setEditName(edit.editData.name);
      setEditGen(edit.editData.gen);
    };
    seteditStates();
  }, [userEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name: name,
      gen: gen,
      id: Math.floor(Math.random() * 10000),
    };

    dispatch(createUser(newStudent));
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const updateDetails = {
      name: editName,
      gen: editGen,
      id: edit.editData.id,
    };
    dispatch(updateUser(updateDetails));

    dispatch(editUser());
    setEditGen("");
    setEditName("");
  };
  return (
    <div>
      {userEdit ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            placeholder="name"
            value={editName}
            onChange={(e) => {
              setEditName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="gen"
            value={editGen}
            onChange={(e) => {
              setEditGen(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="gen"
            value={gen}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
