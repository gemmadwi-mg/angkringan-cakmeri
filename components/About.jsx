"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px]"
      >
        <h1 className="mb-9">Let's Talk About Angkringan Cak Meri</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          tenetur exercitationem quo quis consequatur dolorem fuga neque
          reiciendis laborum odit.
        </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          placeat non fugit vero iusto earum accusamus sunt quis nam sed.
        </p>
        <Button>Read More</Button>
      </motion.div>
      {/* img */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={710}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;
