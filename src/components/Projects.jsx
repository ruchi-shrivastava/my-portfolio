// import { PROJECTS } from "../constants";

// const Projects = () => {
//     return(
//         <div className="border-b border-neutral-900 pb-4">
//             <h1 className="my-20 text-center text-4xl">Projects</h1>
//             <div>
//                 {PROJECTS.map((project,index) => (
//                     <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                        <div className="w-full lg:w-1/4">
//                         <img src={project.image}width={150} height={150} alt={project.title} className="mb-6 rounded" />

//                        </div>
//                        <div className="w-full max-w-xl lg:w-3/4">
//                         <h6 className="mb-2 font-semibold">{project.title}</h6>
//                         <p className="mb-4 text-neutral-400">{project.description}</p>
//                         {project.technologies.map((tech,index)=>(
//                             <span key={index} className="mr-2 rounded bg-neutral-900">{tech}</span>
//                         ))}
//                        </div>


//                     </div>
//                 ))}
//             </div>
//         </div>

//     )
// }
// export default Projects

import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:flex-nowrap lg:justify-items-center-center gap-30">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-50 object-cover rounded-lg"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full max-w-xl lg:w-2/3">
                            <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 text-sm rounded bg-neutral-900">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
