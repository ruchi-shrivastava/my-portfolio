// import { EXPERIENCES } from "../constants";
// import {motion} from "framer-motion"
// const Experience = () => {
//   return (
//     <div className="border-b border-b-neutral-900 pb-4">
//       <motion.h1
//       whileInView={{opacity : 1, y : 0}}
//       initial = {{ opacity : 0, y : -100}}
//       transition = {{duration : 0.5}}
//        className="my-20 text-4xl text-center">Experience</motion.h1>
//       <div>
//         {EXPERIENCES.map((exp, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
           
//             <motion.div 
//             whileInView={{ opacity : 1, x : 0}}
//             initial = {{ opacity : 0, x : -100}}
//             transition = {{ duration : 1}}
//             className="w-full lg:w-1/4">
             
//               <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
//             </motion.div>

//             <motion.div 
//             whileInView={{ opacity : 1, x : 0}}
//             initial = {{ opacity : 0, x : 100}}
//             transition = {{duration  :1}}
//             className="w-full max-w-xl lg:w-2/3 text-left lg:text-left">
              
//               <h6 className="mb-2 font-semibold">
//                 {exp.role}-{" "}
//                 <span className="text-sm text-purple-100">{exp.company}</span>
//               </h6>

//               {/* <p className="mb-4 text-neutral-400">{exp.description}</p> */}

//               <ul className="mb-4 text-neutral-400 list-disc pl-5">
//                 {
//                     exp.description.map((point,index)=>(
//                         <li key={index}>{point}</li>
//                     )) }
//               </ul>
            


//               {exp.technologies.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Experience;


import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-col items-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl text-left"
      >
        Experience
      </motion.h1>

      <div className="max-w-5xl w-full mx-auto">
        
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:flex-nowrap justify-center gap-10">
            {/* Left Column - Date */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center lg:justify-start"
            >
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </motion.div>

            {/* Right Column - Role & Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3 text-center lg:text-left"
            >
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-purple-100">{exp.company}</span>
              </h6>

              <ul className="mb-4  text-neutral-400 list-disc pl-5 text-left">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded bg-neutral-900 text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

