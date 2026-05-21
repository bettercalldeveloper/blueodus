import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function App() {
  return (
    <div className="relative bg-gradient-to-br from-white via-blue-50 to-gray-100 min-h-screen font-sans text-gray-800 overflow-hidden">
      <motion.div
        className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-blue-200 rounded-full blur-[140px] opacity-25"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[140px] opacity-20"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
      />

      <div className="relative flex flex-col min-h-screen">
        <div className="flex justify-center gap-x-6 text-gray-400 text-xs sm:text-sm tracking-widest uppercase pt-6 px-4 select-none font-medium">
          {["xeab97b", "q5t8w2x", "z9x4k7p", "2025", "10022171", "Y.1J"].map(
            (code, i) => (
              <p
                key={i}
                className="hover:text-blue-600 transition-colors cursor-default hidden sm:inline"
              >
                {code}
              </p>
            ),
          )}
        </div>

        <main className="relative z-10 flex flex-col items-center justify-center flex-grow px-4">
          <div className="text-center space-y-8 max-w-3xl">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0057D9] tracking-normal leading-tight select-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Blue<span className="text-black">odus</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 font-light leading-relaxed -mt-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Not sure when — but it's happening
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-[#0057D9] font-medium mb-3">
                contact@blueodus.com
              </p>

              <div className="mb-3 flex justify-center gap-6 text-gray-400 text-xl mt-5">
                {[
                  {
                    href: "https://x.com/Blueodus",
                    label: "X (Twitter)",
                    icon: <FaXTwitter />,
                  },
                  {
                    href: "https://instagram.com/Blueodus",
                    label: "Instagram",
                    icon: <FaInstagram />,
                  },
                  {
                    href: "https://github.com/Blueodus",
                    label: "GitHub",
                    icon: <FaGithub />,
                  },
                  {
                    href: "https://reddit.com/u/Blueodus",
                    label: "Reddit",
                    icon: <FaReddit />,
                  },
                ].map(({ href, label, icon }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="hover:text-blue-600 transition-transform"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-10">
                YK, Founder
              </p>
            </motion.div>
          </div>
        </main>

        <div className="flex justify-center gap-x-6 text-gray-400 text-xs sm:text-sm tracking-widest uppercase pt-6 px-4 select-none font-medium hidden">
          {["Obscure", "Bluebook", "Nerdosoft", "UpVerge"].map((code, i) => (
            <p
              key={i}
              className="hover:text-blue-600 transition-colors cursor-default hidden sm:inline"
            >
              {code}
            </p>
          ))}
        </div>

        <footer className="relative z-10 py-6 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Blueodus. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
