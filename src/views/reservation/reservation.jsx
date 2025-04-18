import { useEffect, useState, useContext} from "react";
import Header from "../../components/navbar/header";
import Footer from "../../components/navbar/footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/authContext'
import axios from "axios";
export default function ReservationPage() {
  const {user,logout} = useContext(AuthContext)
  const [data, setData] = useState({
    name: "",
    email: "",
    guests: "1",
    phone: "",
    reservation_date: "",
    reservation_time: "",
    note: "",
    customer_id:""
  });
  
  const [recomendTable, setRecomendTable] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = user ? { ...data, customer_id: user.id } : data;
    console.log(payload);
    
    axios
      .post("http://127.0.0.1:8000/api/reservation", payload)
      .then(() => navigate("/"))
      .catch((e) => console.error("Lỗi", e));
  };
  
  useEffect(() => {
    if (data.guests && data.reservation_date) {
      axios
        .get("http://127.0.0.1:8000/api/available-times", {
          params: {
            reservation_date: data.reservation_date,
            guests: data.guests,
          },
        })
        .then((res) => {
          setRecomendTable(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [data.guests, data.reservation_date]);

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}
      <Header />

      {/* Header Section */}
      <section className="py-12 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-[#594545] mb-4">Đặt bàn</h1>
          <p className="text-[#9E7676] mb-6">
            Hãy đặt trước để đảm bảo bạn có một chỗ ngồi tại nhà hàng của chúng
            tôi. Chúng tôi mong muốn được phục vụ bạn những trải nghiệm ẩm thực
            Nhật Bản tuyệt vời nhất.
          </p>
          <div className="w-24 h-1 bg-[#9E7676] mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          {/* Reservation Form */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#594545] mb-6">
              Thông tin đặt bàn
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                    placeholder="Vui lòng nhập tên"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
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
                    className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                    placeholder="Vui lòng số điện thoại"
                    value={data.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                    placeholder="Vui lòng Email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-[#594545] mb-1"
                  >
                    Số lượng khách
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676] bg-white"
                    value={data.guests}
                    onChange={handleChange}
                  >
                    <option value="1">1 người</option>
                    <option value="2">2 người</option>
                    <option value="3">3 người</option>
                    <option value="4">4 người</option>
                    <option value="5">5 người</option>
                    <option value="6">6 người</option>
                    <option value="7">7 người</option>
                    <option value="8">8 người</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-[#594545] mb-1"
                  >
                    Ngày
                  </label>
                  <input
                    type="date"
                    id="reservation_date"
                    className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                    value={data.reservation_date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-[#594545] mb-1"
                  >
                    Thời gian
                  </label>
                  <select
                    id="reservation_time"
                    className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676] bg-white"
                    value={data.reservation_time}
                    onChange={handleChange}
                  >
                    {recomendTable.available_times ? (
                      recomendTable.available_times.map((items,index) => {
                       return <option key={index} value={items}>{items}</option>;
                      })
                    ) : (
                      <>
                        <option value="" disabled>
                          Chọn thời gian
                        </option>
                        <option value="10:00">10:00</option>
                        <option value="12:15">12:15</option>
                        <option value="14:30">14:30</option>
                        <option value="16:45">16:45</option>
                        <option value="18:00">18:00</option>
                        <option value="20:15">20:15</option>
                        <option value="22:30">22:30</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="request"
                  className="block text-sm font-medium text-[#594545] mb-1"
                >
                  Yêu cầu đặc biệt
                </label>
                <textarea
                  id="note"
                  rows="4"
                  className="w-full px-4 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E7676]"
                  placeholder="Vui lòng cho chúng tôi biết nếu bạn có yêu cầu đặc biệt hoặc dị ứng thực phẩm..."
                  value={data.note}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-[#E8D5C4] rounded focus:ring-[#9E7676] text-[#9E7676]"
                    checked={data.checked}
                    onChange={handleChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-[#815B5B]">
                    Tôi đồng ý với{" "}
                    <a href="#" className="text-[#9E7676] underline">
                      chính sách đặt bàn
                    </a>{" "}
                    của nhà hàng
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Xác nhận đặt bàn
              </button>
            </form>
          </div>

          {/* Reservation Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#594545] mb-4">
                Giờ mở cửa
              </h3>
              <div className="space-y-2 text-[#815B5B]">
                <div className="flex justify-between">
                  <span>Thứ 2 - Thứ 6:</span>
                  <span>11:30 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span></span>
                  <span>17:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Thứ 7, Chủ nhật:</span>
                  <span>12:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#594545] mb-4">
                Chính sách đặt bàn
              </h3>
              <ul className="space-y-2 text-[#815B5B] list-disc pl-5">
                <li>Vui lòng đặt bàn trước ít nhất 2 giờ</li>
                <li>Đặt bàn cho nhóm trên 8 người cần liên hệ trực tiếp</li>
                <li>Bàn sẽ được giữ trong vòng 15 phút kể từ giờ đặt</li>
                <li>Hủy đặt bàn vui lòng thông báo trước 2 giờ</li>
              </ul>
            </div>

            <div className="bg-[#FFF3E4] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-[#594545] mb-4">
                Liên hệ
              </h3>
              <div className="space-y-3 text-[#815B5B]">
                <p className="flex items-start">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Quận Hoàn Kiếm, Hà Nội</span>
                </p>
                <p className="flex items-start">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>024-XXXX-XXXX</span>
                </p>
                <p className="flex items-start">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@sushitakumi.vn</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Times Section */}
      <section className="py-12 px-4 bg-[#FFF3E4]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl font-bold text-[#594545] mb-6">
            Khung giờ phổ biến
          </h2>
          <p className="text-[#9E7676] mb-8">
            Dưới đây là các khung giờ phổ biến mà khách hàng thường đặt bàn. Bạn
            có thể chọn thời gian phù hợp với lịch trình của mình.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "10:00",
              "12:15",
              "14:30",
              "16:45",
              "18:00",
              "20:15",
              "22:30",
            ].map((time) => (
              <div
                key={time}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-[#E8D5C4]"
              >
                <p className="font-medium text-[#594545]">{time}</p>
                <p className="text-sm text-[#9E7676]">Còn chỗ</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
