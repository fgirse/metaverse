'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section
    className={`${styles.yPaddings} h-screen bg-[url('/Hero5.png')] bg-contain bg-no-repeat lg:h-screen lg:bg-[url('/5555.svg')] lg:bg-[length:100vw_100vh] w-full `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mt-[25] mx-auto flex flex-col bg-slate-800/50 lg:mt-[15vh]`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 ">
        <motion.h1
          variants={textVariant(1.1)}
          className="mt-3 lg:-mt-[26vh]  lg:mb-[3vh] headingE text-yellow-50 text-[11rem] lg:text-[17rem]"
        >
          die
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="-mt[vh] flex flex-row justify-center items-center"
        >
          <motion.h1 className="lg:-mt-[15vh] text-5xl lg:text-[9rem] text-red-700 headingF font-sans">
            kiez
          </motion.h1>
          <motion.h1 className="lg:-mt-[15vh] text-5xl lg:text-[9rem] text-red-700 headingF font-sans">
            kneipe
          </motion.h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
