"use client";
import Headphone1Img from "@/public/assets/headphone.png";
import Headphone2Img from "@/public/assets/headphone2.png";
import Headphone3Img from "@/public/assets/headphone3.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const fadUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeIn,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeIn,
      },
    },
  };
};

const headphonesData = [
  {
    id: 1,
    title: "Wireless Headphones",
    description:
      "Experience the freedom of wireless sound with our cutting-edge headphones.",
    image: Headphone1Img,
    price: "$199.99",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    title: "Wireless Headphones2",
    description:
      "Experience the freedom of wireless sound with our cutting-edge headphones.",
    image: Headphone2Img,
    price: "$299.99",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    title: "Wireless Headphones3",
    description:
      "Experience the freedom of wireless sound with our cutting-edge headphones.",
    image: Headphone3Img,
    price: "$399.99",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];
export default function Hero() {
  const [activeHeadphone, setActiveHeadphone] = useState(headphonesData[0]);
  return (
    <>
      <section className="bg-brand-dark text-white font-varela overflow-hidden">
        <div className="px-10 md:px-20 grid grid-cols-1 min-h-[700px] md:grid-cols-2">
          {/* headphones info  */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px}">
            <div className="space-y-5 md:text-left text-center">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    variants={fadUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={activeHeadphone.id}
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeHeadphone.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  variants={fadUp(0.1)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key={activeHeadphone.id}
                  className="text-sm leading-loose text-white/80"
                >
                  {activeHeadphone.description}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundElement: (
                      <div>
                        <img src={activeHeadphone.image.src} alt="" />
                      </div>
                    ),
                    backgroundColor: activeHeadphone.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.button
                    variants={fadUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={activeHeadphone.id}
                    style={{ backgroundColor: activeHeadphone.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* headphones list seperator  */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1] bg-white"> </div>
                <p className="uppercase text-sm">Top Headphones for you</p>
                <div className="w-20 h-[1] bg-white"></div>
              </div>

              {/* headphones list switcher  */}
              <div className="grid grid-cols-3 gap-10">
                {headphonesData.map((headphone) => (
                  <UpdateFollower
                    key={headphone.id}
                    mouseOptions={{
                      backgroundColor: headphone.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      rotate: -720,
                      scale: 4,
                      text: "VIEW",
                      textFontSize: "2px",
                    }}
                  >
                    <div
                      onClick={() => setActiveHeadphone(headphone)}
                      className="grid grid-cols-2 place-items-center cursor-pointer"
                      key={headphone.id}
                    >
                      <div>
                        <Image
                          className=" w-[200px]"
                          src={headphone.image}
                          alt={headphone.title}
                        />
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs ml-2 md:ml-0 md:text-base font-bold">
                          {headphone.price}
                        </p>
                        <p className="text-xs ml-5 md:ml-0  fomt-normal text-nowrap">
                          {headphone.modal}
                        </p>
                      </div>
                    </div>
                  </UpdateFollower>
                ))}
              </div>
            </div>
          </div>
          {/* heroimg */}

          <div className="flex flex-col mx-auto justify-end item-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHeadphone.id}
                variants={fadUp(0.2)}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeIn }}
                exit={{
                  opacity: 0,
                  y: 100,
                  scale: 0.9,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  className="w-[300px] md:w-[400px] xl:w-[550px]"
                  src={activeHeadphone.image}
                  alt={activeHeadphone.title}
                />
              </motion.div>{" "}
            </AnimatePresence>
          </div>

          {/* whatsapp icon */}
          <div className="text-3xl fixed bottom-10 right-10 text-white z-50 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <Link href={""} />
            <FaWhatsapp />
          </div>
        </div>
      </section>
    </>
  );
}
