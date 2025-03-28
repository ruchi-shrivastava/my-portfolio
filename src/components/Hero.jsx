import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ruchi.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
hidden : {x: -100, opacity:0},
visible : {
  x: 0,
  opacity: 1,
  transition: {duration: 0.5, delay: delay},
},
})

const Hero = () => {
  return (
   
    <div className="border-b border-neutral-900 pb-30 lg:mb-36 px-6 sm:px-12 lg:px-20 pt-32">
  <div className="flex flex-wrap items-center">
    
    {/* Left Section: Hero Content */}
    <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-start lg:text-left">

   
      <motion.h1  variants={container(0)} initial="hidden" animate="visible"
       className="text-5xl sm:text-6xl font-thin font-sans tracking-tight">
        Ruchi Shrivastava
      </motion.h1>
    
      <motion.span  variants={container(0.5)} initial="hidden" animate="visible"
       className="mt-1 sm:mt-8 text-2xl sm:text-3xl lg:text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
        Frontend Developer
      </motion.span>
      <motion.p  variants={container(1)} initial="hidden" animate="visible"
       className="my-1 max-w-xl py-6 font-light tracking-tight">
        {HERO_CONTENT}
      </motion.p>
    </div>

    {/* Right Section: Responsive & Centered Image */}
    <div className="w-full lg:w-1/2 flex lg:justify-start lg:p-8">
      <motion.img initial={{x : 100, opacity : 0}}
      animate={{x : 0,opacity : 1}}
      transition={{duration : 1, delay : 1.2}}
      src={profilePic} alt="Ruchi" className="w-60 sm:w-52 md:w-60 lg:w-80  mx-auto rounded-2xl" />
      
    </div>
    
  </div>
</div>

  );
};
export default Hero;
