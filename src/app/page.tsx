import IntroSection from "@/components/Section/IntroSection";
import FeatureSection from "@/components/Section/FeatureSection";
import TestimonialsSection from "@/components/Section/TestimonialsSection";
import DownloadSoonModal from "@/components/Modal/DownloadSoonModal";
import FAQSection from "@/components/Section/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DownloadSoonModal />
      {/* Intro Section */}
      <IntroSection />
      {/* Features Section */}
      <FeatureSection />
      {/* antiquary FAQ? */}
      <FAQSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
