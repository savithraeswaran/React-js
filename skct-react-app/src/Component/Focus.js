import React, { useEffect,useRef } from 'react'

const Focus = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    },[]);
    
  return (
    <div>
        <label htmlFor="myInput">Enter something:</label>
        <input type="text" id="myInput" ref={inputRef}></input>
    </div>
  )
}
export default Focus