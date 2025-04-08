import React from 'react'

export default function footer() {
  return (
    <footer id="contact" className="bg-[#594545] text-white py-12 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">寿司匠</h3>
          <p className="text-[#E8D5C4] mb-4">
            Mang đến trải nghiệm sushi tuyệt hảo giữa truyền thống và đổi
            mới.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Giờ mở cửa</h3>
          <p className="text-[#E8D5C4]">
            Thứ 2-6: 11:30 - 14:00, 17:00 - 22:00
          </p>
          <p className="text-[#E8D5C4]">
            Thứ 7, CN & ngày lễ: 12:00 - 22:00
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>
          <p className="text-[#E8D5C4]">123 Hàm Nghi, Q.1,TP Hồ Chí Minh</p>
          <p className="text-[#E8D5C4]">Điện thoại: 024234-JQK</p>
          <p className="text-[#E8D5C4]">Email: info@sushitakumi.vn</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Theo dõi chúng tôi</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-[#E8D5C4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#E8D5C4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                ></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-[#E8D5C4]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-[#815B5B]" />
      <div className="text-center text-[#E8D5C4]">
      </div>
    </div>
  </footer>
  )
}
