import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        removeUser: (state, action) => {
          state.splice(action.payload, 1)  
        },
        deleteUser: (state,action) => {
            return []
        }
     }
})

export const { addUser, removeUser, deleteUser } = UserSlice.actions

export default UserSlice.reducer
