import { useState } from "react";
import Navbar from "./Navbar";
import { headphoneData } from "../constants/constants";

import { FaWhatsapp } from "react-icons/fa";

import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const SlideRight = (delay) => {
  return {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);

  const handlerActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]  ">
          <div
            className="flex flex-col justify-center py-14 
            md:py-0 xl:max-w-[500px] order-2 md:order-1 text-white relative z-40
        "
          >
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 10,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt="" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p>TOP RECOMMENDATION</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-10"
              >
                {headphoneData.map((data) => (
                  <UpdateFollower
                    key={data.id}
                    mouseOptions={{
                      backgroundColor: data.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      text: "View Detail",
                      textFontSize: "3px",
                      scale: 5,
                    }}
                  >
                    <div
                      key={data.id}
                      onClick={() => handlerActiveData(data)}
                      className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200"
                    >
                      <div className="flex justify-center">
                        <img
                          src={data.image}
                          alt="data_image"
                          className={`w-[80px] img-shadow ${
                            activeData.image === data.image
                              ? "opacity-100 scale-110"
                              : "opacity-50"
                          }`}
                        />
                      </div>
                      <div className="text-center !mt-6">
                        <p className="text-base line-through">{data.price}</p>
                        <p className="text-xl font-bold">{data.price}</p>
                      </div>
                    </div>
                  </UpdateFollower>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt="activeData"
                className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 4, delay: 0, ease: "easeInOut" }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
