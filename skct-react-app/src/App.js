import React from 'react'
import {BrowserRouter,Routes,Route} from'react-router-dom'
import { Hooks } from './Hooks/Hooks'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Hooks/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

