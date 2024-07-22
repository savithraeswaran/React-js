import React,{useState} from 'react'

const Counter3 = () => {
   const [count, setcount] = useState(0);
   const handleclick=()=>{
    setcount(count+1)
   }
   const handleclicks=()=>{
    setcount(count-1)
   }
  return (
    <div>
        <h1>Counter Component</h1>
        <button onClick={handleclick}>Increment</button>
        <h1>{count}</h1>
        <button  onClick={handleclicks}>Decrement</button>
    </div>
  )
}

export default Counter3