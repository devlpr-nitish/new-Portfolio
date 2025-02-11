import React from "react";
import profilepic from "../assets/profpic.png";
import profileImage from "../assets/profileImage.png";
import { TypeAnimation } from "react-type-animation";
import ShinnyEffect from "./ShinnyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineX,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiJava,
  DiMongodb,
  DiTerminal,
  DiLinux
} from "react-icons/di";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1400px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-10 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Fullstack Dev",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-5xl md:text-7xl tracking-tight mb-4"
          >
            <span className="text-gray-200 text-center text-5xl">HEY, I AM</span>
            <br />
            <span className="span text-center text-5xl font-bold">NITISH</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate fullstack developer with over 3 years of
            experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              href="https://drive.google.com/file/d/1oEtpeFN-dStf1MZ6dB8qXYDHRgXspofS/view?usp=sharing"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/devlpr-nitish">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/devlpr-nitish/">
    
                <AiOutlineLinkedin />
                
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/nitish_20_s_/">
                <AiOutlineInstagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://x.com/devlprnitish">
                <AiOutlineX />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profileImage}
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <DiReact className="text-blue-500 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiNodejsSmall className="text-green-500 mx-2" />
            <DiMongodb className="text-green-800 mx-2" />
            <DiJava className="text-red-500 mx-2" />

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinnyEffect left={0} top={0} size={1400} />
        </div>
    </div>
  );
};

export default Hero;
