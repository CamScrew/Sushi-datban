export default function CardList({ items = [], showTag = false, showJpName = false }) {
  if (items.length === 0) {
    return <p className="text-center text-gray-500">Không có món ăn nào</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id || item.name}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="relative">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            {showTag && item.tag && (
              <div className="absolute top-4 right-4 bg-[#9E7676] text-white px-3 py-1 rounded-full text-sm">
                đăc biệt
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-[#594545]">{item.name}</h3>
                {showJpName && item.jpName && (
                  <p className="text-[#9E7676]">{item.jpName}</p>
                )}
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
  );
}
