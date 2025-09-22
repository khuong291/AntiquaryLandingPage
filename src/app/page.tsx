import IntroSection from "@/components/Section/IntroSection";
import FeatureSection from "@/components/Section/FeatureSection";
import TestimonialsSection from "@/components/Section/TestimonialsSection";
import IncludeSection from "@/components/Section/IncludeSection";
import DownloadSoonModal from "@/components/Modal/DownloadSoonModal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DownloadSoonModal />
      {/* Intro Section */}
      <IntroSection />
      {/* Features Section */}
      <FeatureSection />
      {/* BeastID include? */}
      <IncludeSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
