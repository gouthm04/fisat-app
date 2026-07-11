import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStudent from './components/AddStudent'
import SearchStudent from './components/SearchStudent'
import DeleteStudent from './components/DeleteStudent'
import ViewStudent from './components/ViewStudent'
import NavBar from './components/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AddStudent/>}/>
            <Route path='/delete' element={<DeleteStudent/>}/>
            <Route path='/search' element={<SearchStudent/>}/>
            <Route path='/view' element={<ViewStudent/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
