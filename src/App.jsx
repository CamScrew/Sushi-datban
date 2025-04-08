import { useState } from 'react'
import './assets/css/styles.css';
import Login from './views/users/login.jsx'
import User from './views/users/user.jsx'
import Register from './views/users/register.jsx'
import Home from './views/home/home.jsx'
import Reservation from './views/reservation/reservation.jsx'
import Menu from './views/menu/menu.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {

  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/datban" element={<Reservation />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default App
