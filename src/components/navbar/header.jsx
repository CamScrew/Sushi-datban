import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
export default function header() {
  const {user,logout} = useContext(AuthContext)

  return (
    <nav className="bg-[#FFF9F0] border-b border-[#E8D5C4] px-4 py-3">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-[#9E7676] text-2xl font-semibold"><a href="/">Sushi Takumi</a></h1>
      </div>
      <div className="hidden md:flex space-x-6 text-[#815B5B]">
        <a href="/menu" className="hover:text-[#594545] transition-colors">
          Thực đơn
        </a>
        <a href="#about" className="hover:text-[#594545] transition-colors">
          Về chúng tôi
        </a>
        <a
          href="#contact"
          className="hover:text-[#594545] transition-colors"
        >
          Liên hệ
        </a>
        <a href="/datban" className="hover:text-[#594545] transition-colors">
        Đặt bàn
        </a>
      </div>
      {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-[#594545]">👋 Xin chào, {user.name}</span>
            <button
              onClick={logout}
              className="bg-[#9E7676] hover:bg-[#B04242] text-white px-4 py-2 rounded-md"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className='d-flex gap-4'>
            <button className="bg-[#9E7676] hover:bg-[#815B5B] text-white px-4 py-2 rounded-md">
            <a href="/login">Đăng nhập</a>
          </button>
            <button className="bg-[#9E7676] hover:bg-[#815B5B] text-white px-4 py-2 rounded-md">
            <a href="/login">Đăng ký</a>
          </button>
          </div>
        )}


    </div>
  </nav>
  )
}
