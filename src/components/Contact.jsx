// import {CONTACT} from '../constants'
// import {motion} from "framer-motion"
// const Contact = () => {
//     return(
//         <div className="border-b border-neutral-900 pb-20">
//             <motion.h1
//             whileInView={{ opacity : 1, y : 0}}
//             initial = {{opacity : 0 , y : -100}}
//             transition = {{duration : 0.5}}
//              className="my-10 text-center text-4xl">Get in Touch</motion.h1>
//             <div className="text-center tracking-tighter" >
//                 <motion.p 
//                  whileInView={{ opacity : 1, x : 0}}
//                  initial = {{opacity : 0 , x : -100}}
//                  transition = {{duration : 1}}
//                 className="my-4">{CONTACT.address}</motion.p>
//                 {/* <p className='my-4'>{CONTACT.phoneNo}</p> */}
//               <span> <a href='#'>Email : {CONTACT.email} </a></span> 
//              </div>
//         </div>
//     )
// }
// export default Contact;


import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Info */}
      <div className="text-center tracking-tight text-lg space-y-6">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="my-4 font-medium"
        >
          📍 {CONTACT.address}
        </motion.p>

        {/* Email */}
        <div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={`mailto:${CONTACT.email}`}
            className="flex justify-center items-center gap-3 font-semibold transition-all duration-300 ease-in-out"
          >
            <FaEnvelope className="text-purple-600 text-xl" />
            {CONTACT.email}
          </motion.a>
        </div>

        {/* LinkedIn */}
        <div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/ruchi-shrivastava-49743366/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 font-semibold transition-all duration-300 ease-in-out"
          >
            <FaLinkedin className="text-purple-600 text-xl" />
            Connect on LinkedIn
          </motion.a>
        </div>

        {/* Phone */}
        <div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:9975078579"
            className="flex justify-center items-center gap-3 font-semibold transition-all duration-300 ease-in-out"
          >
            <FaPhone className="text-purple-600 text-xl" />
            9975078579
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
