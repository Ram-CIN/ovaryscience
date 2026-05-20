import Header from "@/components/Header";
import HeroSlider from "@/components/Hero";
import FertilityJourney from "@/components/FertilityJourney";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import VisionMission from "@/components/VisionMission";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FaqAppointment from "@/components/FaqAppointment";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <FertilityJourney />
      <WhyChooseUs />
      <OurServices />
      <VisionMission />
      <Blog />
      <FaqAppointment />
      <Testimonials />
      <Footer />
      <FloatingActions />
    </>
  );
}
