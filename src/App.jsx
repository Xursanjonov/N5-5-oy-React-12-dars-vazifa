import React, { Fragment } from "react"
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import AllProducts from './pages/all-products/AllProducts'
import Auth from './pages/auth/Auth'
import Admin from './pages/admin/Admin'
import CreateProduct from './pages/admin/create-product/CreateProduct'
import NotFound from './pages/not-founud/NotFound'
import Users from "./pages/admin/users/Users";
import Posts from "./pages/admin/posts/Posts";
import Contacts from "./pages/admin/contacts/Contacts";
import Agents from "./pages/admin/agents/Agents";
import Articles from "./pages/admin/articles/Articles";

// npm create vite
function App() {

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-products" element={<AllProducts />} />

        <Route path="/" element={<Auth />}>
          <Route path="admin/" element={<Admin />} >
            <Route path="create" element={<CreateProduct />} />
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="agents" element={<Agents />} />
            <Route path="articles" element={<Articles />} />

          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </Fragment>
  )
}

export default App
