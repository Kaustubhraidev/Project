import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap'
import Hostel from './Components/Hostel';
import Header from './Components/Header';
import Restaurants from './Components/Restaurants';
import Other from './Components/Other'
import { Route, Router, Routes } from 'react-router';
import Stationary from './Components/Stationary';
import Signin from './Components/Signin';


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Hostel />}></Route>
          <Route path='/restaurants' element={<Restaurants />}></Route>
          <Route path='/stationary' element={<Stationary />}></Route>
          <Route path='/other' element={<Other />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
      
    </Router>
  )
}

export default App
