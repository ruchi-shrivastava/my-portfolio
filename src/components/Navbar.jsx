// // import React from "react";
// // import { FaLinkedin } from "react-icons/fa";
// // import { FaGithub } from "react-icons/fa";
// // import { FaInstagram } from "react-icons/fa";
// // import { FaFacebook } from "react-icons/fa";

// // const Navbar = () => {
// //     return(
// //         <nav className="w-screen bg-amber-50 mb-20 flex items-center justify-between px-20 py-6 ">
// //         <h1 className="text-3xl text-red-500 uppercase">MeetMe</h1>
// //         <div className="flex items-center justify-end gap-4 text-2xl ">
// //         <FaLinkedin />
// //         <FaGithub />
// //         <FaInstagram />
// //         <FaFacebook />
// //         </div>
// //         </nav>
// //     )
// // }
// // export default Navbar


// import React from "react";
// import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="w-full shadow-md">
//       <div className="flex justify-between px-6 md:px-12 lg:px-20 py-4">
//         {/* Logo */}
//         <h1 className="text-xl md:text-2xl items-start lg:text:3xl text-white-500 uppercase">
//         About ME
//         </h1>

//         {/* Social Icons (Always Visible) */}
//         <div className="flex items-center gap-4 text-2xl">
//         <a href="https://www.linkedin.com/in/ruchi-shrivastava-49743366/" target="_blank" rel="noopener noreferrer">
//         <FaLinkedin />
//       </a>

//          <h2>ReachMe @ 9975078579</h2>

//         {/* <a href="https://github.com/ruchi-shrivastava" target="_blank" rel="noopener noreferrer">
//         <FaGithub />
//       </a> */}

//        {/* <a href="https://www.instagram.com/ruchi_130315/" target="_blank" rel="noopener noreferrer">
//         <FaInstagram /> 
//       </a> */}

     
//       {/* <a href="https://www.facebook.com/ruchi.shrivastava15" target="_blank" rel="noopener noreferrer">
//       <FaFacebook />
//       </a>
//        */}
         
         
          
         
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";

// const Navbar = () => {
//   // Function to redirect to Get in Touch page
//   const redirectToContact = () => {
//     window.location.href = "/get-in-touch.html"; // Redirects to another page
//   };

//   return (
//     <nav className="w-full shadow-md">
//       <div className="flex justify-between px-6 md:px-12 lg:px-20 py-4">
//         {/* Logo */}
//         <h3 className="text-xl md:text-2xl lg:text-xl text-white-500 uppercase">
//           About Me
//         </h3>

//         {/* Contact Button */}
//         <button
//           className="px-5 py-2 text-lg font-medium text-white bg-purple-600 rounded-full shadow-lg 
//           hover:bg-purple-700 hover:scale-105 transition-all duration-300 ease-in-out"
//           onClick={redirectToContact}
//         >
//           Contact Me
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";

const Navbar = () => {
  // Function to scroll to Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        {/* Logo */}
        <h3 className="text-xl md:text-2xl lg:text-xl text-white-500 uppercase font-semibold text-center sm:text-left">
          About Me
        </h3>

        {/* Contact Button */}
        <button
          className="mt-3 sm:mt-0 px-5 py-2 text-lg font-medium text-white bg-purple-600 rounded-full shadow-lg 
          hover:bg-purple-700 hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={scrollToContact}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

