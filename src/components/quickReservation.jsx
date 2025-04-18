import React from 'react'

export default function quickReservation() {
  return (
    <div className=" hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
      <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center sticky top-0 bg-white z-10">
        <h2 className="text-lg font-semibold text-[#594545]">Chi tiết đặt bàn #RES-4567</h2>
        <button className="text-[#594545] hover:text-[#815B5B]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-md font-semibold text-[#594545] mb-3">Thông tin đặt bàn</h3>
            <div className="bg-[#FFF9F0] p-4 rounded-md">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-[#815B5B]">Mã đặt bàn:</div>
                <div className="text-[#594545] font-medium">RES-4567</div>
                <div className="text-[#815B5B]">Ngày đặt:</div>
                <div className="text-[#594545]">10/04/2024</div>
                <div className="text-[#815B5B]">Giờ đặt:</div>
                <div className="text-[#594545]">18:00</div>
                <div className="text-[#815B5B]">Số khách:</div>
                <div className="text-[#594545]">4 người</div>
                <div className="text-[#815B5B]">Bàn số:</div>
                <div className="text-[#594545]">T05</div>
                <div className="text-[#815B5B]">Trạng thái:</div>
                <div>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Đã xác nhận
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold text-[#594545] mb-3">Thông tin khách hàng</h3>
            <div className="bg-[#FFF9F0] p-4 rounded-md">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-[#815B5B]">Tên khách hàng:</div>
                <div className="text-[#594545] font-medium">Đỗ Văn F</div>
                <div className="text-[#815B5B]">Số điện thoại:</div>
                <div className="text-[#594545]">0912 345 678</div>
                <div className="text-[#815B5B]">Email:</div>
                <div className="text-[#594545]">dovanf@example.com</div>
                <div className="text-[#815B5B]">Yêu cầu đặc biệt:</div>
                <div className="text-[#594545]">Vị trí gần cửa sổ, có trẻ em</div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-md font-semibold text-[#594545] mb-3">Cập nhật trạng thái</h3>
        <div className="bg-[#FFF9F0] p-4 rounded-md mb-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label htmlFor="status" className="block text-sm font-medium text-[#594545] mb-1">
                Trạng thái
              </label>
              <select
                id="status"
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
              >
                <option value="pending">Chờ xác nhận</option>
                <option value="confirmed" selected>
                  Đã xác nhận
                </option>
                <option value="completed">Hoàn thành</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="table" className="block text-sm font-medium text-[#594545] mb-1">
                Bàn số
              </label>
              <select
                id="table"
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
              >
                <option value="">Chọn bàn</option>
                <option value="T01">Bàn T01 (2 người)</option>
                <option value="T02">Bàn T02 (2 người)</option>
                <option value="T03">Bàn T03 (2 người)</option>
                <option value="T04">Bàn T04 (4 người)</option>
                <option value="T05" selected>
                  Bàn T05 (4 người)
                </option>
                <option value="T06">Bàn T06 (4 người)</option>
                <option value="T07">Bàn T07 (6 người)</option>
                <option value="T08">Bàn T08 (6 người)</option>
                <option value="P01">Phòng P01 (8-10 người)</option>
                <option value="P02">Phòng P02 (8-10 người)</option>
              </select>
            </div>
            <div className="flex-none md:self-end">
              <button className="w-full md:w-auto px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
                Cập nhật
              </button>
            </div>
          </div>
        </div>

        <h3 className="text-md font-semibold text-[#594545] mb-3">Ghi chú nội bộ</h3>
        <div className="bg-[#FFF9F0] p-4 rounded-md mb-6">
          <textarea
            className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
            rows="3"
            placeholder="Thêm ghi chú nội bộ về đặt bàn này..."
          ></textarea>
          <div className="mt-2 text-right">
            <button className="px-4 py-1 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors text-sm">
              Lưu ghi chú
            </button>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 border border-[#9E7676] text-[#9E7676] rounded-md hover:bg-[#FFF3E4] transition-colors">
            Gửi email xác nhận
          </button>
          <button className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors">
            Đóng
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
