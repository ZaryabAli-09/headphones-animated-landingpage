"use client ";

import Image from "next/image";
import { color, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

// IMPORT BLOG IMAGES
import Blog1 from "@/public/assets/blogs/blog1.jpg";
import Blog2 from "@/public/assets/blogs/blog2.jpg";
import Blog3 from "@/public/assets/blogs/blog3.jpg";
import Blog4 from "@/public/assets/blogs/blog4.jpg";
import { MouseFollower } from "react-mouse-follower";

// ANIMATION
export const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

// BLOG DATA
const blogData = [
  {
    id: 1,
    title: "Mastering UI Trends in 2025",
    img: Blog1,
    description: "Explore the latest design trends shaping modern interfaces.",
    delay: 0.4,
    color: "#8b5958",
  },
  {
    id: 2,
    title: "Secrets of Fast Web Performance",
    img: Blog2,
    description: "Learn tips that boost your website speed instantly.",
    delay: 0.6,
    color: "#638153",
  },
  {
    id: 3,
    title: "Building Trust Through Design",
    img: Blog3,
    description: "Understand how design impacts user trust and confidence.",
    delay: 0.8,
    color: "#8b5958",
  },
  {
    id: 4,
    title: "Why Minimalism Still Wins!",
    img: Blog4,
    description: "Minimalistic UI continues to dominate—here's why.",
    delay: 1.0,
    color: "#638153",
  },
];

export default function Blogs() {
  return (
    <section className="overflow-hidden px-10 md:px-20 bg-gray-100 font-poppins py-16">
      <motion.h1
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold text-center pb-10"
      >
        Blogs
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogData.map((blog) => (
          <UpdateFollower
            key={blog.id}
            mouseOptions={{
              backgroundColor: blog.color,
              zIndex: 9999,
              followSpeed: 0.5,
              scale: 5,
              rotate: 720,
              text: "Read More",
              textFontSize: "2px",
            }}
          >
            <motion.div
              key={blog.id}
              variants={fadeUp(blog.delay)}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white cursor-pointer"
            >
              <Image
                src={blog.img}
                alt={blog.title}
                className="rounded-lg mb-4"
              />

              <div className="text-center space-y-2">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-sm text-black/70">{blog.description}</p>
              </div>
            </motion.div>
          </UpdateFollower>
        ))}
      </div>
    </section>
  );
}
