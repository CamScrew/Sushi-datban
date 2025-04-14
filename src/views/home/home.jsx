import Header  from "../../components/navbar/header";
import Footer from "../../components/navbar/footer";
import CardList from "../../components/productCard/cardList";
import { useEffect, useState } from "react";
import axios from "axios";
export default function SushiPage() {
  const [product, setProduct] = useState([])

  useEffect(()=>{
      axios.get('http://127.0.0.1:8000/api/menu')
      .then (res => setProduct(res.data))
      .catch(err => console.log(err)
      )
  },[])
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Navigation */}
        <Header />
      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#FFF9F0] relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-stretch">
          {/* Left */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#594545] mb-4">
              Trải nghiệm sushi tuyệt hảo
              <br />
              <span className="text-[#815B5B]">
                giữa truyền thống và đổi mới
              </span>
            </h1>
            <p className="text-[#9E7676] mb-6 max-w-md">
              Thưởng thức sushi Edo chính thống được chế biến từ nguyên liệu
              tươi ngon được chọn lọc kỹ lưỡng và kỹ thuật điêu luyện của các
              đầu bếp. Hãy cùng khám phá hương vị theo mùa đặc biệt.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#9E7676] hover:bg-[#815B5B] text-white px-4 py-2 rounded-md">
                <a href="/menu">Xem thực đơn</a>
              </button>
              <button className="border border-[#9E7676] text-[#9E7676] hover:bg-[#9E7676] hover:text-white px-4 py-2 rounded-md">
                <a href="/datban">Đặt bàn</a>
              </button>
            </div>
          </div>

          {/* Right - Banner */}
          <div className="md:w-1/2 relative min-h-[500px]">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="https://i.pinimg.com/736x/ec/75/1f/ec751f453b9bd675a91ef0faaa8890fd.jpg"
                alt="Đĩa sushi tổng hợp"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section id="menu" className="py-16 px-4 bg-[#FFF3E4]">
  <div className="container mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-[#594545] mb-2">
      Thực đơn đặc biệt
    </h2>
    <p className="text-[#9E7676]">
      Thực đơn đặc biệt với nguyên liệu theo mùa được chọn lọc
    </p>
    <div className="w-24 h-1 bg-[#9E7676] mx-auto mt-4"></div>
  </div>

<CardList items={product}/>
</section>


      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#FFF9F0]">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://i.pinimg.com/736x/5d/80/54/5d80548dfc4bee7bb966b83c568a514b.jpg"
          alt="Đầu bếp sushi đang làm việc"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFF3E4] rounded-lg z-[-1]"></div>
      </div>
    </div>
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-[#594545] mb-4">
        Câu chuyện của chúng tôi
      </h2>
      <div className="w-16 h-1 bg-[#9E7676] mb-6"></div>
      <p className="text-[#815B5B] mb-4">
        Sushi Takumi được sinh ra từ một gia đình có ba thế hệ đầu bếp
        sushi. Chúng tôi giữ gìn kỹ thuật truyền thống trong khi kết hợp
        những phương pháp đổi mới phù hợp với văn hóa ẩm thực hiện đại.
      </p>
      <p className="text-[#815B5B] mb-6">
        Chúng tôi chỉ sử dụng nguyên liệu chất lượng cao nhất, với hải sản
        tươi được vận chuyển trực tiếp từ khắp nơi ở Nhật Bản và rau củ
        theo mùa từ các trang trại hữu cơ địa phương. Hãy thưởng thức tâm
        huyết của người đầu bếp trong từng miếng sushi.
      </p>
      <button className="border border-[#9E7676] text-[#9E7676] hover:bg-[#9E7676] hover:text-white px-4 py-2 rounded-md">
        Tìm hiểu thêm
      </button>
    </div>
  </div>
</section>


      {/* Testimonials */}
      {/* Call to Action */}
      <section id="order" className="py-16 px-4 bg-[#FFF9F0] relative">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-[#594545] mb-4">
            Hãy dành những khoảnh khắc đặc biệt
            <br />
            tại Sushi Takumi
          </h2>
          <p className="text-[#9E7676] mb-8 max-w-xl mx-auto">
            Chúng tôi nhận đặt bàn và đặt món mang về. Hãy thưởng thức hương vị
            của Sushi Takumi trong những dịp đặc biệt của bạn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#9E7676] hover:bg-[#815B5B] text-white px-8 py-6 rounded-md">
              Đặt món ngay
            </button>
            <button className="border border-[#9E7676] text-[#9E7676] hover:bg-[#9E7676] hover:text-white px-8 py-6 rounded-md">
              <a href="/datban">Đặt bàn tại đây</a>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
          <Footer/>
    </div>
  );
}
