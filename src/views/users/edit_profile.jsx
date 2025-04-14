import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

export default function EditProfilePage() {
  const { user, logout } = useContext(AuthContext);
  const [newInfor, setNewInfor] = useState({});
  const [newPassword, setNewPassword] = useState();
  const [cfPass, setCfPass] = useState("");
  const [errors, setErrors] = useState({});
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    if (user && user.length > 0) {
      setCustomer(user[0]);
      setNewInfor(user[0]);
    } else {
      console.log("Không có dữ liệu user");
    }
  }, [user]);

  const validate = () => {
    const newErr = {};
    if (!newInfor.email) {
      newErr.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(newInfor.email)) {
      newErr.email = "email không hợp lệ";
    }
    if (!newPassword) {
      newErr.password = "Mật khẩu không được để trống";
    } else if (newPassword.length < 6) {
      newErr.password = "Mật khẩu phải có ít nhất 6 ký tự";
    } else if (newPassword !== cfPass) {
      newErr.password = "Mật khẩu không khớp";
    }

    if (!newInfor.name) {
      newErr.name = "tên không được để trống";
    }
    if (!newInfor.phone) {
      newErr.phone = "số điện thoại không được để trống";
    } else if (newInfor.phone.length < 10) {
      newErr.phone = "số điện thoại có ít nhất 10 ký tự";
    }
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmitInfor = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const token = localStorage.getItem("auth");
    axios
      .patch("http://127.0.0.1:8000/api/edit-customers", newInfor, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log("update thành công"))
      .catch((err) => console.log(err));
  };
  const handleSubmitPass = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const token = localStorage.getItem("auth");
    axios
      .patch("http://127.0.0.1:8000/api/edit-password", newPassword, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log("đổi mật khẩu thành công"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}

      {/* Page Header */}
      <section className="bg-[#594545] text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Chỉnh sửa thông tin cá nhân</h1>
          <p className="text-[#E8D5C4]">Cập nhật thông tin cá nhân của bạn</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image Section */}
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={"/placeholder.svg"}
                    alt={customer.name}
                    className="w-40 h-40 rounded-full border-4 border-[#E8D5C4]"
                  />
                  <button className="absolute bottom-0 right-0 bg-[#9E7676] text-white p-2 rounded-full hover:bg-[#815B5B] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-[#815B5B] text-center">
                  Nhấn vào biểu tượng máy ảnh để thay đổi ảnh đại diện
                </p>
                <p className="text-xs text-[#9E7676] mt-2 text-center">
                  Định dạng hỗ trợ: JPG, PNG. Kích thước tối đa: 5MB
                </p>
              </div>

              {/* Form Section */}
              <div className="md:w-2/3">
                <form onSubmit={handleSubmitInfor}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#594545] mb-1"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        defaultValue={customer.name}
                        className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                        onChange={(e) =>
                          setNewInfor({ ...newInfor, name: e.target.value })
                        }
                      />
                      {errors.name && (
                        <p style={{ color: "red" }}>{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#594545] mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue={customer.email}
                        className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                        onChange={(e) =>
                          setNewInfor({ ...newInfor, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p style={{ color: "red" }}>{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#594545] mb-1"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        defaultValue={customer.phone}
                        className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                        onChange={(e) =>
                          setNewInfor({ ...newInfor, phone: e.target.value })
                        }
                      />
                      {errors.phone && (
                        <p style={{ color: "red" }}>{errors.phone}</p>
                      )}
                    </div>
                    {/* <div>
                        <label htmlFor="birthday" className="block text-sm font-medium text-[#594545] mb-1">
                          Ngày sinh
                        </label>
                        <input
                          type="date"
                          id="birthday"
                          defaultValue={customer.birthday}
                          className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                          onChange={e => setNewInfor({...newInfor,phone:e.target.value})}

                        />
                      </div> */}
                  </div>

                  {/* <div className="mb-6">
                      <label htmlFor="address" className="block text-sm font-medium text-[#594545] mb-1">
                        Địa chỉ
                      </label>
                      <input
                        type="text"
                        id="address"
                        defaultValue={customer.address}
                        className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                      />
                    </div> */}

                  {/* <div className="mb-6">
                      <label className="block text-sm font-medium text-[#594545] mb-1">Giới tính</label>
                      <div className="flex space-x-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            defaultChecked={customer.gender === "male"}
                            className="h-4 w-4 text-[#9E7676] border-[#E8D5C4] focus:ring-[#9E7676]"
                          />
                          <label htmlFor="male" className="ml-2 text-sm text-[#594545]">
                            Nam
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            defaultChecked={customer.gender === "female"}
                            className="h-4 w-4 text-[#9E7676] border-[#E8D5C4] focus:ring-[#9E7676]"
                          />
                          <label htmlFor="female" className="ml-2 text-sm text-[#594545]">
                            Nữ
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            defaultChecked={customer.gender === "other"}
                            className="h-4 w-4 text-[#9E7676] border-[#E8D5C4] focus:ring-[#9E7676]"
                          />
                          <label htmlFor="other" className="ml-2 text-sm text-[#594545]">
                            Khác
                          </label>
                        </div>
                      </div>
                    </div> */}
                  <button type="submit" className="px-6 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
                    Lưu thay đổi
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Password Change Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-[#594545] mb-4">
              Thay đổi mật khẩu
            </h2>
            <form onSubmit={handleSubmitPass}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-medium text-[#594545] mb-1"
                  >
                    Mật khẩu hiện tại
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                    placeholder="••••••••"
                  />
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-[#594545] mb-1"
                    >
                      Mật khẩu mới
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
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
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#9E7676] mt-2">
                Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và
                số
              </p>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button className="px-6 py-2 border border-[#9E7676] text-[#9E7676] rounded-md hover:bg-[#FFF3E4] transition-colors">
              <a href="/user">Hủy</a>
            </button>
            <button type="submit" className="px-6 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
