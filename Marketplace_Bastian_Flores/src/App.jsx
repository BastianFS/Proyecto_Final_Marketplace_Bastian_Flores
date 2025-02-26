import './App.css'

import { Route, Routes } from 'react-router-dom';

import HomePage from "./views/HomePage"
import Navigation from './components/Navigation';
import Register from './views/Register';
import Login from './views/Login';
import Help from './views/Help';
import Contact from './components/Contact';
import Privacy from './views/Privacy';
import Cart from './views/Cart';
import ProductsCategory from './views/ProductsCategory';

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
        <Route
          path="/Ayuda"
          element={<Help />} />
        <Route
          path="/Privacidad"
          element={<Privacy />} />
        <Route
          path="/Carrito"
          element={<Cart />} />
        <Route
          path="/Categorias"
          element={<ProductsCategory />} />
      </Routes>
      <Contact />
    </>
  )
}

export default App
