import axios from "axios";
import { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [comfirmPass, setComfirmPass] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/")
    .then(res => setOldPassword(res.data) )
    .catch(e => e)
  },[])
  const validate = () => {
    const newErr = {};
    if (!password) {
      newErr.password = "Password không được để trống";
    } else if (password.length < 6) {
      newErr.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (!comfirmPass){
        newErr.cfpass = " Không được để trống";
    } else if(password !== comfirmPass) {
        newErr.cfpass = "Mật khẩu không khớp";
      }
    if(!Oldpassword){
        newErr.Oldpassword = " không được để trống";
    }
      setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!validate()) return
    console.log(password);
    
    axios.patch("http://127.0.0.1:8000/api/",password)
    .then(res => alert("done"))
    .catch(e => `lỗi ${e}`)
  }
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}

      {/* Reset Password Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#594545]">
              Đặt lại mật khẩu
            </h1>
            <p className="text-[#9E7676] mt-2">
              Tạo mật khẩu mới cho tài khoản của bạn
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <p className="text-[#815B5B]">
                Vui lòng nhập mật khẩu mới cho tài khoản của bạn. Mật khẩu phải
                có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Mật khẩu cũ
                </label>
                <input
                  type="text"
                  id="old-password"
                  className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                  placeholder="vui lòng nhập mật khẩu cũ"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                {errors.Oldpassword && (
                  <p style={{ color: "red" }}>{errors.Oldpassword}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Mật khẩu mới
                </label>
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
                <p className="mt-1 text-xs text-[#815B5B]">
                  Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường
                  và số
                </p>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Xác nhận mật khẩu mới
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                  placeholder="••••••••"
                  onChange={(e) => setComfirmPass(e.target.value)}
                />
                {errors.cfpass && (
                  <p style={{ color: "red" }}>{errors.cfpass}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Đặt lại mật khẩu
              </button>
            </form>
          </div>

          <div className="text-center mt-6">
            <p className="text-[#594545]">
              <a
                href="#"
                className="text-[#9E7676] font-medium hover:text-[#815B5B]"
              >
                Quay lại trang đăng nhập
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
    </div>
  );
}
