import Header from "../../components/navbar/header";
import Footer from "../../components/navbar/footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  console.log(email);
  
  const validate = () => {
    const newErr = {};
    if (!email) {
      newErr.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErr.email = "email không hợp lệ";
    }
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    axios
      .post("http://127.0.0.1:8000/api/forgot-password",{email})
      .then((res) => alert("vui lòng check mail"))
      .catch((e) => `lỗi ${e}`);
  };
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}
      <Header />

      {/* Forgot Password Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#594545]">Quên mật khẩu</h1>
            <p className="text-[#9E7676] mt-2">
              Nhập email của bạn để đặt lại mật khẩu
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFF3E4] rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#9E7676]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
              </div>
              <p className="text-[#815B5B]">
                Vui lòng nhập địa chỉ email bạn đã sử dụng để đăng ký tài khoản.
                Chúng tôi sẽ gửi một liên kết đặt lại mật khẩu đến email của
                bạn.
              </p>
            </div>

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
                  placeholder="Vui lòng nhập email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Gửi liên kết đặt lại mật khẩu
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#815B5B] text-sm">
                Nếu bạn không nhận được email trong vòng vài phút, vui lòng kiểm
                tra thư mục spam hoặc liên hệ với chúng tôi để được hỗ trợ.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-[#594545]">
              Đã nhớ mật khẩu?{" "}
              <a
                href="/login"
                className="text-[#9E7676] font-medium hover:text-[#815B5B]"
              >
                Đăng nhập
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
