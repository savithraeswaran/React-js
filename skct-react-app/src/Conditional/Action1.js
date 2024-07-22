import React, { useState } from 'react'

const Action1 = () => {
    const[islogged,setIslogged] = useState(true)
    const handleopen = () =>{
        setIslogged(false)
            }
            const handleclose = () =>{
                setIslogged(true) 
            } 
    if(true) {


    }
    
    else{
      
    }
  return (
    <div>
        <h1>This is an if statement</h1>
        { islogged &&
        <form>
            <label>
                username :
          </label>
          <input></input>
          <label>password :</label>
          <input></input>
        </form>
}
<button onClick={handleopen}>close</button>
<button onClick={handleopen}>open</button>
        </div>
  )
}

export default Action1