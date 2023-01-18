import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        user:[]
    },
    reducers:{
        createUser:(state)=>{

        },
        deleteUser:()=>{

        },
        updateUser:()=>{

        },
        getUser:(state)=>{
            return state.user
        }
    }
})

export const {createUser, updateUser,deleteUser,getUser}=usersSlice.actions
export default usersSlice.reducer;