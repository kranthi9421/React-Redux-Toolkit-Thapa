import React from "react"
import { useDispatch } from "react-redux"
import { deleteUser } from "./store/slices/UserSlice"

const DeleteAllUser = () => {
  const dispatch = useDispatch()
  const deleteAll = () => {
    dispatch(deleteUser())
  }
  return (
    <div>
      <button onClick={ deleteAll}>All</button>
    </div>
  )
}

export default DeleteAllUser
