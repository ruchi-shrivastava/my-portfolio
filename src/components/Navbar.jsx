// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";

// const Navbar = () => {
//     return(
//         <nav className="w-screen bg-amber-50 mb-20 flex items-center justify-between px-20 py-6 ">
//         <h1 className="text-3xl text-red-500 uppercase">MeetMe</h1>
//         <div className="flex items-center justify-end gap-4 text-2xl ">
//         <FaLinkedin />
//         <FaGithub />
//         <FaInstagram />
//         <FaFacebook />
//         </div>
//         </nav>
//     )
// }
// export default Navbar


import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl lg:text:2xl text-red-500 uppercase">
          MeetMe
        </h1>

        {/* Social Icons (Always Visible) */}
        <div className="flex items-center gap-4 text-xl">
        <a href="https://www.linkedin.com/in/ruchi-shrivastava-49743366/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>

        <a href="https://github.com/ruchi-shrivastava" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>

       <a href="https://www.instagram.com/ruchi_130315/" target="_blank" rel="noopener noreferrer">
        <FaInstagram /> 
      </a>

     
      <a href="https://www.facebook.com/ruchi.shrivastava15" target="_blank" rel="noopener noreferrer">
      <FaFacebook />
      </a>
      
         
         
          
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
