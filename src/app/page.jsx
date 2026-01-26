import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VisionStatement from "../components/VisionStatement";
import AboutSection from "../components/AboutSection";
import TestimonialSection from "../components/TestimonialSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import ExcellenceSection from "../components/ExcellenceSection";
import CoachesSection from "../components/CoachesSection";
import FacilitiesSection from "../components/FacilitiesSection";
import CoachesEventsSection from "../components/CoachesEventsSection";
import Footer from "../components/Footer";

//CHANGES MADE: 1. Added a new section for the coaches events.

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <VisionStatement />
      <AboutSection />
      <TestimonialSection />
      <KeyFeaturesSection />
      <ExcellenceSection />
      <CoachesSection />
      <FacilitiesSection />
      <CoachesEventsSection />
      <Footer />
    </div>
  );
}
