import './App.css'

import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Contact from './components/Contact';
import ProtectedRoutes from './components/ProtectedRoute';

import HomePage from "./views/HomePage"
import Register from './views/Register';
import Login from './views/Login';
import Help from './views/Help';
import Privacy from './views/Privacy';
import Cart from './views/Cart';
import ProductsCategory from './views/ProductsCategory';
import Profile from './views/Profile';

import { PostsProvider } from './assets/PostsContext';
import { CartProvider } from './assets/CartContext';

function App() {
  return (
    <>
      <PostsProvider>
        <CartProvider>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={<HomePage />} />
            <Route
              path="/registro"
              element={<Register />} />
            <Route
              path="/login"
              element={<Login />} />
            <Route
              path="/ayuda"
              element={<Help />} />
            <Route
              path="/privacidad"
              element={<Privacy />} />
            <Route
              path="/carrito"
              element={<Cart />} />
            <Route
              path="/categorias"
              element={<ProductsCategory />} />
            <Route
              path="/perfil"
              element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          </Routes>
          <Contact />
        </CartProvider>
      </PostsProvider>
    </>
  )
}

export default App
