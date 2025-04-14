import Header from "../../components/navbar/header";
import Footer from "../../components/navbar/footer";
import CardList  from "../../components/productCard/cardList";
import axios from "axios";
import { use, useEffect, useState } from "react";

export default function MenuPage() {
  const [product,setProduct] = useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/menu")
        .then(res => (setProduct(res.data)))
        .catch(e => console.log(e)) 
    },[])
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}
      <Header />

      {/* Header Section */}
      <section className="py-12 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-[#594545] mb-4">
            Thực đơn của chúng tôi
          </h1>
          <p className="text-[#9E7676] mb-6">
            Khám phá các món ăn truyền thống và hiện đại được chế biến từ nguyên
            liệu tươi ngon nhất
          </p>
          <div className="w-24 h-1 bg-[#9E7676] mx-auto"></div>
        </div>
      </section>

      {/* Menu Categories Navigation */}
      <section className="py-6 px-4 bg-[#FFF3E4] sticky top-0 z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#specials"
              className="px-4 py-2 bg-[#9E7676] text-white rounded-md hover:bg-[#815B5B] transition-colors"
            >
              Đặc biệt
            </a>
            <a
              href="#appetizers"
              className="px-4 py-2 bg-white text-[#9E7676] border border-[#9E7676] rounded-md hover:bg-[#9E7676] hover:text-white transition-colors"
            >
              Khai vị
            </a>
            <a
              href="#sushi"
              className="px-4 py-2 bg-white text-[#9E7676] border border-[#9E7676] rounded-md hover:bg-[#9E7676] hover:text-white transition-colors"
            >
              Sushi
            </a>
            <a
              href="#sashimi"
              className="px-4 py-2 bg-white text-[#9E7676] border border-[#9E7676] rounded-md hover:bg-[#9E7676] hover:text-white transition-colors"
            >
              Sashimi
            </a>
            <a
              href="#rolls"
              className="px-4 py-2 bg-white text-[#9E7676] border border-[#9E7676] rounded-md hover:bg-[#9E7676] hover:text-white transition-colors"
            >
              Rolls
            </a>
            <a
              href="#rice"
              className="px-4 py-2 bg-white text-[#9E7676] border border-[#9E7676] rounded-md hover:bg-[#9E7676] hover:text-white transition-colors"
            >
              Cơm & Mì
            </a>
            <a
              href="#drinks"
              className="px-4 py-2 bg-white text-[#9E7676] border border-[#9E7676] rounded-md hover:bg-[#9E7676] hover:text-white transition-colors"
            >
              Đồ uống
            </a>
          </div>
        </div>
      </section>

      {/* Special Menu Items */}
      <section id="specials" className="py-16 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#594545] mb-2 text-center">
            Đặc biệt của bếp trưởng
          </h2>
          <p className="text-[#9E7676] text-center mb-12">
            Những món ăn đặc biệt được chế biến từ nguyên liệu theo mùa
          </p>

          <CardList items={product} />
        </div>
      </section>

      {/* Appetizers Section */}
      <section id="appetizers" className="py-16 px-4 bg-[#FFF3E4]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#594545] mb-2 text-center">
            Khai vị
          </h2>
          <p className="text-[#9E7676] text-center mb-12">
            Khởi đầu bữa ăn với những món khai vị truyền thống
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Edamame",
                jpName: "枝豆",
                price: "¥580",
                description: "Đậu nành Nhật Bản hấp với muối biển",
              },
              {
                name: "Agedashi Tofu",
                jpName: "揚げ出し豆腐",
                price: "¥680",
                description:
                  "Đậu phụ chiên giòn phục vụ với nước tương dashi và hành lá",
              },
              {
                name: "Gyoza",
                jpName: "餃子",
                price: "¥750",
                description:
                  "Bánh xếp Nhật Bản nhân thịt lợn và rau, chiên giòn đáy",
              },
              {
                name: "Takoyaki",
                jpName: "たこ焼き",
                price: "¥780",
                description:
                  "Bánh bạch tuộc kiểu Osaka với sốt takoyaki, mayonnaise và bông cá ngừ",
              },
              {
                name: "Miso Soup",
                jpName: "味噌汁",
                price: "¥480",
                description:
                  "Súp miso truyền thống với đậu phụ, rong biển và hành lá",
              },
              {
                name: "Seaweed Salad",
                jpName: "海藻サラダ",
                price: "¥680",
                description: "Salad rong biển tươi với dầu mè",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between p-4 border-b border-[#E8D5C4]"
              >
                <div>
                  <div className="flex items-center mb-1">
                    <h3 className="text-lg font-semibold text-[#594545]">
                      {item.name}
                    </h3>
                    <span className="ml-2 text-sm text-[#9E7676]">
                      {item.jpName}
                    </span>
                  </div>
                  <p className="text-[#815B5B] text-sm">{item.description}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-[#815B5B] mb-2">
                    {item.price}
                  </span>
                  <button className="text-sm bg-[#9E7676] hover:bg-[#815B5B] text-white px-3 py-1 rounded-md transition-colors">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sushi Section */}
      <section id="sushi" className="py-16 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#594545] mb-2 text-center">
            Sushi
          </h2>
          <p className="text-[#9E7676] text-center mb-6">
            Mỗi miếng sushi được làm thủ công bởi đầu bếp sushi của chúng tôi
          </p>
          <p className="text-[#815B5B] text-center mb-12 italic">
            Giá cho 2 miếng (nigiri)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#594545] mb-4 pb-2 border-b border-[#E8D5C4]">
                Nigiri Cơ bản
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Maguro (Cá ngừ)", jpName: "鮪", price: "¥780" },
                  { name: "Sake (Cá hồi)", jpName: "鮭", price: "¥720" },
                  { name: "Ebi (Tôm)", jpName: "海老", price: "¥680" },
                  { name: "Tamago (Trứng)", jpName: "玉子", price: "¥580" },
                  { name: "Ika (Mực)", jpName: "烏賊", price: "¥680" },
                  { name: "Unagi (Lươn)", jpName: "鰻", price: "¥880" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <div>
                      <span className="text-[#594545]">{item.name}</span>
                      <span className="text-xs text-[#9E7676] ml-1">
                        {item.jpName}
                      </span>
                    </div>
                    <span className="font-medium text-[#815B5B]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#594545] mb-4 pb-2 border-b border-[#E8D5C4]">
                Nigiri Cao cấp
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "Otoro (Bụng cá ngừ)",
                    jpName: "大トロ",
                    price: "¥1,280",
                  },
                  { name: "Uni (Cầu gai)", jpName: "雲丹", price: "¥1,580" },
                  {
                    name: "Amaebi (Tôm ngọt)",
                    jpName: "甘海老",
                    price: "¥980",
                  },
                  { name: "Hotate (Sò điệp)", jpName: "帆立", price: "¥880" },
                  {
                    name: "Ikura (Trứng cá hồi)",
                    jpName: "いくら",
                    price: "¥980",
                  },
                  { name: "Anago (Lươn biển)", jpName: "穴子", price: "¥980" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <div>
                      <span className="text-[#594545]">{item.name}</span>
                      <span className="text-xs text-[#9E7676] ml-1">
                        {item.jpName}
                      </span>
                    </div>
                    <span className="font-medium text-[#815B5B]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#594545] mb-4 pb-2 border-b border-[#E8D5C4]">
                Bộ sưu tập Nigiri
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "Nigiri 6 miếng",
                    jpName: "握り6貫",
                    price: "¥2,400",
                    desc: "Lựa chọn của đầu bếp",
                  },
                  {
                    name: "Nigiri 8 miếng",
                    jpName: "握り8貫",
                    price: "¥3,200",
                    desc: "Lựa chọn của đầu bếp",
                  },
                  {
                    name: "Nigiri 10 miếng",
                    jpName: "握り10貫",
                    price: "¥4,000",
                    desc: "Lựa chọn của đầu bếp",
                  },
                  {
                    name: "Nigiri 12 miếng",
                    jpName: "握り12貫",
                    price: "¥4,800",
                    desc: "Lựa chọn của đầu bếp",
                  },
                  {
                    name: "Nigiri Đặc biệt",
                    jpName: "特上握り",
                    price: "¥5,800",
                    desc: "8 miếng cao cấp",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between mb-2">
                    <div>
                      <div className="flex items-center">
                        <span className="text-[#594545]">{item.name}</span>
                        <span className="text-xs text-[#9E7676] ml-1">
                          {item.jpName}
                        </span>
                      </div>
                      <span className="text-xs text-[#815B5B]">
                        {item.desc}
                      </span>
                    </div>
                    <span className="font-medium text-[#815B5B]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sashimi Section */}
      <section id="sashimi" className="py-16 px-4 bg-[#FFF3E4]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#594545] mb-2 text-center">
            Sashimi
          </h2>
          <p className="text-[#9E7676] text-center mb-12">
            Cá tươi ngon nhất được cắt thành từng lát mỏng
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#594545] mb-6 pb-2 border-b border-[#E8D5C4]">
                Sashimi đơn lẻ
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Maguro (Cá ngừ)",
                    jpName: "鮪",
                    price: "¥1,280",
                    pieces: "5 miếng",
                  },
                  {
                    name: "Sake (Cá hồi)",
                    jpName: "鮭",
                    price: "¥1,180",
                    pieces: "5 miếng",
                  },
                  {
                    name: "Hamachi (Cá buri)",
                    jpName: "はまち",
                    price: "¥1,280",
                    pieces: "5 miếng",
                  },
                  {
                    name: "Tai (Cá tráp đỏ)",
                    jpName: "鯛",
                    price: "¥1,380",
                    pieces: "5 miếng",
                  },
                  {
                    name: "Hotate (Sò điệp)",
                    jpName: "帆立",
                    price: "¥1,480",
                    pieces: "5 miếng",
                  },
                  {
                    name: "Amaebi (Tôm ngọt)",
                    jpName: "甘海老",
                    price: "¥1,580",
                    pieces: "5 miếng",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <div className="flex items-center">
                        <span className="text-[#594545] font-medium">
                          {item.name}
                        </span>
                        <span className="text-xs text-[#9E7676] ml-1">
                          {item.jpName}
                        </span>
                      </div>
                      <span className="text-xs text-[#815B5B]">
                        {item.pieces}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-[#815B5B] mr-4">
                        {item.price}
                      </span>
                      <button className="text-sm bg-[#9E7676] hover:bg-[#815B5B] text-white px-3 py-1 rounded-md transition-colors">
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#594545] mb-6 pb-2 border-b border-[#E8D5C4]">
                Bộ sưu tập Sashimi
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Moriawase Nhỏ",
                    jpName: "刺身盛り合わせ小",
                    price: "¥2,800",
                    desc: "Bộ sưu tập 3 loại cá (12 miếng)",
                    image:
                      "https://i.pinimg.com/736x/f7/c8/38/f7c83832cb63a737e33df7552a5ec5a6.jpg",
                  },
                  {
                    name: "Moriawase Vừa",
                    jpName: "刺身盛り合わせ中",
                    price: "¥4,200",
                    desc: "Bộ sưu tập 5 loại cá (20 miếng)",
                    image:
                      "https://i.pinimg.com/736x/99/a5/88/99a588d49d24d58ac9f0a3a4531146bb.jpg",
                  },
                  {
                    name: "Moriawase Lớn",
                    jpName: "刺身盛り合わせ大",
                    price: "¥6,800",
                    desc: "Bộ sưu tập 7 loại cá (30 miếng)",
                    image:
                      "https://i.pinimg.com/736x/64/77/c2/6477c29df6d33f09ffb5bb21a916d1c0.jpg",
                  },
                  {
                    name: "Sashimi Đặc biệt",
                    jpName: "特上刺身",
                    price: "¥8,800",
                    desc: "Bộ sưu tập cao cấp với các loại cá hiếm (25 miếng)",
                    image:
                      "https://i.pinimg.com/736x/be/d8/6f/bed86fc74d63d840f49ecf035f713ea6.jpg",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-1/3 object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="text-[#594545] font-medium">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#9E7676] ml-1">
                            {item.jpName}
                          </span>
                        </div>
                        <p className="text-xs text-[#815B5B] mb-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#815B5B]">
                          {item.price}
                        </span>
                        <button className="text-sm bg-[#9E7676] hover:bg-[#815B5B] text-white px-3 py-1 rounded-md transition-colors">
                          Đặt món
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rolls Section */}
      <section id="rolls" className="py-16 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#594545] mb-2 text-center">
            Rolls
          </h2>
          <p className="text-[#9E7676] text-center mb-12">
            Các loại roll truyền thống và hiện đại
          </p>
          <CardList items={product}List />
        </div>
      </section>

      {/* Rice & Noodles Section */}
      <section id="rice" className="py-16 px-4 bg-[#FFF3E4]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#594545] mb-2 text-center">
            Cơm & Mì
          </h2>
          <p className="text-[#9E7676] text-center mb-12">
            Các món cơm và mì truyền thống Nhật Bản
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#594545] mb-6 pb-2 border-b border-[#E8D5C4]">
                Cơm
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Tekka Don",
                    jpName: "鉄火丼",
                    price: "¥1,680",
                    desc: "Cơm phủ cá ngừ sashimi",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                  {
                    name: "Salmon Don",
                    jpName: "サーモン丼",
                    price: "¥1,580",
                    desc: "Cơm phủ cá hồi sashimi",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                  {
                    name: "Unagi Don",
                    jpName: "鰻丼",
                    price: "¥2,280",
                    desc: "Cơm phủ lươn nướng sốt teriyaki",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                  {
                    name: "Chirashi Don",
                    jpName: "ちらし丼",
                    price: "¥2,480",
                    desc: "Cơm phủ nhiều loại sashimi và trứng cá",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-1/3 object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="text-[#594545] font-medium">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#9E7676] ml-1">
                            {item.jpName}
                          </span>
                        </div>
                        <p className="text-xs text-[#815B5B] mb-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#815B5B]">
                          {item.price}
                        </span>
                        <button className="text-sm bg-[#9E7676] hover:bg-[#815B5B] text-white px-3 py-1 rounded-md transition-colors">
                          Đặt món
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#594545] mb-6 pb-2 border-b border-[#E8D5C4]">
                Mì
              </h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Tempura Udon",
                    jpName: "天ぷらうどん",
                    price: "¥1,380",
                    desc: "Mì udon nóng với tempura tôm và rau củ",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                  {
                    name: "Zaru Soba",
                    jpName: "ざるそば",
                    price: "¥1,180",
                    desc: "Mì soba lạnh với nước chấm",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                  {
                    name: "Nabeyaki Udon",
                    jpName: "鍋焼きうどん",
                    price: "¥1,580",
                    desc: "Mì udon nóng trong nồi với trứng, tempura và các loại hải sản",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                  {
                    name: "Yakisoba",
                    jpName: "焼きそば",
                    price: "¥1,280",
                    desc: "Mì xào với thịt và rau củ",
                    image:
                      "https://i.pinimg.com/736x/33/79/fb/3379fb928fa3b06997addd2c7941202a.jpg",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-1/3 object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-1">
                          <h4 className="text-[#594545] font-medium">
                            {item.name}
                          </h4>
                          <span className="text-xs text-[#9E7676] ml-1">
                            {item.jpName}
                          </span>
                        </div>
                        <p className="text-xs text-[#815B5B] mb-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#815B5B]">
                          {item.price}
                        </span>
                        <button className="text-sm bg-[#9E7676] hover:bg-[#815B5B] text-white px-3 py-1 rounded-md transition-colors">
                          Đặt món
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section id="drinks" className="py-16 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#594545] mb-2 text-center">
            Đồ uống
          </h2>
          <p className="text-[#9E7676] text-center mb-12">
            Thức uống truyền thống và hiện đại của Nhật Bản
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#594545] mb-4 pb-2 border-b border-[#E8D5C4]">
                Rượu Sake
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "Junmai Daiginjo",
                    price: "¥980 / ly",
                    bottle: "¥8,800 / chai",
                  },
                  {
                    name: "Ginjo",
                    price: "¥780 / ly",
                    bottle: "¥6,800 / chai",
                  },
                  {
                    name: "Honjozo",
                    price: "¥680 / ly",
                    bottle: "¥5,800 / chai",
                  },
                  {
                    name: "Nigori (Sake đục)",
                    price: "¥780 / ly",
                    bottle: "¥6,800 / chai",
                  },
                  {
                    name: "Sake nóng",
                    price: "¥680 / ly",
                    bottle: "¥5,800 / chai",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="text-[#594545] font-medium">
                      {item.name}
                    </span>
                    <div className="flex justify-between text-sm text-[#815B5B]">
                      <span>{item.price}</span>
                      <span>{item.bottle}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#594545] mb-4 pb-2 border-b border-[#E8D5C4]">
                Bia & Rượu
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Asahi Super Dry", price: "¥680" },
                  { name: "Sapporo Premium", price: "¥680" },
                  { name: "Kirin Ichiban", price: "¥680" },
                  { name: "Suntory Whisky", price: "¥880 / ly" },
                  { name: "Plum Wine (Umeshu)", price: "¥780 / ly" },
                  { name: "Shochu", price: "¥780 / ly" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-[#594545]">{item.name}</span>
                    <span className="font-medium text-[#815B5B]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#594545] mb-4 pb-2 border-b border-[#E8D5C4]">
                Đồ uống không cồn
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Trà xanh Nhật Bản", price: "¥480" },
                  { name: "Trà Genmaicha", price: "¥480" },
                  { name: "Trà Hojicha", price: "¥480" },
                  { name: "Ramune (Soda Nhật)", price: "¥580" },
                  { name: "Nước ép trái cây tươi", price: "¥680" },
                  { name: "Nước lọc Evian", price: "¥380" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-[#594545]">{item.name}</span>
                    <span className="font-medium text-[#815B5B]">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-12 px-4 bg-[#FFF3E4]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#594545] mb-6 text-center">
            Thông tin dinh dưỡng
          </h2>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9E7676] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
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
                </div>
                <h3 className="text-lg font-semibold text-[#594545] mb-2">
                  Tùy chỉnh
                </h3>
                <p className="text-sm text-[#815B5B]">
                  Chúng tôi có thể điều chỉnh món ăn theo yêu cầu của bạn. Vui
                  lòng thông báo cho nhân viên.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#9E7676] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#594545] mb-2">
                  Dị ứng
                </h3>
                <p className="text-sm text-[#815B5B]">
                  Nếu bạn có bất kỳ dị ứng thực phẩm nào, vui lòng thông báo cho
                  nhân viên trước khi đặt món.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#9E7676] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#594545] mb-2">
                  Tươi ngon
                </h3>
                <p className="text-sm text-[#815B5B]">
                  Chúng tôi chỉ sử dụng nguyên liệu tươi ngon nhất, được nhập
                  mỗi ngày để đảm bảo chất lượng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#FFF9F0]">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#594545] mb-4">
            Sẵn sàng đặt món?
          </h2>
          <p className="text-[#9E7676] mb-8">
            Đặt món trực tuyến hoặc đặt bàn để thưởng thức ẩm thực Nhật Bản
            tuyệt vời tại nhà hàng của chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#9E7676] hover:bg-[#815B5B] text-white px-8 py-3 rounded-md">
              Đặt món ngay
            </button>
            <button className="border border-[#9E7676] text-[#9E7676] hover:bg-[#9E7676] hover:text-white px-8 py-3 rounded-md">
              <a href="/datban">Đặt bàn</a>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
