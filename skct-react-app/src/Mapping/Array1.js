import React from 'react'
import Listitem from './Listitem';


const Array1 = () => {
    const Arr1=[1,2,3,4,5,6,7,8,9];
    const Arr2=[1,"Welcome",true];
  return (
    <div>
        <h1>Array Component</h1>
        <Listitem data={Arr2}/>
    </div>
  )
}

export default Array1