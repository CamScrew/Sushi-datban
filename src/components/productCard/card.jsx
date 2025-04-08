import React from 'react'

export default function card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "Omakase Nigiri",
        jpName: "おまかせ握り",
        price: "¥6,800",
        description:
          "Bộ sưu tập 10 miếng nigiri cao cấp được lựa chọn bởi bếp trưởng, phục vụ kèm súp miso và salad",
        image:
          "https://i.pinimg.com/736x/c7/a9/28/c7a928a880fbd3a1ed80e54ff6a35941.jpg",
        tag: "Đặc biệt",
      },
      {
        name: "Kaiseki Ryori",
        jpName: "懐石料理",
        price: "¥12,500",
        description:
          "Bữa ăn nhiều khóa truyền thống với các món ăn theo mùa được chế biến tinh tế",
        image:
          "https://i.pinimg.com/736x/20/61/8d/20618dfe0342956cd9ceb23d463cb201.jpg",
        tag: "Cao cấp",
      },
      {
        name: "Sushi Takumi Set",
        jpName: "寿司匠セット",
        price: "¥8,200",
        description:
          "Bộ sưu tập đặc biệt gồm 6 miếng nigiri, 4 miếng sashimi, 1 roll đặc biệt và súp",
        image:
          "https://i.pinimg.com/736x/cb/bf/f9/cbbff98f35e734cbaa7d38ec09e65881.jpg",
        tag: "Bán chạy",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="relative">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#9E7676] text-white px-3 py-1 rounded-full text-sm">
            {item.tag}
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold text-[#594545]">
                {item.name}
              </h3>
              <p className="text-[#9E7676]">{item.jpName}</p>
            </div>
            <span className="text-lg font-bold text-[#815B5B]">
              {item.price}
            </span>
          </div>
          <p className="text-[#815B5B] mb-4">{item.description}</p>
          <button className="w-full bg-[#9E7676] hover:bg-[#815B5B] text-white py-2 rounded-md transition-colors">
            Đặt món
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}
