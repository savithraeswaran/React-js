import axios from 'axios';
import React, { useEffect, useState } from 'react'
const BasicCrud1 = () => {
    const [tododata1, settododata1] = useState([]);
   const [inputvalue, setinputvalue] = useState();
    useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/users") 
     .then(response => {
        console.log("tododata1=====>>>>",response.data[0].title)
settododata1(response.data)
     } )
    }, []);
    const handleinput = (e) =>{
       setinputvalue (e.target.value);
    }
    const handleclick = () =>{
        axios.post("https://jsonplaceholder.typicode.com/users",{title:inputvalue})
        .then(response =>{
            console.log("added===>>>>",response.data)
            settododata1([...tododata1,response.data])
            setinputvalue(" ")
        })  
    }
    const handleDeleteTask = (id) =>{
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      settododata1(tododata1.filter(task =>task.id !== id));
    }
  return (
    <div>
        <h1>Hello BasicCrud1</h1>
        <input onChange={handleinput} value={inputvalue}></input>
        <button onClick={handleclick}>Add</button>
        {
            tododata1.map(index =>(
                <>
                <p key={index.id}>{index.username}</p>
                <button onClick={()=>handleDeleteTask (index.id)}>Delete</button>
                </>
            ))
        }
    </div>
  )
    }

export default BasicCrud1