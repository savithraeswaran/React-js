import React,{useState} from 'react'
import MyContext from './MyContext';

const MyContextProvider = ({children}) => {
    const [myValue, setMyValue] = useState('Default Value');
  return (
    <div>
        <MyContext.Provider value={{myValue,setMyValue}}>
        {children}
        </MyContext.Provider>
    </div>
  )
}

export default MyContextProvider;