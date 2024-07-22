import React,{useState} from 'react'
import axios from 'axios';
const Axios1 = () => {
    const[apidata,setApidata] = useState();
    const[apimail,setPostiD] = useState();
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(response =>{
        setApidata(response.data[0].name)

    setPostiD(response.data[0].email)

    setApidata(response.data[0].body)
    console.log("response======>>>>>",response)
})
  return (
    <div>
        <h1>Axios1</h1>
        <h1>{apidata}</h1>
        <h1>ID 2 :</h1>
        <h1>{apimail}</h1>
        <h1>PostID :</h1>
    </div>
  )
  }

export default Axios1