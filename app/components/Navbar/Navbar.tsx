import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
const menuItems = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Categories", link: "#" },
  { id: 3, title: "Blogs", link: "#" },
  { id: 4, title: "About", link: "#" },
  { id: 5, title: "Contact", link: "#" },
];

export default function Navbar() {
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
          <div className="md:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </motion.nav>
      </div>
    </>
  );
}
