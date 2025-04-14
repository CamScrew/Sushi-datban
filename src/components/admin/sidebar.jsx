import React from "react";
import { useMemo } from "react";
import clsx from "clsx";

export default function Sidebar({ items = "" }) {
  const menuItems = useMemo(() => [
    { key: "dashboard", label: "Tổng quan", href: "/dashboard", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { key: "order", label: "Đơn hàng", href: "/admin-order", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )},
    { key: "reservation", label: "Đặt bàn", href: "/admin-reservation", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )},
    { key: "menu", label: "Thực đơn", href: "/admin-menu", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )},
    { key: "customer", label: "Khách hàng", href: "#", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )},
    { key: "staff", label: "Nhân viên", href: "#", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )},
    { key: "report", label: "Báo cáo", href: "#", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )},
    { key: "setting", label: "Cài đặt", href: "#", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )}
  ], []);

  return (
    <div className="w-64 bg-[#594545] text-white fixed inset-y-0 left-0 z-30 transform transition duration-300 lg:translate-x-0 -translate-x-full lg:static lg:inset-0">
      <div className="flex items-center justify-center h-16 border-b border-[#815B5B]">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">寿司匠</h1>
          <span className="ml-2">Admin</span>
        </div>
      </div>
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className={clsx(
              "group flex items-center px-2 py-2 mt-1 text-base font-medium rounded-md",
              items === item.key
                ? "bg-[#815B5B] text-white"
                : "text-[#E8D5C4] hover:bg-[#815B5B] hover:text-white"
            )}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
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
  );
}
