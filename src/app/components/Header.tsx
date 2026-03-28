import { Search } from 'lucide-react';
import logoMain from 'figma:asset/b1c140f577f418767c03a22171193243ff3657c1.png';
import nikelogo from 'figma:asset/1c4e2ab2eba0d1cab756db6f20d4df7bc28f36a8.png';
import adidaslogo from 'figma:asset/3ae46787d8a8a30ca143e0054f3262e22ea33203.png';
import vanslogo from 'figma:asset/c12e4dacacedae9a3868908a158d0e24abe8cc65.png';
import filalogo from 'figma:asset/1d0e0b3d57a1b52ab5753dcbe952f11d86e545f1.png';
import lvlogo from 'figma:asset/fd8c53488487e32cb7cf211a78909011454651f0.png';
import bitislogo from 'figma:asset/c436eadb80cc3e819c135e1b73de812ea24b66e9.png';
import diorlogo from 'figma:asset/76f142729249721f4ea21ccba3bd730bbd35b36c.png';
import miumiulogo from 'figma:asset/5d52abaa2850f541f677de9e4250e6c57db834f0.png';
import pumalogo from 'figma:asset/9e93334244f9e6c6e1b2822597771ee8dbd3f056.png';
import chanellogo from 'figma:asset/43a29396fda98d358b3b591209d97e09d6b75bf8.png';

const brandBubbles = [
  // Left side - top area
  { logo: nikelogo, name: 'Nike', size: 75, top: '10%', left: '2%', delay: 0 },
  { logo: adidaslogo, name: 'Adidas', size: 60, top: '25%', left: '8%', delay: 0.5 },
  { logo: vanslogo, name: 'Vans', size: 68, top: '45%', left: '3%', delay: 1 },
  
  // Left side - bottom area
  { logo: filalogo, name: 'Fila', size: 62, top: '65%', left: '7%', delay: 1.5 },
  { logo: chanellogo, name: 'Chanel', size: 70, top: '82%', left: '2%', delay: 2 },
  { logo: bitislogo, name: 'Bitis', size: 58, top: '72%', left: '12%', delay: 2.5 },
  
  // Right side - top area
  { logo: pumalogo, name: 'Puma', size: 72, top: '12%', right: '3%', delay: 0.3 },
  { logo: lvlogo, name: 'LV', size: 65, top: '28%', right: '8%', delay: 1.2 },
  { logo: diorlogo, name: 'Dior', size: 60, top: '48%', right: '4%', delay: 1.8 },
  
  // Right side - bottom area
  { logo: miumiulogo, name: 'Miu Miu', size: 68, top: '68%', right: '7%', delay: 0.6 },
  { logo: chanellogo, name: 'Chanel', size: 64, top: '85%', right: '3%', delay: 2.3 },
  { logo: vanslogo, name: 'Vans', size: 58, top: '75%', right: '11%', delay: 1.4 },
];

export function Header() {
  return (
    <header className="relative bg-[#d4a5a5] py-8 overflow-hidden rounded-[40px] mx-4 my-4">
      {/* Brand Bubbles */}
      {brandBubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm animate-float overflow-hidden md:block hidden"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: bubble.top,
            left: bubble.left,
            right: bubble.right,
            animationDelay: `${bubble.delay}s`,
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          }}
        >
          <img 
            src={bubble.logo} 
            alt={bubble.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Mobile Brand Bubbles - Smaller and fewer */}
      {brandBubbles.slice(0, 6).map((bubble, index) => (
        <div
          key={`mobile-${index}`}
          className="absolute rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm animate-float overflow-hidden md:hidden"
          style={{
            width: `${bubble.size * 0.5}px`,
            height: `${bubble.size * 0.5}px`,
            top: bubble.top,
            left: bubble.left,
            right: bubble.right,
            animationDelay: `${bubble.delay}s`,
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}
        >
          <img 
            src={bubble.logo} 
            alt={bubble.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Shop Name with Icon */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-16 h-16 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src={logoMain} 
                alt="Icon" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
              emo_ct Shop
              <span className="absolute left-0 right-0 top-[55%] h-[2px] md:h-[3px] bg-gray-900"></span>
            </h1>
          </div>
          <p className="text-sm md:text-base text-gray-700">Chuyên Giày Chính Hãng</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="tìm kiếm sản phẩm..."
              className="w-full py-2 md:py-3 px-4 md:px-6 rounded-full border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/95 text-gray-600 text-sm md:text-base"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) translateX(4px) rotate(2deg);
          }
          66% {
            transform: translateY(-4px) translateX(-4px) rotate(-2deg);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}