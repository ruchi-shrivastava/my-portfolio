import { EXPERIENCES } from "../constants";
const Experience = () => {
  return (
    <div className="border-b border-b-neutral-900 pb-4">
      <h1 className="my-20 text-4xl text-center">Experience</h1>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {exp.role}-{" "}
                <span className="text-sm text-purple-100">{exp.company}</span>
              </h6>

              {/* <p className="mb-4 text-neutral-400">{exp.description}</p> */}

              <ul className="mb-4 text-neutral-400 list-disc pl-5">
                {
                    exp.description.map((point,index)=>(
                        <li key={index}>{point}</li>
                    )) }
              </ul>
            


              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
