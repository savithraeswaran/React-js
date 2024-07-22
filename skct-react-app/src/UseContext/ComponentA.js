import React ,{useContext, useState} from 'react'
import MyContext from './MyContext'

const ComponentA = () => {
    const [color,setColor]= useState("red");
    const {myValue,setMyValue} = useContext(MyContext);
    const changefunc = () =>{
        setMyValue("New Value")
    }
    const changecolor = () =>{
        setColor("green")
    }
  return (
    <div style={{backgroundColor:color}}>
        <p>Value from context: {myValue}</p>
        <button onClick={changefunc}>Change Value</button>
        <button onClick={changecolor}>Change color</button>
    </div>
  );
};

export default ComponentA;