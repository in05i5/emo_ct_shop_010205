export function PromoBanner() {
  return (
    <section className="py-8 bg-[#e8d5d0]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#d4a5a5] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              SALE UP TO 30%
            </h2>
            <button className="bg-white text-[#8b5a5a] px-8 py-2 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 font-medium">
              Mua ngay
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1756707235708-01aa79b8bf51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MzQ0MDYwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sneaker"
              className="w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}