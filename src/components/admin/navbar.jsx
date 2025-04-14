import React from 'react'

export default function navber() {
  return (
    <div className="bg-white shadow-sm z-20 sticky top-0">
    <div className="px-4 py-3 flex justify-between items-center">
      <div className="flex lg:hidden">
        <button className="text-[#594545]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-full max-w-lg lg:max-w-xs relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="block w-full pl-10 pr-3 py-2 border border-[#E8D5C4] rounded-md text-[#594545] placeholder-[#9E7676] focus:outline-none focus:ring-1 focus:ring-[#9E7676] focus:border-[#9E7676] sm:text-sm"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-1 rounded-full text-[#594545] hover:bg-[#FFF3E4] focus:outline-none">
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <div className="ml-3 relative">
          <div>
            <button className="flex text-sm rounded-full focus:outline-none">
              <img
                src="https://placehold.co/40x40/E8D5C4/594545?text=AD"
                alt="Admin"
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
