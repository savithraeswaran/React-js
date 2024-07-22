import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate=useNavigate()
    const handliClick = () =>{
  navigate("/Login")
    }
  return (
    <div>
      <center>
      <h1>Signup Form</h1>
     <form>
      <label>Fname :</label>
      <input></input> 
      <br></br>
      <label>Lname :</label>
      <input></input><br></br>
      <label>Mobile no :</label>
      <input></input><br></br>
      <label>Username :</label>
      <input></input><br></br>
      <label>Password :</label>
      <input></input><br></br>
     </form>
     <button onClick={handliClick}>Submit</button>
     </center>
        </div>
  )
}

export default Signup