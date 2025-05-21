"use client";
import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import SpecialtiesSection from "@/components/Home/SpecialtiesSection";
import OfferSection from "@/components/Home/OfferSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import BookRequestSection from "@/components/Home/BookRequestSection";
import MenuSection from "@/components/Home/MenuSection";

export default function Home() {

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <OfferSection />
      <MenuSection />
      <BookRequestSection />
      <WhyChooseSection />
    </div>
  );
}
