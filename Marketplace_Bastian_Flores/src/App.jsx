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
import Profile from './views/Profile';
import Categories from './views/Categories';

import { PostsProvider } from './assets/PostsContext';
import { CartProvider } from './assets/CartContext';
import { FavoritesProvider } from './assets/FavoritesContext';
import { AuthProvider } from './assets/AuthContext';
import { SearchProvider } from './assets/SearchContext';
import { UploadPostProvider } from './assets/UploadPostContext';
import UploadPost from './views/UploadPost';
import ProductPage from './views/ProductPage';

function App() {
  return (
    <>
      <AuthProvider>
        <PostsProvider>
          <CartProvider>
            <FavoritesProvider>
              <UploadPostProvider>
                <SearchProvider>
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
                      path="/perfil"
                      element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
                    <Route
                      path="/categorias"
                      element={<Categories />} />
                    <Route
                      path="/publicar"
                      element={<ProtectedRoutes><UploadPost /></ProtectedRoutes>} />
                       <Route
                      path="/publicacion"
                      element={<ProductPage />} />
                  </Routes>
                  <Contact />
                </SearchProvider>
              </UploadPostProvider>
            </FavoritesProvider>
          </CartProvider>
        </PostsProvider>
      </AuthProvider>
    </>
  )
}

export default App
