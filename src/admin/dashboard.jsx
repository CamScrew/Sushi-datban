import Sidebar from "../components/admin/sidebar";
import Navbar from "../components/admin/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
export default function AdminDashboard() {
  // Mock data for dashboard
  const stats = [
    {
      id: 1,
      name: "Đơn hàng hôm nay",
      value: "24",
      change: "+12%",
      trend: "up",
    },
    {
      id: 2,
      name: "Doanh thu hôm nay",
      value: "9.560.000 ₫",
      change: "+8%",
      trend: "up",
    },
    { id: 3, name: "Đặt bàn hôm nay", value: "18", change: "+5%", trend: "up" },
    { id: 4, name: "Khách hàng mới", value: "6", change: "-2%", trend: "down" },
  ];




  const notifications = [
    {
      id: 1,
      title: "Hết nguyên liệu",
      message: "Cá hồi sắp hết, cần đặt thêm",
      time: "15 phút trước",
      type: "warning",
    },
    {
      id: 2,
      title: "Đơn hàng mới",
      message: "Có 5 đơn hàng mới cần xử lý",
      time: "30 phút trước",
      type: "info",
    },
    {
      id: 3,
      title: "Nhân viên mới",
      message: "Nguyễn Văn A đã được thêm vào hệ thống",
      time: "1 giờ trước",
      type: "success",
    },
    {
      id: 4,
      title: "Cập nhật hệ thống",
      message: "Hệ thống sẽ bảo trì lúc 23:00 tối nay",
      time: "2 giờ trước",
      type: "info",
    },
  ];
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/orders")
      .then((res) => {
        setReservations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen bg-[#FFF9F0] flex">
      {/* Sidebar */}
      <Sidebar items="dashboard"/>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#594545]">Tổng quan</h1>
            <p className="text-[#9E7676]">Chào mừng trở lại, Admin Takumi!</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-[#9E7676]">{stat.name}</p>
                    <p className="text-2xl font-bold text-[#594545] mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      stat.trend === "up"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-[#594545]">
                    Đơn hàng gần đây
                  </h2>
                  <a
                    href="#"
                    className="text-sm text-[#9E7676] hover:text-[#815B5B]"
                  >
                    Xem tất cả
                  </a>
                </div>
                <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#E8D5C4]">
                    <thead className="bg-[#FFF9F0]">
                      <tr>
                        {[
                          "Mã đặt bàn",
                          "Khách hàng",
                          "Thời gian",
                          "Tổng tiền",
                          "Trạng thái",
                        ].map((heading) => (
                          <th
                            key={heading}
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-[#815B5B] uppercase tracking-wider text-center"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#E8D5C4]">
                      {reservations.map((reservation) => (
                        <tr key={reservation.id} className="hover:bg-[#FFF9F0]">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#594545] text-center">
                            ORD-{reservation.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                            {reservation.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                            {`${reservation.reservation_time} - ${dayjs(
                              reservation.reservation_date
                            ).format("DD/MM/YYYY")}`}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                            {reservation.guests}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                reservation.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : reservation.status === "confirmed"
                                  ? "bg-blue-100 text-blue-800"
                                  : reservation.status === "checked_in"
                                  ? "bg-green-100 text-green-800"
                                  : reservation.status === "completed"
                                  ? "bg-gray-100 text-gray-800"
                                  : reservation.status === "cancelled"
                                  ? "bg-red-100 text-red-800"
                                  : ""
                              }`}
                            >
                              {reservation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Reservations */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
                <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-[#594545]">
                    Đặt bàn gần đây
                  </h2>
                  <a
                    href="#"
                    className="text-sm text-[#9E7676] hover:text-[#815B5B]"
                  >
                    Xem tất cả
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E8D5C4]">
                    <thead className="bg-[#FFF9F0]">
                      <tr>
                        {[
                          "Mã đặt bàn",
                          "Khách hàng",
                          "Thời gian",
                          "Số khách",
                          "Trạng thái",
                        ].map((heading) => (
                          <th
                            key={heading}
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-[#815B5B] uppercase tracking-wider text-center"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-[#E8D5C4]">
                      {reservations.map((reservation) => (
                        <tr key={reservation.id} className="hover:bg-[#FFF9F0]">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#594545] text-center">
                            RES-{reservation.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                            {reservation.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                            {`${reservation.reservation_time} - ${dayjs(
                              reservation.reservation_date
                            ).format("DD/MM/YYYY")}`}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                            {reservation.guests}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                reservation.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : reservation.status === "confirmed"
                                  ? "bg-blue-100 text-blue-800"
                                  : reservation.status === "checked_in"
                                  ? "bg-green-100 text-green-800"
                                  : reservation.status === "completed"
                                  ? "bg-gray-100 text-gray-800"
                                  : reservation.status === "cancelled"
                                  ? "bg-red-100 text-red-800"
                                  : ""
                              }`}
                            >
                              {reservation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Notifications */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8D5C4]">
                  <h2 className="text-lg font-semibold text-[#594545]">
                    Thông báo
                  </h2>
                </div>
                <div className="divide-y divide-[#E8D5C4]">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="px-6 py-4 flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF3E4] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-[#9E7676]"
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
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-[#594545]">
                          {notification.title}
                        </p>
                        <p className="text-sm text-[#815B5B]">
                          {notification.message}
                        </p>
                        <p className="text-xs text-[#9E7676] mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 bg-[#FFF9F0] text-center">
                  <a
                    href="#"
                    className="text-sm text-[#9E7676] hover:text-[#815B5B]"
                  >
                    Xem tất cả thông báo
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8D5C4]">
                  <h2 className="text-lg font-semibold text-[#594545]">
                    Thao tác nhanh
                  </h2>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-[#FFF9F0] rounded-lg hover:bg-[#FFF3E4] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#9E7676] mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-[#594545]">Thêm món</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-[#FFF9F0] rounded-lg hover:bg-[#FFF3E4] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#9E7676] mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-[#594545]">Đặt bàn</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-[#FFF9F0] rounded-lg hover:bg-[#FFF3E4] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#9E7676] mb-2"
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
                    <span className="text-sm text-[#594545]">Tạo đơn</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center justify-center p-4 bg-[#FFF9F0] rounded-lg hover:bg-[#FFF3E4] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#9E7676] mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="text-sm text-[#594545]">Báo cáo</span>
                  </a>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-[#594545]">Lịch</h2>
                  <div className="flex space-x-1">
                    <button className="p-1 rounded text-[#9E7676] hover:bg-[#FFF3E4]">
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button className="p-1 rounded text-[#9E7676] hover:bg-[#FFF3E4]">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mb-4">
                    <h3 className="font-medium text-[#594545]">
                      Tháng 4, 2024
                    </h3>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#815B5B] mb-2">
                    <div>CN</div>
                    <div>T2</div>
                    <div>T3</div>
                    <div>T4</div>
                    <div>T5</div>
                    <div>T6</div>
                    <div>T7</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    <div className="py-1 text-[#9E7676] opacity-50">31</div>
                    <div className="py-1">1</div>
                    <div className="py-1">2</div>
                    <div className="py-1">3</div>
                    <div className="py-1">4</div>
                    <div className="py-1">5</div>
                    <div className="py-1">6</div>
                    <div className="py-1">7</div>
                    <div className="py-1">8</div>
                    <div className="py-1">9</div>
                    <div className="py-1 bg-[#9E7676] text-white rounded-full">
                      10
                    </div>
                    <div className="py-1 relative">
                      11
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#9E7676] rounded-full"></div>
                    </div>
                    <div className="py-1 relative">
                      12
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#9E7676] rounded-full"></div>
                    </div>
                    <div className="py-1">13</div>
                    <div className="py-1">14</div>
                    <div className="py-1">15</div>
                    <div className="py-1 relative">
                      16
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#9E7676] rounded-full"></div>
                    </div>
                    <div className="py-1">17</div>
                    <div className="py-1">18</div>
                    <div className="py-1">19</div>
                    <div className="py-1">20</div>
                    <div className="py-1">21</div>
                    <div className="py-1">22</div>
                    <div className="py-1">23</div>
                    <div className="py-1">24</div>
                    <div className="py-1">25</div>
                    <div className="py-1">26</div>
                    <div className="py-1">27</div>
                    <div className="py-1">28</div>
                    <div className="py-1">29</div>
                    <div className="py-1">30</div>
                    <div className="py-1 text-[#9E7676] opacity-50">1</div>
                    <div className="py-1 text-[#9E7676] opacity-50">2</div>
                    <div className="py-1 text-[#9E7676] opacity-50">3</div>
                    <div className="py-1 text-[#9E7676] opacity-50">4</div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-[#FFF9F0] border-t border-[#E8D5C4]">
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-[#9E7676] rounded-full mr-2"></div>
                    <span className="text-[#594545]">Hôm nay</span>
                  </div>
                  <div className="flex items-center text-sm mt-1">
                    <div className="w-1 h-1 bg-[#9E7676] rounded-full mr-2"></div>
                    <span className="text-[#594545]">Có sự kiện</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
