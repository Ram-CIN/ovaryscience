import Header from "@/components/Header";
import VisionMission from "@/components/VisionMission";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "Vision & Mission | Ovira Science",
  description:
    "Explore Ovira Science's vision and mission for ethical, compassionate, and advanced fertility care.",
};

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <VisionMission />
      <Footer />
      <FloatingActions />
    </>
  );
}
