import axios from "axios"
import { useContext, useEffect, useState } from "react"
import dayjs from 'dayjs';
import { AuthContext } from '../../context/authContext'

export default function User() {
  // Mock user data
  const {user,logout} = useContext(AuthContext);
  let customer = {}
  if(user && user.length  >0){
     customer = user[0]   
  } else{
    console.log("ko có dữ liệu");
    
  }


  const loyalty = {
    currentRank: "Bạc",
    points: 2450,
    pointsToNextRank: 550,
    nextRank: "Vàng",
    totalSpent: "5.680.000 ₫",
    memberSince: "15/06/2023",
  }


  return (
    <div className="min-hs-creen bg-[#FFF9F0]">
      {/* Navigation */}
    

      {/* Page Header */}
      <section className="bg-[#594545] text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Tài khoản của tôi</h1>
          <p className="text-[#E8D5C4]">Quản lý thông tin cá nhân và theo dõi điểm tích lũy</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - User Info */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={customer.image || "https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/10/tieu-su-justin-bieber-3678-167601620270457998666.jpg"}
                    alt='yes'
                    className="w-24 h-24 rounded-full border-4 border-[#E8D5C4] mb-4"
                  />
                  <h2 className="text-xl font-semibold text-[#594545]">{customer.name}</h2>
                  <p className="text-[#9E7676]">Thành viên {loyalty.currentRank }</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Email</h3>
                    <p className="text-[#594545]">{customer.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Số điện thoại</h3>
                    <p className="text-[#594545]">{customer.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Địa chỉ</h3>
                    <p className="text-[#594545]">{customer.address || "không có"}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Ngày tham gia</h3>
                    <p className="text-[#594545]">{dayjs(customer.created_at).format("DD/MM/YYYY")}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors">
                    <a href="/edit-profile">Chỉnh sửa thông tin</a>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-[#594545] mb-4">Tài khoản</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Thông tin cá nhân
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Lịch sử đơn hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Điểm tích lũy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      Thông báo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Cài đặt tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Loyalty & Points */}
            <div className="lg:w-2/3">
              {/* Loyalty Status */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-[#594545]">Hạng thành viên</h2>
                  <span className="bg-[#9E7676] text-white px-3 py-1 rounded-full text-sm">{loyalty.currentRank}</span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#815B5B]">Tiến độ lên hạng {loyalty.nextRank}</span>
                    <span className="text-[#815B5B]">
                      {loyalty.points}/{loyalty.points + loyalty.pointsToNextRank} điểm
                    </span>
                  </div>
                  <div className="w-full bg-[#E8D5C4] rounded-full h-2.5">
                    <div
                      className="bg-[#9E7676] h-2.5 rounded-full"
                      style={{ width: `${(loyalty.points / (loyalty.points + loyalty.pointsToNextRank)) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-[#9E7676] mt-2">
                    Còn thiếu {loyalty.pointsToNextRank} điểm để lên hạng {loyalty.nextRank}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#FFF3E4] p-4 rounded-lg text-center">
                    <h3 className="text-[#594545] font-medium mb-1">Điểm hiện tại</h3>
                    <p className="text-2xl font-bold text-[#9E7676]">{loyalty.points}</p>
                  </div>
                  <div className="bg-[#FFF3E4] p-4 rounded-lg text-center">
                    <h3 className="text-[#594545] font-medium mb-1">Tổng chi tiêu</h3>
                    <p className="text-2xl font-bold text-[#9E7676]">{loyalty.totalSpent}</p>
                  </div>
                  <div className="bg-[#FFF3E4] p-4 rounded-lg text-center">
                    <h3 className="text-[#594545] font-medium mb-1">Thành viên từ</h3>
                    <p className="text-2xl font-bold text-[#9E7676]">{dayjs(customer.created_at).format("DD/MM/YYYY")}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#594545] mb-3">Quyền lợi của bạn</h3>
                  <ul className="list-disc pl-5 text-[#815B5B] space-y-1">
                    <li>Tích 7% điểm trên mỗi đơn hàng</li>
                    <li>Quà sinh nhật</li>
                    <li>Ưu tiên đặt bàn</li>
                    <li>Giảm 5% cho đơn hàng vào ngày thứ 3 hàng tuần</li>
                  </ul>
                </div>
              </div>

              {/* Redeem Points Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-[#594545] mb-4">Đổi điểm</h2>
                <p className="text-[#815B5B] mb-6">
                  Sử dụng điểm tích lũy của bạn để đổi lấy các ưu đãi hấp dẫn tại Sushi Takumi
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Giảm giá 10%</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Áp dụng cho đơn hàng tiếp theo</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        800 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>

                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Miễn phí món Gyoza</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Áp dụng cho đơn hàng từ 500.000đ</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        500 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>

                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Miễn phí giao hàng</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Áp dụng cho 3 đơn hàng tiếp theo</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        300 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>

                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Nâng cấp set Sushi</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Nâng cấp miễn phí từ set thường lên set đặc biệt</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        1000 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <a href="#" className="text-[#9E7676] hover:text-[#815B5B] text-sm font-medium">
                    Xem tất cả ưu đãi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
