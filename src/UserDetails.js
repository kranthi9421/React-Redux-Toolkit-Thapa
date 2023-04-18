import React from "react"
import DeleteAllUser from "./DeleteAllUser"
import { fakeData } from "./api"
import { useDispatch } from "react-redux"
import { addUser } from "./store/slices/UserSlice";
import Display from './Display'

const UserDetails = () => {
  const dispatch = useDispatch()

  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload))
  }

  return (
    <div>
      <h1>List of User Details</h1>
      <button onClick={() => addNewUser(fakeData())}>Add New User</button>
      <ul>
        <Display />
      </ul>
      <DeleteAllUser />
    </div>
  )
}

export default UserDetails
