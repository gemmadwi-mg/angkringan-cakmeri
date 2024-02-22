"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "@/variants";
import { Facebook, Instagram, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.png" width={90} height={36} alt="" />
            </Link>
          </div>
          {/* grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* socials */}
            <div>
              <h4 className="font-semibold mb-5">Socials</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li className="flex items-center flex-row gap-3">
                  <div>
                    <Facebook />
                  </div>
                  <Link href="https://www.facebook.com/angkringan.cak.meri">
                    Facebook
                  </Link>
                </li>
                <li className="flex items-center flex-row gap-3">
                  <Instagram />
                  <Link href="https://www.instagram.com/angkringancakmeri/">
                    Instagram
                  </Link>
                </li>
                <li className="flex items-center flex-row gap-3">
                  <Youtube />
                  <Link href="https://www.youtube.com/@CakMeriEntertainment">
                    Youtube
                  </Link>
                </li>
                <li className="flex items-center flex-row gap-3">
                  <Phone /> +62 819-9955-6993
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright text */}
        <div className="flex justify-center">
          <p className="text-white">
            Copyright &copy; Cak Meri Entertainment 2024
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
