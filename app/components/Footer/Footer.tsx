"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import Cards from "@/public/assets/credit-cards.webp";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

export default function Footer() {
  return (
    <footer className="bg-[#9A6866] text-white px-10 md:px-20 py-16 font-poppins overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">SYNC / VIBES</h2>
          <p className="text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
            ratione quidem libero, praesentium ab atque? Quidem maxime, numquam
            dolores.
          </p>

          <div className="flex items-center gap-3 pt-3">
            <FaPhoneAlt size={18} />
            <span className="text-sm">+92 4567890</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt size={18} />
            <span className="text-sm">New city phase 2 wah cantt</span>
          </div>

          <hr className="border-white/50 mt-8" />
        </motion.div>

        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-between"
        >
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <p>Home</p>
            <p>About</p>
            <p>Contact us</p>
            <p>Privacy Policy</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-3 opacity-0">_</h2>
            <p>Home</p>
            <p>About</p>
            <p>Contact us</p>
            <p>Privacy Policy</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">Follow Us</h2>

          <div className="flex items-center gap-4">
            <UpdateFollower
              mouseOptions={{
                scale: 5,
                backgroundColor: "white",
                zIndex: 9999,
                rotate: 720,
                mixBlendMode: "difference",
                backgroundElement: <div />,
              }}
            >
              <FaFacebook size={28} className="cursor-pointer" />
            </UpdateFollower>

            <UpdateFollower
              mouseOptions={{
                scale: 5,
                backgroundColor: "white",
                zIndex: 9999,
                rotate: 720,
                mixBlendMode: "difference",
                backgroundElement: <div />,
              }}
            >
              <FaInstagram size={28} className="cursor-pointer" />
            </UpdateFollower>

            <UpdateFollower
              mouseOptions={{
                scale: 5,
                backgroundColor: "white",
                zIndex: 9999,
                rotate: 720,
                mixBlendMode: "difference",
                backgroundElement: <div />,
              }}
            >
              <FaGoogle size={28} className="cursor-pointer" />
            </UpdateFollower>

            <UpdateFollower
              mouseOptions={{
                scale: 5,
                backgroundColor: "white",
                zIndex: 9999,
                rotate: 720,
                mixBlendMode: "difference",
                backgroundElement: <div />,
              }}
            >
              <FaTwitter size={28} className="cursor-pointer" />
            </UpdateFollower>
          </div>

          <p className="pt-2">Payment Methods</p>

          {/* Card Image */}
          <Image
            src={Cards}
            alt="Payment Cards"
            className="w-[230px] rounded-md shadow"
          />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp(0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-sm mt-12"
      >
        © {new Date().getFullYear()}. All Rights Reserved || SYNC / VIBES
      </motion.div>
    </footer>
  );
}
