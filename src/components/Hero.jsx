import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
const Hero = () => {
  return (
   
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 px-6 sm:px-12 lg:px-20 pt-12">
  <div className="flex flex-wrap items-center">
    
    {/* Left Section: Hero Content */}
    <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-start lg:text-left">
      <h1 className="text-5xl sm:text-6xl font-thin font-sans tracking-tight">
        Ruchi Shrivastava
      </h1>
      <span className="mt-1 sm:mt-2 text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
        Frontend Developer
      </span>
      <p className="my-2 max-w-xl py-6 font-light tracking-tight">
        {HERO_CONTENT}
      </p>
    </div>

    {/* Right Section: Responsive & Centered Image */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:p-8">
      <img src={profilePic} alt="Ruchi" className="w-60 sm:w-52 md:w-60 lg:w-72 mx-auto" />
    </div>
    
  </div>
</div>

  );
};
export default Hero;
