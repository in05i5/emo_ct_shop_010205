import { Header } from './components/Header';
import { CategoryBar } from './components/CategoryBar';
import { ProductGrid } from './components/ProductGrid';
import { BenefitsSection } from './components/BenefitsSection';
import { PromoBanner } from './components/PromoBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#e8d5d0]">
      <Header />
      <CategoryBar />
      <ProductGrid />
      <BenefitsSection />
      <PromoBanner />
      <Footer />
    </div>
  );
}