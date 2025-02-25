import './App.css'

import { Route, Routes } from 'react-router-dom';

import HomePage from "./views/HomePage"
import Navigation from './components/Navigation';
import Register from './views/Register';
import Login from './views/Login';

function App() {
  return (
    <>
        <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} />
          <Route 
            path="/Registrarse" 
            element={<Register />} />
             <Route 
            path="/Login" 
            element={<Login />} />
        </Routes>
    </>
  )
}

export default App
