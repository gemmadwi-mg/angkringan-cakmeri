"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/variants";

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
        <h1 className="mb-9">Angkringan Cak Meri</h1>
        <p className="mb-8">
          Angkringan Cak Meri adalah sebuah warung makan yang menawarkan
          pengalaman kuliner yang autentik dan khas dari tradisi angkringan
          Indonesia. Terletak di Cokrowati, tempat ini menjadi tempat favorit
          bagi banyak orang untuk menikmati hidangan lezat dalam suasana yang
          santai dan ramah. Angkringan Cak Meri terkenal dengan hidangan khas
          angkringan seperti nasi kucing, sate usus, telur puyuh, dan berbagai
          jenis gorengan yang disajikan.
        </p>
        <p className="mb-10">
          Di samping hidangan utama, Angkringan Cak Meri juga menawarkan beragam
          minuman tradisional seperti susu jahe, wedang uwuh, es teh jumbo, dan
          minuman khas angkringan lainnya yang menyegarkan. Selain itu, suasana
          di Angkringan Cak Meri sangatlah ramah dan hangat, dengan meja-meja
          sederhana yang teratur rapi dan keramahtamahan dari pemilik.
        </p>
        <p className="mb-10">
          Angkringan Cak Meri bukan hanya sekadar tempat makan, tetapi juga
          menjadi tempat berkumpul bagi berbagai kalangan masyarakat. Dengan
          harga yang terjangkau dan cita rasa yang autentik, Angkringan Cak Meri
          menjadi pilihan yang tepat bagi siapa pun yang ingin menikmati
          hidangan khas angkringan dalam suasana yang menyenangkan dan penuh
          kehangatan.
        </p>
      </motion.div>
      {/* img */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/image.png"
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
