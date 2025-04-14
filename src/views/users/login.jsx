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
