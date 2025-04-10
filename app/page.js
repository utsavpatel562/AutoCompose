"use client"
import ContactMe from "@/components/ui/ContactMe";
import FeaturesSec from "@/components/ui/FeaturesSec";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/ui/HeroSection";
import UsedLang from "@/components/ui/UsedLang";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <UsedLang/>
    <FeaturesSec/>
    <ContactMe/>
    <Footer/>
    </>
  );
}
