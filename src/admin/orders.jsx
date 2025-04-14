import Sidebar from "../components/admin/sidebar";
import Navbar from "../components/admin/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
export default function OrdersAdminPage() {
  // Mock order data
  const orders = [
    {
      id: "ORD-9876",
      customer: "Nguyễn Văn A",
      date: "10/04/2024",
      time: "15:42",
      amount: "450.000 ₫",
      items: 5,
      status: "Hoàn thành",
      statusColor: "bg-green-100 text-green-800",
      paymentMethod: "Thẻ tín dụng",
      address: "123 Đường Lê Lợi, Quận Hoàn Kiếm, Hà Nội",
      phone: "0912 345 678",
      orderItems: [
        { name: "Nigiri Cá hồi", quantity: 2, price: "140.000 ₫" },
        { name: "California Roll", quantity: 1, price: "180.000 ₫" },
        { name: "Miso Soup", quantity: 2, price: "130.000 ₫" },
      ],
    },
    {
      id: "ORD-9875",
      customer: "Trần Thị B",
      date: "10/04/2024",
      time: "14:30",
      amount: "680.000 ₫",
      items: 7,
      status: "Đang giao",
      statusColor: "bg-blue-100 text-blue-800",
      paymentMethod: "Tiền mặt",
      address: "45 Đường Trần Hưng Đạo, Quận Hai Bà Trưng, Hà Nội",
      phone: "0987 654 321",
      orderItems: [
        { name: "Sashimi Cá ngừ", quantity: 1, price: "220.000 ₫" },
        { name: "Tempura Udon", quantity: 2, price: "320.000 ₫" },
        { name: "Gyoza", quantity: 2, price: "140.000 ₫" },
      ],
    },
    {
      id: "ORD-9874",
      customer: "Lê Văn C",
      date: "10/04/2024",
      time: "13:15",
      amount: "320.000 ₫",
      items: 3,
      status: "Đang chuẩn bị",
      statusColor: "bg-yellow-100 text-yellow-800",
      paymentMethod: "Chuyển khoản",
      address: "78 Đường Nguyễn Trãi, Quận Thanh Xuân, Hà Nội",
      phone: "0909 123 456",
      orderItems: [
        { name: "Chirashi Don", quantity: 1, price: "220.000 ₫" },
        { name: "Trà xanh", quantity: 2, price: "100.000 ₫" },
      ],
    },
    {
      id: "ORD-9873",
      customer: "Phạm Thị D",
      date: "10/04/2024",
      time: "12:50",
      amount: "520.000 ₫",
      items: 6,
      status: "Hoàn thành",
      statusColor: "bg-green-100 text-green-800",
      paymentMethod: "Thẻ tín dụng",
      address: "15 Đường Láng, Quận Đống Đa, Hà Nội",
      phone: "0912 987 654",
      orderItems: [
        { name: "Sushi Takumi Set", quantity: 1, price: "420.000 ₫" },
        { name: "Sake", quantity: 1, price: "100.000 ₫" },
      ],
    },
    {
      id: "ORD-9872",
      customer: "Hoàng Văn E",
      date: "10/04/2024",
      time: "11:25",
      amount: "780.000 ₫",
      items: 8,
      status: "Hoàn thành",
      statusColor: "bg-green-100 text-green-800",
      paymentMethod: "Tiền mặt",
      address: "234 Đường Giải Phóng, Quận Hoàng Mai, Hà Nội",
      phone: "0977 888 999",
      orderItems: [
        { name: "Omakase Nigiri", quantity: 1, price: "580.000 ₫" },
        { name: "Edamame", quantity: 1, price: "80.000 ₫" },
        { name: "Ramune", quantity: 2, price: "120.000 ₫" },
      ],
    },
    {
      id: "ORD-9871",
      customer: "Vũ Thị F",
      date: "09/04/2024",
      time: "19:20",
      amount: "420.000 ₫",
      items: 4,
      status: "Hoàn thành",
      statusColor: "bg-green-100 text-green-800",
      paymentMethod: "Chuyển khoản",
      address: "56 Đường Thái Hà, Quận Đống Đa, Hà Nội",
      phone: "0912 345 678",
      orderItems: [
        { name: "Dragon Roll", quantity: 2, price: "320.000 ₫" },
        { name: "Miso Soup", quantity: 2, price: "100.000 ₫" },
      ],
    },
    {
      id: "ORD-9870",
      customer: "Đặng Văn G",
      date: "09/04/2024",
      time: "18:45",
      amount: "350.000 ₫",
      items: 3,
      status: "Đã hủy",
      statusColor: "bg-red-100 text-red-800",
      paymentMethod: "Thẻ tín dụng",
      address: "89 Đường Bà Triệu, Quận Hai Bà Trưng, Hà Nội",
      phone: "0987 123 456",
      orderItems: [
        { name: "Spicy Tuna Roll", quantity: 2, price: "250.000 ₫" },
        { name: "Trà xanh", quantity: 2, price: "100.000 ₫" },
      ],
    },
    {
      id: "ORD-9869",
      customer: "Ngô Thị H",
      date: "09/04/2024",
      time: "17:30",
      amount: "620.000 ₫",
      items: 6,
      status: "Hoàn thành",
      statusColor: "bg-green-100 text-green-800",
      paymentMethod: "Tiền mặt",
      address: "123 Đường Cầu Giấy, Quận Cầu Giấy, Hà Nội",
      phone: "0909 876 543",
      orderItems: [
        { name: "Sashimi Moriawase", quantity: 1, price: "420.000 ₫" },
        { name: "Agedashi Tofu", quantity: 1, price: "100.000 ₫" },
        { name: "Sake", quantity: 1, price: "100.000 ₫" },
      ],
    },
  ];

  // Filter states
  const statuses = [
    "Tất cả",
    "Đang chuẩn bị",
    "Đang giao",
    "Hoàn thành",
    "Đã hủy",
  ];
  const dateRanges = [
    "Hôm nay",
    "Hôm qua",
    "7 ngày qua",
    "30 ngày qua",
    "Tùy chỉnh",
  ];
// const [stats,SetStats] = useState([]);
// const [orders,SetOrders] = useState([]);
// useEffect(()=>{
//   const fetData = async () =>{
//     try{
//       const [listStats,listOrder] = await Promise.all([ 
//         axios.get(""), 
//         axios.get("")
//       ])
//       SetStats(listStats.data)
//       SetOrders(listOrder.data)
//     }catch(err){
//       console.log(err);
      
//     }
//   }
//   fetData();
// },[])
  return (
    <div className="min-h-screen bg-[#FFF9F0] flex">
      {/* Sidebar */}
      <Sidebar items="order" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto ">
        {/* Top Navigation */}
        <Navbar />

        {/* Orders Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#594545]">
              Quản lý đơn hàng
            </h1>
            <p className="text-[#9E7676]">Xem và quản lý tất cả đơn hàng</p>
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
                  htmlFor="paymentMethod"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Phương thức thanh toán
                </label>
                <select
                  id="paymentMethod"
                  className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                >
                  <option value="all">Tất cả</option>
                  <option value="cash">Tiền mặt</option>
                  <option value="credit">Thẻ tín dụng</option>
                  <option value="transfer">Chuyển khoản</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 px-4 rounded-md transition-colors">
                  Lọc đơn hàng
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#9E7676]">Tổng đơn hàng</p>
                  <p className="text-xl font-bold text-[#594545]">128</p>
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
                  <p className="text-sm text-[#9E7676]">Đang xử lý</p>
                  <p className="text-xl font-bold text-[#594545]">5</p>
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
                  <p className="text-sm text-[#9E7676]">Hoàn thành</p>
                  <p className="text-xl font-bold text-[#594545]">120</p>
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
                  <p className="text-xl font-bold text-[#594545]">3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#594545]">
                Danh sách đơn hàng
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
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider"
                    >
                      Mã đơn
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider"
                    >
                      Khách hàng
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider"
                    >
                      Ngày & Giờ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider"
                    >
                      Tổng tiền
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider"
                    >
                      Trạng thái
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider"
                    >
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#E8D5C4]">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-[#FFF9F0]">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#594545]">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545]">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545]">
                        {order.date} <br />
                        <span className="text-xs text-[#9E7676]">
                          {order.time}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545]">
                        {order.amount}
                        <br />
                        <span className="text-xs text-[#9E7676]">
                          {order.items} món
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.statusColor}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545]">
                        <div className="flex space-x-2">
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
                            title="Hủy đơn hàng"
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
            <div className="px-6 py-4 border-t border-[#E8D5C4] flex items-center justify-between">
              <div className="text-sm text-[#9E7676]">
                Hiển thị 1-8 của 128 đơn hàng
              </div>
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm">
                  Trước
                </button>
                <button className="px-3 py-1 bg-[#9E7676] text-white rounded-md text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm">
                  2
                </button>
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm">
                  3
                </button>
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm">
                  ...
                </button>
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm">
                  16
                </button>
                <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#594545] hover:bg-[#FFF3E4] transition-colors text-sm">
                  Tiếp
                </button>
              </div>
            </div>
          </div>

          {/* Order Detail Modal (Hidden by default) */}
          <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
              <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-lg font-semibold text-[#594545]">
                  Chi tiết đơn hàng #ORD-9876
                </h2>
                <button className="text-[#594545] hover:text-[#815B5B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-md font-semibold text-[#594545] mb-3">
                      Thông tin đơn hàng
                    </h3>
                    <div className="bg-[#FFF9F0] p-4 rounded-md">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-[#815B5B]">Mã đơn hàng:</div>
                        <div className="text-[#594545] font-medium">
                          ORD-9876
                        </div>
                        <div className="text-[#815B5B]">Ngày đặt:</div>
                        <div className="text-[#594545]">10/04/2024 15:42</div>
                        <div className="text-[#815B5B]">Trạng thái:</div>
                        <div>
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Hoàn thành
                          </span>
                        </div>
                        <div className="text-[#815B5B]">
                          Phương thức thanh toán:
                        </div>
                        <div className="text-[#594545]">Thẻ tín dụng</div>
                        <div className="text-[#815B5B]">Tổng tiền:</div>
                        <div className="text-[#594545] font-medium">
                          450.000 ₫
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md font-semibold text-[#594545] mb-3">
                      Thông tin khách hàng
                    </h3>
                    <div className="bg-[#FFF9F0] p-4 rounded-md">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-[#815B5B]">Tên khách hàng:</div>
                        <div className="text-[#594545] font-medium">
                          Nguyễn Văn A
                        </div>
                        <div className="text-[#815B5B]">Số điện thoại:</div>
                        <div className="text-[#594545]">0912 345 678</div>
                        <div className="text-[#815B5B]">Địa chỉ:</div>
                        <div className="text-[#594545]">
                          123 Đường Lê Lợi, Quận Hoàn Kiếm, Hà Nội
                        </div>
                        <div className="text-[#815B5B]">Ghi chú:</div>
                        <div className="text-[#594545]">
                          Giao nhanh trong giờ hành chính
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-md font-semibold text-[#594545] mb-3">
                  Chi tiết món ăn
                </h3>
                <div className="bg-[#FFF9F0] p-4 rounded-md mb-6">
                  <table className="min-w-full divide-y divide-[#E8D5C4]">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-2 text-left text-xs font-medium text-[#815B5B]"
                        >
                          Món ăn
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-center text-xs font-medium text-[#815B5B]"
                        >
                          Số lượng
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-right text-xs font-medium text-[#815B5B]"
                        >
                          Đơn giá
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-right text-xs font-medium text-[#815B5B]"
                        >
                          Thành tiền
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8D5C4]">
                      <tr>
                        <td className="px-4 py-3 text-sm text-[#594545]">
                          Nigiri Cá hồi
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-[#594545]">
                          2
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-[#594545]">
                          70.000 ₫
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-[#594545]">
                          140.000 ₫
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-[#594545]">
                          California Roll
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-[#594545]">
                          1
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-[#594545]">
                          180.000 ₫
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-[#594545]">
                          180.000 ₫
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-[#594545]">
                          Miso Soup
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-[#594545]">
                          2
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-[#594545]">
                          65.000 ₫
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-[#594545]">
                          130.000 ₫
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan="3"
                          className="px-4 py-3 text-sm font-medium text-right text-[#815B5B]"
                        >
                          Tổng cộng:
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-right text-[#594545]">
                          450.000 ₫
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <h3 className="text-md font-semibold text-[#594545] mb-3">
                  Cập nhật trạng thái
                </h3>
                <div className="bg-[#FFF9F0] p-4 rounded-md mb-6">
                  <div className="flex items-center space-x-4">
                    <select className="px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]">
                      <option value="preparing">Đang chuẩn bị</option>
                      <option value="shipping">Đang giao</option>
                      <option value="completed">Hoàn thành</option>
                      <option value="cancelled">Đã hủy</option>
                    </select>
                    <button className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
                      Cập nhật
                    </button>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 border border-[#9E7676] text-[#9E7676] rounded-md hover:bg-[#FFF3E4] transition-colors">
                    In hóa đơn
                  </button>
                  <button className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
