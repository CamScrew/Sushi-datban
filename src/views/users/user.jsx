export default function UserProfilePage() {
  // Mock user data
  const user = {
    id: "USR12345",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0912 345 678",
    address: "123 Đường Lê Lợi, Quận Hoàn Kiếm, Hà Nội",
    joinDate: "15/06/2023",
    profileImage: "https://placehold.co/200x200/E8D5C4/594545?text=NVA",
  }

  // Mock loyalty data
  const loyalty = {
    currentRank: "Bạc",
    points: 2450,
    pointsToNextRank: 550,
    nextRank: "Vàng",
    totalSpent: "5.680.000 ₫",
    memberSince: "15/06/2023",
  }

  // Mock points history
  const pointsHistory = [
    {
      id: 1,
      date: "25/03/2024",
      description: "Đặt món - Đơn hàng #ORD98765",
      points: 250,
      type: "earned",
    },
    {
      id: 2,
      date: "15/03/2024",
      description: "Đổi điểm - Miễn phí món Gyoza",
      points: -500,
      type: "redeemed",
    },
    {
      id: 3,
      date: "10/03/2024",
      description: "Đặt bàn - Đặt chỗ #RES45678",
      points: 100,
      type: "earned",
    },
    {
      id: 4,
      date: "28/02/2024",
      description: "Đặt món - Đơn hàng #ORD87654",
      points: 300,
      type: "earned",
    },
    {
      id: 5,
      date: "15/02/2024",
      description: "Đổi điểm - Giảm giá 10%",
      points: -800,
      type: "redeemed",
    },
    {
      id: 6,
      date: "05/02/2024",
      description: "Đặt món - Đơn hàng #ORD76543",
      points: 200,
      type: "earned",
    },
  ]

  // Loyalty tiers information
  const loyaltyTiers = [
    {
      name: "Đồng",
      pointsRequired: 0,
      benefits: ["Tích 5% điểm trên mỗi đơn hàng", "Quà sinh nhật"],
    },
    {
      name: "Bạc",
      pointsRequired: 2000,
      benefits: ["Tích 7% điểm trên mỗi đơn hàng", "Quà sinh nhật", "Ưu tiên đặt bàn"],
    },
    {
      name: "Vàng",
      pointsRequired: 3000,
      benefits: [
        "Tích 10% điểm trên mỗi đơn hàng",
        "Quà sinh nhật đặc biệt",
        "Ưu tiên đặt bàn",
        "Miễn phí món khai vị mỗi tháng",
      ],
    },
    {
      name: "Bạch Kim",
      pointsRequired: 5000,
      benefits: [
        "Tích 12% điểm trên mỗi đơn hàng",
        "Quà sinh nhật đặc biệt",
        "Ưu tiên đặt bàn VIP",
        "Miễn phí món khai vị mỗi tháng",
        "Giảm 5% tổng hóa đơn",
      ],
    },
  ]

  // Calculate progress percentage to next rank
  const calculateProgress = () => {
    const currentTier = loyaltyTiers.find((tier) => tier.name === loyalty.currentRank)
    const nextTier = loyaltyTiers.find((tier) => tier.name === loyalty.nextRank)

    if (!currentTier || !nextTier) return 0

    const pointsRange = nextTier.pointsRequired - currentTier.pointsRequired
    const userProgress = loyalty.points - currentTier.pointsRequired

    return Math.min(Math.round((userProgress / pointsRange) * 100), 100)
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}
      <nav className="bg-[#FFF9F0] border-b border-[#E8D5C4] px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-[#9E7676] text-2xl font-semibold">寿司匠</h1>
            <span className="ml-2 text-[#9E7676]">Sushi Takumi</span>
          </div>
          <div className="hidden md:flex space-x-6 text-[#815B5B]">
            <a href="#" className="hover:text-[#594545] transition-colors">
              Thực đơn
            </a>
            <a href="#" className="hover:text-[#594545] transition-colors">
              Về chúng tôi
            </a>
            <a href="#" className="hover:text-[#594545] transition-colors">
              Liên hệ
            </a>
            <a href="#" className="hover:text-[#594545] transition-colors">
              Đặt bàn
            </a>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <img
                src={user.profileImage || "/placeholder.svg"}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-[#9E7676]"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="bg-[#594545] text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Tài khoản của tôi</h1>
          <p className="text-[#E8D5C4]">Quản lý thông tin cá nhân và theo dõi điểm tích lũy</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - User Info */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={user.profileImage || "/placeholder.svg"}
                    alt={user.name}
                    className="w-24 h-24 rounded-full border-4 border-[#E8D5C4] mb-4"
                  />
                  <h2 className="text-xl font-semibold text-[#594545]">{user.name}</h2>
                  <p className="text-[#9E7676]">Thành viên {loyalty.currentRank}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Email</h3>
                    <p className="text-[#594545]">{user.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Số điện thoại</h3>
                    <p className="text-[#594545]">{user.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Địa chỉ</h3>
                    <p className="text-[#594545]">{user.address}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#815B5B]">Ngày tham gia</h3>
                    <p className="text-[#594545]">{user.joinDate}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors">
                    Chỉnh sửa thông tin
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-[#594545] mb-4">Tài khoản</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Thông tin cá nhân
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
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
                      Lịch sử đơn hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Điểm tích lũy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
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
                      Thông báo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
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
                      Cài đặt tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-[#815B5B] hover:text-[#594545] py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Loyalty & Points */}
            <div className="lg:w-2/3">
              {/* Loyalty Status */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-[#594545]">Hạng thành viên</h2>
                  <span className="bg-[#9E7676] text-white px-3 py-1 rounded-full text-sm">{loyalty.currentRank}</span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#815B5B]">Tiến độ lên hạng {loyalty.nextRank}</span>
                    <span className="text-[#815B5B]">
                      {loyalty.points}/{loyaltyTiers.find((tier) => tier.name === loyalty.nextRank)?.pointsRequired}{" "}
                      điểm
                    </span>
                  </div>
                  <div className="w-full bg-[#E8D5C4] rounded-full h-2.5">
                    <div className="bg-[#9E7676] h-2.5 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
                  </div>
                  <p className="text-sm text-[#9E7676] mt-2">
                    Còn thiếu {loyalty.pointsToNextRank} điểm để lên hạng {loyalty.nextRank}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#FFF3E4] p-4 rounded-lg text-center">
                    <h3 className="text-[#594545] font-medium mb-1">Điểm hiện tại</h3>
                    <p className="text-2xl font-bold text-[#9E7676]">{loyalty.points}</p>
                  </div>
                  <div className="bg-[#FFF3E4] p-4 rounded-lg text-center">
                    <h3 className="text-[#594545] font-medium mb-1">Tổng chi tiêu</h3>
                    <p className="text-2xl font-bold text-[#9E7676]">{loyalty.totalSpent}</p>
                  </div>
                  <div className="bg-[#FFF3E4] p-4 rounded-lg text-center">
                    <h3 className="text-[#594545] font-medium mb-1">Thành viên từ</h3>
                    <p className="text-2xl font-bold text-[#9E7676]">{loyalty.memberSince}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#594545] mb-3">Quyền lợi của bạn</h3>
                  <ul className="list-disc pl-5 text-[#815B5B] space-y-1">
                    {loyaltyTiers
                      .find((tier) => tier.name === loyalty.currentRank)
                      ?.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* Points History */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#594545]">Lịch sử điểm</h2>
                  <div>
                    <select className="bg-[#FFF9F0] border border-[#E8D5C4] text-[#594545] rounded-md px-3 py-1.5 text-sm">
                      <option value="all">Tất cả giao dịch</option>
                      <option value="earned">Điểm nhận được</option>
                      <option value="redeemed">Điểm đã đổi</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-[#E8D5C4]">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider">
                          Ngày
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-[#815B5B] uppercase tracking-wider">
                          Mô tả
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-[#815B5B] uppercase tracking-wider">
                          Điểm
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8D5C4]">
                      {pointsHistory.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-[#594545]">{transaction.date}</td>
                          <td className="px-4 py-4 text-sm text-[#594545]">{transaction.description}</td>
                          <td
                            className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${
                              transaction.type === "earned" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {transaction.type === "earned" ? "+" : ""}
                            {transaction.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-sm text-[#815B5B]">Hiển thị 1-6 của 24 giao dịch</p>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#815B5B] hover:bg-[#FFF3E4]">
                      Trước
                    </button>
                    <button className="px-3 py-1 bg-[#9E7676] text-white rounded-md">1</button>
                    <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#815B5B] hover:bg-[#FFF3E4]">
                      2
                    </button>
                    <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#815B5B] hover:bg-[#FFF3E4]">
                      3
                    </button>
                    <button className="px-3 py-1 border border-[#E8D5C4] rounded-md text-[#815B5B] hover:bg-[#FFF3E4]">
                      Tiếp
                    </button>
                  </div>
                </div>
              </div>

              {/* Redeem Points Section */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-semibold text-[#594545] mb-4">Đổi điểm</h2>
                <p className="text-[#815B5B] mb-6">
                  Sử dụng điểm tích lũy của bạn để đổi lấy các ưu đãi hấp dẫn tại Sushi Takumi
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Giảm giá 10%</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Áp dụng cho đơn hàng tiếp theo</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        800 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>

                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Miễn phí món Gyoza</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Áp dụng cho đơn hàng từ 500.000đ</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        500 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>

                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Miễn phí giao hàng</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Áp dụng cho 3 đơn hàng tiếp theo</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        300 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>

                  <div className="border border-[#E8D5C4] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-[#594545]">Nâng cấp set Sushi</h3>
                        <p className="text-sm text-[#815B5B] mt-1">Nâng cấp miễn phí từ set thường lên set đặc biệt</p>
                      </div>
                      <span className="bg-[#FFF3E4] text-[#9E7676] px-2 py-1 rounded-md text-sm font-medium">
                        1000 điểm
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors text-sm">
                      Đổi ngay
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <a href="#" className="text-[#9E7676] hover:text-[#815B5B] text-sm font-medium">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#594545] text-white py-8 px-4 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">寿司匠 Sushi Takumi</h3>
              <p className="text-[#E8D5C4]">Mang đến trải nghiệm sushi tuyệt hảo giữa truyền thống và đổi mới.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>{" "}
              <p className="text-[#E8D5C4]">Quận Hoàn Kiếm, Hà Nội</p>
              <p className="text-[#E8D5C4]">Điện thoại: 024-XXXX-XXXX</p>
              <p className="text-[#E8D5C4]">Email: info@sushitakumi.vn</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Giờ mở cửa</h3>
              <p className="text-[#E8D5C4]">Thứ 2-6: 11:30 - 14:00, 17:00 - 22:00</p>
              <p className="text-[#E8D5C4]">Thứ 7, CN & ngày lễ: 12:00 - 22:00</p>
            </div>
          </div>
          <hr className="my-6 border-[#815B5B]" />
          <div className="text-center text-[#E8D5C4]">
            <p>© 2024 寿司匠 Sushi Takumi. Đã đăng ký bản quyền.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
