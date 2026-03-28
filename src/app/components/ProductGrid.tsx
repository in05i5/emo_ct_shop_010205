import jordanDiorImg from 'figma:asset/ff9b999aa6ca731a3f37a146145534030aa36316.png';
import pinkSneakerImg from 'figma:asset/ab0b2b36bc55599fc0e9119a35732dab90aae965.png';
import creamSneakerImg from 'figma:asset/4c109765630bd71dc026bb2307f83b65ad83dcb5.png';
import redVansImg from 'figma:asset/a0035a6b0480fa471ea43f2627828d0e0f047d8b.png';
import whiteNikeImg from 'figma:asset/16f9b50a57079368586ec154bbbd1a5639c76b86.png';
import nikeLVImg from 'figma:asset/912b0c76c3e9c68b9e5abdae72778848e23eea59.png';

const products = [
  {
    id: 1,
    name: 'Giày Sneaker Street Style',
    code: 'EMO001',
    oldPrice: '1.200.000đ',
    newPrice: '750.000đ',
    image: pinkSneakerImg,
  },
  {
    id: 2,
    name: 'Vans Old Skool Red',
    code: 'EMO002',
    oldPrice: '1.500.000đ',
    newPrice: '950.000đ',
    image: redVansImg,
  },
  {
    id: 3,
    name: 'Nike Air Force 1 Low',
    code: 'EMO003',
    oldPrice: '1.699.000đ',
    newPrice: '899.000đ',
    image: whiteNikeImg,
  },
  {
    id: 4,
    name: 'Vans Classic Cream',
    code: 'EMO004',
    oldPrice: '1.300.000đ',
    newPrice: '820.000đ',
    image: creamSneakerImg,
  },
  {
    id: 5,
    name: 'Nike Air Force 1 LV Custom',
    code: 'EMO005',
    oldPrice: '2.200.000đ',
    newPrice: '1.450.000đ',
    image: nikeLVImg,
  },
  {
    id: 6,
    name: 'Nike Air Jordan Dior Style',
    code: 'EMO006',
    oldPrice: '3.500.000đ',
    newPrice: '2.200.000đ',
    image: jordanDiorImg,
  },
];

export function ProductGrid() {
  return (
    <section className="py-6 bg-[#e8d5d0]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-3"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-b from-gray-50 to-white flex items-center justify-center mb-2 rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Product Info */}
              <div className="text-left">
                <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-1">Mã SP: {product.code}</p>
                <p className="text-xs text-gray-400 line-through mb-0.5">Giá cũ: {product.oldPrice}</p>
                <p className="text-sm font-semibold text-red-600">Giá mới: {product.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}