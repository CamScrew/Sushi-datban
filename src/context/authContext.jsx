import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

    useEffect(() => {
      const query = new URLSearchParams(window.location.search);
      const urlToken = query.get("token");

    // Nếu vừa đăng nhập bằng Google thành công thì lưu token mới
    if (urlToken) {
      localStorage.setItem("auth", urlToken);
      // Xoá token khỏi URL cho gọn
      window.history.replaceState(null, null, window.location.pathname);
    }

    const token = urlToken || localStorage.getItem("auth");
      if (token) {
        axios.get('http://127.0.0.1:8000/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => setUser(res.data))
        .catch(() => {
          localStorage.removeItem('auth')
          setUser(null)
        })
        .finally(() => setLoading(false))
      } else {
        setLoading(false)
      }
    }, [])

  const login = (token) => {
    localStorage.setItem("auth",token) 
    axios.get('http://127.0.0.1:8000/api/user', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      setUser(res.data)
      navigate("/")
    })
  }

  const logout = () => {
    localStorage.removeItem('auth')
    setUser(null)
          navigate("/")

  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
