import { useState } from 'react'
import './assets/css/styles.css';
import Login from './views/users/login.jsx'
import User from './views/users/user.jsx'
import Forgot from './views/users/forgot.jsx'
import Reset_password from './views/users/reset-password.jsx'
import Register from './views/users/register.jsx'
import Home from './views/home/home.jsx'
import Reservation from './views/reservation/reservation.jsx'
import Menu from './views/menu/menu.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './admin/dashboard.jsx';
import AdminOrders from './admin/orders.jsx';
import AdminReservation from './admin/reservation.jsx';
import EditProfilePage from './views/users/edit_profile.jsx';
import MenuAdminPage from './admin/menu.jsx';
function App() {

  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/datban" element={<Reservation />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/reset-password" element={<Reset_password />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/admin-order" element={<AdminOrders />} />
      <Route path="/admin-reservation" element={<AdminReservation />} />
      <Route path="/admin-menu" element={<MenuAdminPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      </Routes>
  );
}

export default App
