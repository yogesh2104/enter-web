

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./header";
import { siteInfo } from "@/lib/site-info";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className={`container mx-auto ${siteInfo.classes["max-container-width"]} px-4`}>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 hidden md:block">
            <Logo/>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {siteInfo.mainLink.map(
                (item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={item.link}
                      className="text-black dark:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {siteInfo.socialLink.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" dark:text-white text-black transition-colors duration-300 flex items-center"
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="">
              {siteInfo.ourvision}
            </p>
            <div className="flex space-x-4">
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              />
              <motion.div
                className="w-2 h-2 bg-pink-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className=" text-sm">{siteInfo.footerText}</p>
          <div className="grid grid-cols-2 space-x-8 md:space-x-4 space-y-3 mt-4 md:mt-0">
            {siteInfo.extraLink.map((item) => (
                <Link to={item.link} className=" hover:text-white transition-colors duration-300 text-sm">
                    {item.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
