"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles";
import Tooltip from "react-simple-tooltip";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
 import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";
const Feedback = () => (
  <section className={`${styles.paddings} g:h-screen lg:bg-[url('/west-side-story.png')] lg:bg-cover w-full `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Lageplan
          </h4>
          <Image
            src="/LogoAlt.png"
            width="340"
            height="30"
            alt="LogoAlt"
            className="w-[155px] h-[155px] object-contain"
          />
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today technology, metaverse is very useful
          for todays work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >



          </motion.div>
      </motion.div>
      <div className="flex flex-col items-center justify-center">
          <Tooltip fontSize="0.866rem" padding="2px" content="back to TOP" direction="top" border="#ffffff" background="#d000ff">
          <buttton type="buttton" className="bg-orange-400 text-[1rem] rounded-full border border-white text-white w-24 h-24 flex flex-row justify-center items-center ">
            {/*<svg
                className="w-16 lg:w-20 "
                fill="#ffffff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg>*/} <ArrowCircleUpIcon/>
              <Link href="/blog/intro" scroll={true}></Link>
                 </buttton>
          </Tooltip>
        </div>
    </motion.div>
  </section>
);

export default Feedback;
