import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
export default function ReservationsAdminPage() {
  // Mock reservation data
  // const reservations = [
  //   {
  //     id: "RES-4567",
  //     customer: "Đỗ Văn F",
  //     date: "10/04/2024",
  //     time: "18:00",
  //     guests: 4,
  //     status: "Đã xác nhận",
  //     statusColor: "bg-green-100 text-green-800",
  //     phone: "0912 345 678",
  //     email: "dovanf@example.com",
  //     specialRequests: "Vị trí gần cửa sổ, có trẻ em",
  //     tableNumber: "T05",
  //   },
  //   {
  //     id: "RES-4566",
  //     customer: "Ngô Thị G",
  //     date: "10/04/2024",
  //     time: "19:30",
  //     guests: 2,
  //     status: "Đã xác nhận",
  //     statusColor: "bg-green-100 text-green-800",
  //     phone: "0987 654 321",
  //     email: "ngothig@example.com",
  //     specialRequests: "Kỷ niệm ngày cưới",
  //     tableNumber: "T12",
  //   },
  //   {
  //     id: "RES-4565",
  //     customer: "Vũ Văn H",
  //     date: "10/04/2024",
  //     time: "20:00",
  //     guests: 6,
  //     status: "Chờ xác nhận",
  //     statusColor: "bg-yellow-100 text-yellow-800",
  //     phone: "0909 123 456",
  //     email: "vuvanh@example.com",
  //     specialRequests: "Đặt bàn cho nhóm công ty",
  //     tableNumber: "",
  //   },
  //   {
  //     id: "RES-4564",
  //     customer: "Đặng Thị I",
  //     date: "10/04/2024",
  //     time: "18:30",
  //     guests: 3,
  //     status: "Đã xác nhận",
  //     statusColor: "bg-green-100 text-green-800",
  //     phone: "0912 987 654",
  //     email: "dangthii@example.com",
  //     specialRequests: "",
  //     tableNumber: "T08",
  //   },
  //   {
  //     id: "RES-4563",
  //     customer: "Bùi Văn K",
  //     date: "10/04/2024",
  //     time: "19:00",
  //     guests: 5,
  //     status: "Chờ xác nhận",
  //     statusColor: "bg-yellow-100 text-yellow-800",
  //     phone: "0977 888 999",
  //     email: "buivank@example.com",
  //     specialRequests: "Một thành viên ăn chay",
  //     tableNumber: "",
  //   },
  //   {
  //     id: "RES-4562",
  //     customer: "Lý Thị L",
  //     date: "11/04/2024",
  //     time: "18:00",
  //     guests: 2,
  //     status: "Đã xác nhận",
  //     statusColor: "bg-green-100 text-green-800",
  //     phone: "0912 345 678",
  //     email: "lythil@example.com",
  //     specialRequests: "",
  //     tableNumber: "T03",
  //   },
  //   {
  //     id: "RES-4561",
  //     customer: "Hoàng Văn M",
  //     date: "11/04/2024",
  //     time: "19:00",
  //     guests: 4,
  //     status: "Đã xác nhận",
  //     statusColor: "bg-green-100 text-green-800",
  //     phone: "0987 123 456",
  //     email: "hoangvanm@example.com",
  //     specialRequests: "Vị trí yên tĩnh",
  //     tableNumber: "T10",
  //   },
  //   {
  //     id: "RES-4560",
  //     customer: "Trần Thị N",
  //     date: "09/04/2024",
  //     time: "20:30",
  //     guests: 8,
  //     status: "Hoàn thành",
  //     statusColor: "bg-blue-100 text-blue-800",
  //     phone: "0909 876 543",
  //     email: "tranthinn@example.com",
  //     specialRequests: "Nhóm lớn, đặt phòng riêng nếu có",
  //     tableNumber: "P02",
  //   },
  //   {
  //     id: "RES-4559",
  //     customer: "Phạm Văn P",
  //     date: "09/04/2024",
  //     time: "18:30",
  //     guests: 2,
  //     status: "Đã hủy",
  //     statusColor: "bg-red-100 text-red-800",
  //     phone: "0912 987 654",
  //     email: "phamvanp@example.com",
  //     specialRequests: "",
  //     tableNumber: "",
  //   },
  //   {
  //     id: "RES-4558",
  //     customer: "Nguyễn Thị Q",
  //     date: "09/04/2024",
  //     time: "19:00",
  //     guests: 3,
  //     status: "Hoàn thành",
  //     statusColor: "bg-blue-100 text-blue-800",
  //     phone: "0977 888 999",
  //     email: "nguyenthiq@example.com",
  //     specialRequests: "",
  //     tableNumber: "T07",
  //   },
  // ]

  // Filter states
  const statuses = [
    "Tất cả",
    "Chờ xác nhận",
    "Đã xác nhận",
    "Hoàn thành",
    "Đã hủy",
  ];
  const dateRanges = [
    "Hôm nay",
    "Ngày mai",
    "7 ngày tới",
    "30 ngày tới",
    "Tùy chỉnh",
  ];
  // const [stats,setStats] = useState([]);
  const [reservations, setReservations] = useState([]);
  // useEffect(()=>{
  //   const fetData = async () =>{
  //     try{
  //       const [listStats,listReservation] = await Promise.all([
  //         axios.get(""),
  //         axios.get("")
  //       ])
  //       setStats(listStats.data)
  //       setReservations(listOrder.data)
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetData();
  // },[])
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/orders")
      .then((res) => setReservations(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen bg-[#FFF9F0] flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#594545] text-white fixed inset-y-0 left-0 z-30 transform transition duration-300 lg:translate-x-0 -translate-x-full lg:static lg:inset-0">
        <div className="flex items-center justify-center h-16 border-b border-[#815B5B]">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">寿司匠</h1>
            <span className="ml-2">Admin</span>
          </div>
        </div>
        <nav className="mt-5 px-2">
          <a
            href="#"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Tổng quan
          </a>
          <a
            href="#"
            className="group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
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
            Đơn hàng
          </a>
          <a
            href="#"
            className="group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md bg-[#815B5B] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
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
            Đặt bàn
          </a>
          <a
            href="#"
            className="group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Thực đơn
          </a>
          <a
            href="#"
            className="group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Khách hàng
          </a>
          <a
            href="#"
            className="group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Nhân viên
          </a>
          <a
            href="#"
            className="group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
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
            Báo cáo
          </a>
          <a
            href="#"
            className="group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 h-6 w-6"
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
            Cài đặt
          </a>
        </nav>
        <div className="absolute bottom-0 w-full">
          <div className="px-4 py-4 border-t border-[#815B5B]">
            <div className="flex items-center">
              <img
                src="https://placehold.co/40x40/E8D5C4/594545?text=AD"
                alt="Admin"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Admin Takumi</p>
                <p className="text-xs text-[#E8D5C4]">Quản trị viên</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto ">
        {/* Top Navigation */}

        {/* Reservations Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#594545]">
              Quản lý đặt bàn
            </h1>
            <p className="text-[#9E7676]">Xem và quản lý tất cả lịch đặt bàn</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Trạng thái
                </label>
                <select
                  id="status"
                  className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="dateRange"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Thời gian
                </label>
                <select
                  id="dateRange"
                  className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                >
                  {dateRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="guestCount"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Số khách
                </label>
                <select
                  id="guestCount"
                  className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                >
                  <option value="all">Tất cả</option>
                  <option value="1-2">1-2 người</option>
                  <option value="3-4">3-4 người</option>
                  <option value="5-6">5-6 người</option>
                  <option value="7+">7+ người</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 px-4 rounded-md transition-colors">
                  Lọc đặt bàn
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
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
                </div>
                <div>
                  <p className="text-sm text-[#9E7676]">Tổng đặt bàn</p>
                  <p className="text-xl font-bold text-[#594545]">86</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#9E7676]">Chờ xác nhận</p>
                  <p className="text-xl font-bold text-[#594545]">8</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#9E7676]">Đã xác nhận</p>
                  <p className="text-xl font-bold text-[#594545]">24</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#9E7676]">Đã hủy</p>
                  <p className="text-xl font-bold text-[#594545]">4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold text-[#594545] mb-4">
              Thao tác nhanh
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center bg-[#FFF9F0] hover:bg-[#FFF3E4] text-[#594545] py-3 px-4 rounded-md transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#9E7676]"
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
                Tạo đặt bàn mới
              </button>
              <button className="flex items-center justify-center bg-[#FFF9F0] hover:bg-[#FFF3E4] text-[#594545] py-3 px-4 rounded-md transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#9E7676]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Xem sơ đồ bàn
              </button>
              <button className="flex items-center justify-center bg-[#FFF9F0] hover:bg-[#FFF3E4] text-[#594545] py-3 px-4 rounded-md transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#9E7676]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Xuất báo cáo
              </button>
            </div>
          </div>

          {/* Reservations Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#594545]">
                Danh sách đặt bàn
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Xuất Excel
                </button>
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  In
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#E8D5C4]">
                <thead className="bg-[#FFF9F0]">
                  <tr>
                    {[
                      "Mã đặt bàn",
                      "Khách hàng",
                      "Ngày & Giờ",
                      "Số khách	",
                      "Bàn",
                      "Trạng thái",
                      "Thao tác",
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
                        {dayjs(reservation.reservation_date).format(
                          "DD/MM/YYYY"
                        )}{" "}
                        <br />
                        <span className="text-xs text-[#9E7676]">
                          {reservation.reservation_time}
                        </span>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                        {reservation.tableNumber || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                        <div className="flex justify-center space-x-2">
                          <button
                            className="p-1 text-blue-600 hover:text-blue-800"
                            title="Xem chi tiết"
                          >
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
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                          <button
                            className="p-1 text-green-600 hover:text-green-800"
                            title="Cập nhật trạng thái"
                          >
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
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button
                            className="p-1 text-red-600 hover:text-red-800"
                            title="Hủy đặt bàn"
                          >
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
