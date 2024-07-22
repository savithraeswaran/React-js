import React from 'react'
import MyContextProvider from './MyContextProvider'
import ComponentA from './ComponentA'

const WrappedComponent = () => {
  return (
    <div>
        <MyContextProvider>
            <ComponentA/>
        </MyContextProvider>
    </div>
  )
}

export default WrappedComponent