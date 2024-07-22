import React, { useState } from 'react'

const Action3 = () => {
    const [user,setUser] = useState("")
    const handleclick= () =>{
        setUser(true)
    }
    let greeting;

    // Using if-else statement
    if (user) {
      alert("true")
    } else {
      alert(false)
    }
  return (
    <div>
        <h1>Greeting</h1>
      <button onClick={handleclick}>click</button>
      {greeting}
    </div>
  )
}

export default Action3