"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles";
import Tooltip from "react-simple-tooltip";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
 import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";
import ScrollToTopButton from'../components/ScrollToTopButton';
import addEventListener from"react";

const Feedback = () => (


  
  <section name="#wohin" className={`${styles.paddings} g:h-screen lg:bg-[url('/west-side-story.png')] lg:bg-cover w-full `}
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
        <div className="feedback-gradient bg-slate-100/25" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Lageplan
          </h4>
          <Image
            src="/LogoNeu.png"
            width="340"
            height="300"
            alt="LogoAlt"
            className="w-[155px] h-[155px] object-contain"
          />
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] bg-white/40 text-white">
          Rettungsanker Freiburg< br/>
          Adehauser-Strasse 7c< br/>
          79098 Freiburg
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
      
     
         
    </motion.div>
    <ScrollToTopButton/>
  </section>
);
export default Feedback
