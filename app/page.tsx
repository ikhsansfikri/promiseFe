import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import AppGrid from "./components/AppGrid";
import Footer from "./components/Footer";
import AnnouncementsSection from "./components/AnnouncementsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureGrid />
      <AnnouncementsSection />
      <AppGrid />
      <Footer />
    </>
  );
}
