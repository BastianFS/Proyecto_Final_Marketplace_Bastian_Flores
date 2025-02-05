import './App.css'

import { Route, Routes } from 'react-router-dom';

import HomePage from "./views/HomePage"
import Navigation from './components/Navigation';

function App() {
  return (
    <>
        <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App
