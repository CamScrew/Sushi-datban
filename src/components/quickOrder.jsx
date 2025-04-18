import React, { useState } from "react";
import axios from "axios";
export default function quickOrder({ isOpen, item, onClose }) {
  if (!isOpen || !item) return null;
  const [currentItem, setCurrentItem] = useState(item);
  console.log(item);

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-lg font-semibold text-[#594545]">
            Chi tiết đơn hàng #ORD-9876
          </h2>
          <button
            className="text-[#594545] hover:text-[#815B5B]"
            onClick={onClose}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-md font-semibold text-[#594545] mb-3">
                Thông tin đơn hàng
              </h3>
              <div className="bg-[#FFF9F0] p-4 rounded-md">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-[#815B5B]">Mã đơn hàng:</div>
                  <div className="text-[#594545] font-medium">{item.id}</div>
                  <div className="text-[#815B5B]">Ngày đặt:</div>
                  <div className="text-[#594545]">{item.date}</div>
                  <div className="text-[#815B5B]">Trạng thái:</div>
                  <div>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-[#815B5B]">Phương thức thanh toán:</div>
                  <div className="text-[#594545]">{item.paymentMethod}</div>
                  <div className="text-[#815B5B]">Tổng tiền:</div>
                  <div className="text-[#594545] font-medium">
                    {item.amount}
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
                    {item.customer}
                  </div>
                  <div className="text-[#815B5B]">Số điện thoại:</div>
                  <div className="text-[#594545]">{item.phone}</div>
                  <div className="text-[#815B5B]">Địa chỉ:</div>
                  <div className="text-[#594545]">{item.address}</div>
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
                {item.orderItems.map((orderItem, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm text-[#594545]">
                      {orderItem.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-[#594545]">
                      {orderItem.quantity}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-[#594545]">
                      {orderItem.price} 
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-[#594545]">
                      {(orderItem.quantity * Number(orderItem.price.replace(/[^\d]/g, ""))).toLocaleString()} ₫
                    </td>
                  </tr>
                ))}
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
                    {item.amount}
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
  );
}
