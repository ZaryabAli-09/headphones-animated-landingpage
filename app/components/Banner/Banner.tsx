import HeadphonesBannerImg from "@/public/assets/headphone4.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

import { fadUp } from "../Services/Services";

export default function Banner() {
  return (
    <>
      <section>
        <div className="px-10  md:px-20  py-14 grid grid-cols-1  md:grid-cols-2 space-y-6 md:space-y-0 gap-12 overflow-hidden">
          {/* Banner section  */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -180 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              className="w-[300px] md:w-[400px] mx-auto"
              src={HeadphonesBannerImg}
              alt="headphoneImg"
            />
          </motion.div>
          {/* Banner text info */}
          <div className="flex justify-center items-center">
            <div className="flex flex-col  space-y-4 lg:max-w-[450px] text-center md:text-left">
              <motion.h1
                variants={fadUp(0.7)}
                initial="hidden"
                whileInView={"show"}
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphones With The Latest Technology
              </motion.h1>
              <motion.p
                variants={fadUp(0.9)}
                initial="hidden"
                whileInView={"show"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae iusto minima ad ut id eos accusantium aut, aperiam
                quis incidunt!
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                }}
              >
                <motion.button
                  variants={fadUp(1.3)}
                  initial="hidden"
                  whileInView={"show"}
                  className="border-2 border-red-500 text-red-500 rounded-md hover:bg-red-600 hover:text-white px-6 py-2"
                >
                  Shop Now
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
