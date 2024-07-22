import React, { useState } from 'react'
import Hooks2 from './Hooks2';
export const Hooks = () => {
    const [count,setCount]=useState(0);
    const [input,setInput]=useState()
    
    const increment= ()=>{
        setCount(count+1)
    }
    const handlechange =(e)=>{
        setInput(e.target.value)
    }
  return (
    <>
    <div>
       <h1>Hooks</h1> 
       <button onClick={increment}>+</button>
       <h1>{count}</h1>
       <input onChange={handlechange}></input>
       <h1>{input}</h1>
    
       <Hooks2 data={count}/>
        </div>
        </>
  )
}

