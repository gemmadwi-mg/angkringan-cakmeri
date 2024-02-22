import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

import dynamic from "next/dynamic";

// Componente: HeroLocation
const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <About />
      <DynamicMap />
      <Footer />
    </main>
  );
}
