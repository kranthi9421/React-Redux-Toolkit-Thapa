import React, { useEffect, useState } from "react"
import UserDetails from "./UserDetails"
import axios from "axios"

const App = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios.get("http://localhost:8900/users").then((res) => {
      setUsers(res.data)
      setName(res.data[0].name)
      setEmail(res.data[0].email)
      setMobile(res.data[0].mobile)
      setUserId(res.data[0].id)
    })
  }

  function deleteUser(id) {
    axios.delete(`http://localhost:8900/users/${id}`).then((res) => {
      console.log(res)
      getUsers()
    })
  }
  function selUser(id) {
    let item = users[id - 1]
    setName(item.name)
    setEmail(item.email)
    setMobile(item.mobile)
    setUserId(item.id)
  
  }

  function updateUser() {
    let item = {name,email,mobile,userId}
    axios.put(`http://localhost:8900/users/${userId}`,item)
    getUsers()
  }

  return (
    <div>
       <h1>Home</h1>
      <UserDetails/> 
      <h1>Update User</h1>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <button onClick={() => deleteUser(item.id)}>Delete</button>
              <button onClick={() => selUser(item.id)}>Update</button>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={updateUser}>Update User</button>
    </div>
  )
}

export default App
