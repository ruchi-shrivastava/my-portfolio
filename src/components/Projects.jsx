import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-col items-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl text-center"
      >
        Projects
      </motion.h1>

      <div className="max-w-5xl w-full mx-auto">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:flex-nowrap justify-center gap-30">
            {/* Left Column - Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              
                    {/* <img
                        src={project.image}
                        alt={project.title}
                        className="w-[300px] h-[200px] object-contain rounded bg-neutral-800"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} ease-in-out
                    /> */}

                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-[300px] h-[200px] object-contain rounded bg-neutral-800 transition-transform duration-300 ease-in-out"
                        whileHover={{ scale: 1.2 }}
                        style={{ transformOrigin: "center" }}
                    />




            </motion.div>

            {/* Right Column - Title & Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3 text-center lg:text-left"
            >
              <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-left" >{project.description}</p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-sm rounded bg-neutral-900 text-purple-400">
                    {tech}
                  </span>
                ))}
              </div>


              {/* Project Link Button */}
              <div className="mt-4">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block  bg-neutral-900 hover:bg-purple-900 text-purple-400 font-semibold py-2 px-4 rounded transition"
                                >
                                    View Project
                                </a>
                            </div>
              
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
