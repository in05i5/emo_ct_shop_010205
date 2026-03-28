import { Truck, Award, Tag, RefreshCcw } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'giao hàng\ntoàn quốc',
  },
  {
    icon: Award,
    title: 'giày chính hãng',
  },
  {
    icon: Tag,
    title: 'giá tốt',
  },
  {
    icon: RefreshCcw,
    title: 'đổi trả 7 ngày',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-8 bg-[#e8d5d0]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">Ưu điểm của shop</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#f5e5e0] flex items-center justify-center mb-3 shadow-md">
                <benefit.icon className="w-10 h-10 text-[#8b5a5a]" />
              </div>
              <p className="text-xs text-gray-700 whitespace-pre-line leading-tight">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}