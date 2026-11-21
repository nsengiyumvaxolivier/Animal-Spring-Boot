import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Hone from './Hone'
import Add from './Add'
import Edit from './Edit'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hone />} />
      <Route path='/Add-Animal' element={<Add />} />
      <Route path='/Edit/:id' element={<Edit />} />
    </Routes>
    
    </BrowserRouter>
   
  )
}

export default App
