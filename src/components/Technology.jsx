import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { PiFileCssBold } from "react-icons/pi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y : -10},
    animate : {
        y: [10, -10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse",
        },
    },
})

const Technology = () => {
    return(
        <div className=" pb-24">
            <motion.h2
            whileInView = {{opacity : 1, y : 0}}
            initial = {{opacity : 0, y : -100}}
            transition = {{duration : 1.5}}
             className="text-center text-4xl my-20">Technology</motion.h2>
            <motion.div
            whileInView = {{opacity : 1, x : 0}}
            initial = {{opacity : 0, x : -100}}
            transition = {{duration : 1.5}}
             className="flex flex-wrap items-center justify-center gap-4">

                <motion.div 
                variants={iconVariants(5)}
                initial = "initial"
                animate = "animate"
                className="rounded-4xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400" />
                </motion.div>

                <motion.div
                variants={iconVariants(2)}
                initial = "initial"
                animate = "animate"
                 className="rounded-4xl border-4 border-neutral-800 p-4">
                < SiMongodb className="text-5xl text-emerald-400" />
                </motion.div>

                <motion.div 
                variants={iconVariants(6)}
                initial = "initial"
                animate = "animate"
                className="rounded-4xl border-4 border-neutral-800 p-4">
                <TbBrandNodejs className="text-5xl text-emerald-700" />
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial = "initial"
                animate = "animate"
                className="rounded-4xl border-4 border-neutral-800 p-4">
                <TbBrandJavascript className="text-5xl text-amber-200" />
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial = "initial"
                animate = "animate"
                className="rounded-4xl border-4 border-neutral-800 p-4">
                <TbBrandHtml5  className="text-5xl text-orange-400" />
                </motion.div>

                <motion.div 
                variants={iconVariants(5)}
                initial = "initial"
                animate = "animate"
                className="rounded-4xl border-4 border-neutral-800 p-4">
                < PiFileCssBold className="text-5xl text-blue-500" />
                </motion.div>

            </motion.div>
        </div>
    )
}
export default Technology