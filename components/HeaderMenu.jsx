"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import NavMobileMenu from "./NavMobileMenu";

const HeaderMenu = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   console.log(active);

  return (
    <header
      className={`${
        active ? "bg-black-heavy py-4" : "bg- py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* logo, nav, btn */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" width={75} height={30} alt="" />
          </Link>

          <Link href="/">Home</Link>
          {/* btn */}
          <Link href="https://wa.link/a6mcxq">
            <Button variant="orange" size="sm">
              Pesan
            </Button>
          </Link>
          {/* mobile nav */}
          <NavMobileMenu
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
