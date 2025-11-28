"use client";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { useState } from "react";
const menuItems = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Categories", link: "#" },
  { id: 3, title: "Blogs", link: "#" },
  { id: 4, title: "About", link: "#" },
  { id: 5, title: "Contact", link: "#" },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="bg-brand-dark text-white py-6 font-poppins">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="px-10 md:px-26 flex items-center justify-between"
        >
          {/* logo section  */}
          <div>
            <Link
              className="text-xl font-bold uppercase whitespace-nowrap"
              href="#"
            >
              SYNC /{" "}
              <span className="font-extralight text-white/70">VIBES</span>
            </Link>
          </div>

          {/* menu section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <Link
                      className="inline-block text-sm py-2 px-3 uppercase"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </UpdateFollower>
                </li>
              ))}
              <div className="text-xl pr-14">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <SlEarphones />{" "}
                </UpdateFollower>
              </div>
            </ul>
          </div>

          {/* mobile menu section  */}
          <div className="md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.nav>
      </div>

      {toggleMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-screen w-[75%] bg-gradient-to-br from-brand-dark via-gray-900 to-black z-50 shadow-2xl"
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setToggleMenu(false)}
              className="text-white text-3xl hover:rotate-90 transition-transform duration-300"
            >
              ✕
            </button>
          </div>

          {/* Logo in Mobile Menu */}
          <div className="px-8 mb-8">
            <Link
              className="text-2xl font-bold uppercase text-white"
              href="#"
              onClick={() => setToggleMenu(false)}
            >
              SYNC /{" "}
              <span className="font-extralight text-white/70">VIBES</span>
            </Link>
          </div>

          {/* Mobile Menu Items */}
          <motion.ul className="flex flex-col gap-2 px-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  className="block text-white text-lg py-4 px-4 uppercase tracking-wide hover:bg-white/10 rounded-lg transition-all duration-300 border-b border-white/10"
                  href={item.link}
                  onClick={() => setToggleMenu(false)}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}

      {/* Overlay Background */}
      {toggleMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setToggleMenu(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
}
