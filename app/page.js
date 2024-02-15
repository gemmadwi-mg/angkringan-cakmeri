import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      <Map />
      <div className="h-[4000px]"></div>
    </main>
  );
}
