import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from "../Images/skct image 4.jpg";
import Signup from '../Sign up/Signup';
const Login = () => {
      const navigate=useNavigate()
      const handleclick = () =>{
        alert(" Form sucessfully submitted!!!")
    navigate("/Home")
      }
      const handleback = () =>{
        navigate("/Signup")
      }
    const handlechange =(e) =>{
      console.log(e.target.value)
    }
    const handlealert = () =>{
      alert("form submitted sucessfully!!!")
    }
          

  return (
    <div>
      <center>
      <h1>Welcome to skct</h1>
      <img src={img1}></img>
      <br></br>
      <a href="https://www.skct.edu.in/#/"target="_blank">Click here!!!</a>
      <br></br>
      <h1>Login form</h1>
      <form>
        <label>Username :</label>
        <input onChange={handlechange}></input>
        <br></br>
        <label>Password :</label>
        <input></input>
        <br></br>
      </form>
      <button onClick={handleback}>back</button>
      <button onClick={handleclick}>Submit</button>
      </center>
    </div>
  )
  }




export default Login