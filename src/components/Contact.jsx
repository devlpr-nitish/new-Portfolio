import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1300px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center ">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl text-left font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12">
                Versatile Software Developer with expertise in Java, MERN stack,
                and DevOps, along with a strong foundation in Data Structures
                and Algorithms. Over 250 days of continuous problem-solving
                practice, enhancing analytical and coding skills. Skilled in
                building scalable web applications, optimizing performance, and
                implementing AI-driven solutions. Passionate about developing
                efficient software, and continuously learning emerging
                technologies.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  5
                  <span className="span">+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span className="text-white">Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  2<span className="span">+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span className="text-white">years of experience</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  600
                  <span className="span">+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span className="text-white">DSA problems</span>
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className=" max-w-6xl p-5 md:p-12 text-white"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let's connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="cursor-pointer w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
