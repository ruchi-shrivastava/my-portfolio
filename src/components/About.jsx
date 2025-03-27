import { ABOUT_TEXT } from "../constants"
import aboutImg from "../assets/aboutMe.jpg"
import { motion } from "framer-motion";
const About = () => {
    return(
        // <div className="w-full">
        <div className=" font-light pb-32 ">
            <motion.h1 
            whileInView = {{opacity : 1, y : 0}}
            initial = {{opacity : 0, y : -100}}
            transition = {{duration : 1.5}}

            className="my-10 pb-10 text-center text-4xl">About
            <span className="text-neutral-500 "> Me</span>
            </motion.h1>
             <div className="border-b border-neutral-900  px-6 sm:px-12 lg:px-20"> 
                <div className="flex flex-wrap justify-center">
                    {/* left section */}

                    <motion.div 
                    whileInView = {{ opacity : 1, x : 0}}
                    initial = {{ opacity : 0, x : -100}}
                    transition = {{ duration : 0.5}}
                    className="w-full lg:w-1/2  lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={aboutImg} className="rounded-2xl w-90 sm:w-72 md:w-90 lg:w-95 mx-auto "></img>
                    </div>
                    </motion.div>

                   <motion.div 
                   whileInView = {{opacity : 1, x : 0}}
                   initial = {{ opacity : 0, x : 100}}
                   transition = {{ duration : 0.5 }}
                   className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-center">
                   <div className="font-light tracking-tight flex  flex-col items-start lg:items-start text-start">

                        <p className="my-8 max-w-xl py-2 lg:text-left">{ABOUT_TEXT}</p>
                    </div>
                    </div> 
                   </motion.div>
                
            </div>
        </div>
         </div>
        //  </div>
    )
}
export default About