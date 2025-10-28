import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoShowcaseSection from '@/components/VideoShowcaseSection'; // NEW
import FeaturesSection from '@/components/FeaturesSection';
import MockTestPreview from '@/components/MockTestPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <Navbar />
      
      <div id="main-content">
        <HeroSection />
        <VideoShowcaseSection /> {/* NEW - Dedicated Video Section */}
        <FeaturesSection />
        <MockTestPreview />
        <TestimonialsSection />
        <FAQSection />
      </div>

      <Footer />
      <StickyCTA />
    </main>
  );
}
