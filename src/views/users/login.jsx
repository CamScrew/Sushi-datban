import Header from "../../components/navbar/header";
import Footer from "../../components/navbar/footer";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErr = {};
    if (!email) {
      newErr.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErr.email = "email không hợp lệ";
    }
    if (!password) {
      newErr.password = "Mật khẩu không được để trống";
    }
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.access_token;
        login(token);
      })
      .catch((e) => console.log(`lỗi ${e}`));
  };
  const handleGG=(e) =>{
    e.preventDefault();
    // axios.get("http://127.0.0.1:8000/api/auth/google/redirect")
    // .then(res => console.log(res.data)
    // )
    // .catch(e => console.log(e)
    // )
    window.location.href = 'http://127.0.0.1:8000/auth/google/redirect';
  }
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}
      <Header />

      {/* Login Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#594545]">Đăng nhập</h1>
            <p className="text-[#9E7676] mt-2">
              Đăng nhập để đặt bàn và theo dõi thẻ thành viên của bạn
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                  placeholder="Vui lòng nhập Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#594545]"
                  >
                    Mật khẩu
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-[#9E7676] hover:text-[#815B5B]"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[#9E7676] border-[#E8D5C4] rounded focus:ring-[#9E7676]"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-[#594545]"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Đăng nhập
              </button>
            </form>
            <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button" onClick={handleGG}
                  className="w-full inline-flex justify-center py-2 px-4 border border-[#E8D5C4] rounded-md shadow-sm bg-white text-sm font-medium text-[#594545] hover:bg-[#FFF3E4]"
                >
                  <svg className="h-5 w-5 mr-2" fill="#4285F4" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-[#E8D5C4] rounded-md shadow-sm bg-white text-sm font-medium text-[#594545] hover:bg-[#FFF3E4]"
                >
                  <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-[#594545]">
              Chưa có tài khoản?{" "}
              <a
                href="/register"
                className="text-[#9E7676] font-medium hover:text-[#815B5B]"
              >
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
