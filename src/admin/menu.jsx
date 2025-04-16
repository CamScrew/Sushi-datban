import Sidebar from "../components/admin/sidebar";
import Navbar from "../components/admin/navbar";
import { useEffect, useState,useRef  } from "react";
import axios from "axios";
export default function MenuAdminPage() {
  const [active, setActive] = useState(1);
  const [stats, setStats] = useState([]);
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    name: "",
    tag: "",
    category_id: "",
    description: "",
    status: "available",
    price: "",
    // costPrice: "",
    image: null,
  });
  const fileInputRef = useRef(null);
  useEffect(() => {
    const fetData = async () => {
      try {
        const [listStats, listMenu, listCategory] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/stat-menu"),
          axios.get("http://127.0.0.1:8000/api/menu"),
          axios.get("http://127.0.0.1:8000/api/category"),
        ]);
        setStats(listStats.data);
        setMenu(listMenu.data);
        setCategories(listCategory.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetData();
  }, []);
  const handleActive = () => {
    setActive(null);
  };
  const handleNulll = () => {
    setActive(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    
    axios.post("http://127.0.0.1:8000/api/insert-menu",data)
    .then(res => {
      console.log(data);
      
    }
    )
    .catch(e => console.log(e) 
    )
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setData({ ...data, image: file });
    } else {
      alert("Vui lòng chọn ảnh dưới 2MB.");
    }
  };
  return (
    <div className="min-h-screen bg-[#FFF9F0] flex">
      {/* Sidebar */}
      <Sidebar items="reservation" />
      {/* Main Content */}
      <div className="flex-1 overflow-auto ">
        {/* Top Navigation */}
        <Navbar />

        {/* Menu Content */}
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#594545]">
              Quản lý thực đơn
            </h1>
            <p className="text-[#9E7676]">
              Xem và quản lý tất cả món ăn trong thực đơn
            </p>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleActive}
                  className="flex items-center bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 px-4 rounded-md transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Thêm món mới
                </button>
                <button className="flex items-center bg-[#FFF9F0] hover:bg-[#FFF3E4] text-[#594545] py-2 px-4 rounded-md transition-colors">
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  Quản lý danh mục
                </button>
                <button className="flex items-center bg-[#FFF9F0] hover:bg-[#FFF3E4] text-[#594545] py-2 px-4 rounded-md transition-colors">
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
                  Xuất thực đơn
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-[#594545]">Hiển thị:</span>
                <select className="px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]">
                  <option value="all">Tất cả món</option>
                  <option value="available">Có sẵn</option>
                  <option value="unavailable">Hết hàng</option>
                  <option value="featured">Món nổi bật</option>
                </select>
              </div>
            </div>
          </div>

          {/* Menu Stats */}
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#9E7676]">Tổng số món</p>
                  <p className="text-xl font-bold text-[#594545]">15</p>
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
                  <p className="text-sm text-[#9E7676]">Có sẵn</p>
                  <p className="text-xl font-bold text-[#594545]">13</p>
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#9E7676]">Món nổi bật</p>
                  <p className="text-xl font-bold text-[#594545]">3</p>
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
                  <p className="text-sm text-[#9E7676]">Hết hàng/Tạm ngưng</p>
                  <p className="text-xl font-bold text-[#594545]">2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-[#594545] mb-4">
              Danh mục
            </h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
                Tất cả ({stats})
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="px-4 py-2 bg-[#FFF9F0] text-[#594545] rounded-md hover:bg-[#FFF3E4] transition-colors"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center">
              <h2 className="text-lg font-semibold text-[#594545]">
                Danh sách món ăn
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
                      "Món ăn	",
                      "Danh mục	",
                      "Giá bán	",
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
                  {menu.map((item) => (
                    <tr key={item.id} className="hover:bg-[#FFF9F0]">
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-3">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                            />
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-medium text-[#594545]">
                              {item.name}
                            </div>
                            <div className="text-xs text-[#9E7676]">
                              {item.jpName}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#594545] text-center">
                        {item.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
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

          {/* Menu Item Detail Modal (Hidden by default) */}
          <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
              <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-lg font-semibold text-[#594545]">
                  Chi tiết món ăn
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-1">
                    <div className="bg-[#FFF9F0] p-4 rounded-md flex flex-col items-center">
                      <img
                        src="https://placehold.co/300x300/png?text=Salmon+Nigiri"
                        alt="Nigiri Cá hồi"
                        className="w-full h-auto rounded-md mb-4"
                      />
                      <div className="flex space-x-2 w-full">
                        <button className="flex-1 bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                          Thay đổi ảnh
                        </button>
                        <button className="flex-1 border border-[#9E7676] text-[#9E7676] hover:bg-[#FFF3E4] py-2 rounded-md transition-colors text-sm">
                          Xóa ảnh
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Mã món
                        </label>
                        <input
                          type="text"
                          value="ITEM-001"
                          readOnly
                          className="w-full px-3 py-2 bg-gray-100 border border-[#E8D5C4] rounded-md text-[#594545]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Trạng thái
                        </label>
                        <select className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]">
                          <option value="available">Có sẵn</option>
                          <option value="unavailable">Hết hàng</option>
                          <option value="suspended">Tạm ngưng</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Tên món (Tiếng Việt)
                        </label>
                        <input
                          type="text"
                          defaultValue="Nigiri Cá hồi"
                          className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Tên món (Tiếng Nhật)
                        </label>
                        <input
                          type="text"
                          defaultValue="サーモン握り"
                          className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Danh mục
                        </label>
                        <select className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]">
                          <option value="sushi">Sushi</option>
                          <option value="sashimi">Sashimi</option>
                          <option value="rolls">Rolls</option>
                          <option value="appetizers">Khai vị</option>
                          <option value="rice-noodles">Mì & Cơm</option>
                          <option value="drinks">Đồ uống</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Giá bán
                        </label>
                        <input
                          type="text"
                          defaultValue="70.000 ₫"
                          className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Giá vốn
                        </label>
                        <input
                          type="text"
                          defaultValue="45.000 ₫"
                          className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#594545] mb-1">
                          Mô tả
                        </label>
                        <textarea
                          defaultValue="Cá hồi tươi trên cơm sushi"
                          rows={3}
                          className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                        ></textarea>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="featured"
                          defaultChecked={true}
                          className="h-4 w-4 text-[#9E7676] border-[#E8D5C4] rounded focus:ring-[#9E7676]"
                        />
                        <label
                          htmlFor="featured"
                          className="ml-2 text-sm text-[#594545]"
                        >
                          Món nổi bật
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="popular"
                          defaultChecked={true}
                          className="h-4 w-4 text-[#9E7676] border-[#E8D5C4] rounded focus:ring-[#9E7676]"
                        />
                        <label
                          htmlFor="popular"
                          className="ml-2 text-sm text-[#594545]"
                        >
                          Món phổ biến
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 border border-[#9E7676] text-[#9E7676] rounded-md hover:bg-[#FFF3E4] transition-colors">
                    Hủy
                  </button>
                  <button className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Category Management Modal (Hidden by default) */}
          <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
              <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-lg font-semibold text-[#594545]">
                  Quản lý danh mục
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
                <div className="mb-6">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Tên danh mục mới"
                      className="flex-1 px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                    />
                    <button className="bg-[#9E7676] hover:bg-[#815B5B] text-white px-4 py-2 rounded-md transition-colors">
                      Thêm danh mục
                    </button>
                  </div>
                </div>

                <div className="bg-[#FFF9F0] rounded-md p-4 mb-6">
                  <h3 className="text-md font-semibold text-[#594545] mb-3">
                    Danh sách danh mục
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li
                        key={category.id}
                        className="flex items-center justify-between p-2 bg-white rounded-md"
                      >
                        <div className="flex items-center">
                          <span className="text-[#594545]">
                            {category.name}
                          </span>
                          <span className="ml-2 text-xs text-[#9E7676]">
                            ({category.count} món)
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800">
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
                          <button className="p-1 text-red-600 hover:text-red-800">
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
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Menu Item Modal (Hidden by default) */}
          <div
            className={`${
              active === 1 ? "hidden" : ""
            } fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}
          >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
              <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center sticky top-0 bg-white z-10">
                <h2 className="text-lg font-semibold text-[#594545]">
                  Thêm món mới
                </h2>
                <button
                  onClick={handleNulll}
                  className="text-[#594545] hover:text-[#815B5B]"
                >
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
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Khu vực ảnh */}
                    <div className="md:col-span-1">
                      <div className="bg-[#FFF9F0] p-4 rounded-md flex flex-col items-center">
                        <div className="w-full h-64 border-2 border-dashed border-[#E8D5C4] rounded-md flex items-center justify-center mb-4">
                          <div className="text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="mx-auto h-12 w-12 text-[#9E7676]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="mt-1 text-sm text-[#815B5B]">
                              Tải ảnh lên
                            </p>
                            <p className="mt-1 text-xs text-[#9E7676]">
                              PNG, JPG (Max. 2MB)
                            </p>
                          </div>
                        </div>
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          className="hidden"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current.click()}
                          className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm"
                        >
                          Chọn ảnh
                        </button>
                      </div>
                    </div>

                    {/* Khu vực nhập liệu */}
                    <div className="md:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Tên món */}
                        <div>
                          <label className="block text-sm font-medium text-[#594545] mb-1">
                            Tên món (Tiếng Việt) *
                          </label>
                          <input
                            type="text"
                            placeholder="Nhập tên món ăn"
                            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                            value={data.name}
                            onChange={(e) =>
                              setData({ ...data, name: e.target.value })
                            }
                          />
                        </div>

                        {/* Nhãn món */}
                        <div>
                          <label className="block text-sm font-medium text-[#594545] mb-1">
                            Nhãn món ăn
                          </label>
                          <input
                            type="text"
                            placeholder="Nhãn món ăn"
                            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                            value={data.tag}
                            onChange={(e) =>
                              setData({ ...data, tag: e.target.value })
                            }
                          />
                        </div>

                        {/* Danh mục */}
                        <div>
                          <label className="block text-sm font-medium text-[#594545] mb-1">
                            Danh mục *
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                            value={data.category_id}
                            onChange={(e) =>
                              setData({ ...data, category_id: e.target.value })
                            }
                          >
                            <option value="">-- Chọn danh mục --</option>
                            {categories.map((item) => (                              
                              <option value={item.id} key={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Trạng thái */}
                        <div>
                          <label className="block text-sm font-medium text-[#594545] mb-1">
                            Trạng thái *
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                            value={data.status}
                            onChange={(e) =>
                              setData({ ...data, status: e.target.value })
                            }
                          >
                            <option value="available">Có sẵn</option>
                            <option value="unavailable">Hết hàng</option>
                            <option value="suspended">Tạm ngưng</option>
                          </select>
                        </div>

                        {/* Giá bán */}
                        <div>
                          <label className="block text-sm font-medium text-[#594545] mb-1">
                            Giá bán *
                          </label>
                          <input
                            type="text"
                            placeholder="VD: 70.000 ₫"
                            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                            value={data.price}
                            onChange={(e) =>
                              setData({ ...data, price: e.target.value })
                            }
                          />
                        </div>

                        {/* Giá vốn */}
                        {/* <div>
                          <label className="block text-sm font-medium text-[#594545] mb-1">
                            Giá vốn
                          </label>
                          <input
                            type="text"
                            placeholder="VD: 45.000 ₫"
                            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                            value={data.costPrice}
                            onChange={(e) =>
                              setData({ ...data, costPrice: e.target.value })
                            }
                          />
                        </div> */}

                        {/* Mô tả */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-[#594545] mb-1">
                            Mô tả
                          </label>
                          <textarea
                            placeholder="Nhập mô tả món ăn"
                            rows={3}
                            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                            value={data.description}
                            onChange={(e) =>
                              setData({ ...data, description: e.target.value })
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nút submit */}
                  <div className="flex justify-end space-x-3">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors"
                    >
                      Thêm món
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
