import React, { useState } from "react";
import axios from "axios";

const QuickDetail = ({ isOpen, item, onClose, cate }) => {
  if (!isOpen || !item) return null;
  const [currentItem, setCurrentItem] = useState(item);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setCurrentItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      setLoading(true);
      setError(null); 

      const response = await axios.patch(
        "http://127.0.0.1:8000/api/", 
        currentItem
      );

      if (response.status === 200) {
        alert("Chỉnh sửa thành công!");
        onClose(); 
      } else {
        setError("Có lỗi xảy ra. Vui lòng thử lại!");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi chỉnh sửa sản phẩm.");
      console.error(err);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="px-6 py-4 border-b border-[#E8D5C4] flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-lg font-semibold text-[#594545]">
            Chi tiết món ăn
          </h2>
          <button
            onClick={onClose}
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
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img
              src={currentItem.image || "https://placehold.co/300x300"}
              alt={currentItem.name}
              className="w-full rounded"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#594545]">
                Mã món
              </label>
              <input
                type="number"
                value={currentItem.id || ""}
                onChange={(e) => handleInputChange(e, "id")}
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#594545] mb-1">
                Trạng thái *
              </label>
              <select
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
                value={currentItem.status}
                onChange={(e) => handleInputChange(e, "status")}
              >
                <option value="available">Có sẵn</option>
                <option value="unavailable">Hết hàng</option>
                <option value="suspended">Tạm ngưng</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#594545]">
                Tên món
              </label>
              <input
                type="text"
                value={currentItem.name || ""}
                onChange={(e) => handleInputChange(e, "name")}
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#594545]">
                Nhãn món ăn
              </label>
              <input
                type="text"
                value={currentItem.tag || ""}
                onChange={(e) => handleInputChange(e, "tag")}
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#594545] mb-1">
                Giá bán *
              </label>
              <input
                type="text"
                placeholder="VD: 70.000 ₫"
                value={currentItem.price || ""}
                onChange={(e) => handleInputChange(e, "price")}
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#594545] mb-1">
                Danh mục *
              </label>
              <select
                value={currentItem.category_id || ""}
                onChange={(e) => handleInputChange(e, "category_id")}
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
              >
                <option value="">-- Chọn danh mục --</option>
                {cate.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#594545]">
                Mô tả
              </label>
              <textarea
                value={currentItem.description || ""}
                onChange={(e) => handleInputChange(e, "description")}
                rows={3}
                className="w-full px-3 py-2 border border-[#E8D5C4] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676]"
              />
            </div>
          </div>
        </div>
        <div className="px-6 pb-4 mt-4 flex justify-end">
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <button
            onClick={handleAddProduct}
            type="submit"
            className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors disabled:bg-gray-300"
            disabled={loading}
          >
            {loading ? "Đang xử lý..." : "Chỉnh sửa món"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickDetail;
