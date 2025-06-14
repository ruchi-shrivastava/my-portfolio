import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";
import project5 from "../assets/projects/Project5.png"

export const HERO_CONTENT = `I’m Ruchi Shrivastava, a dedicated frontend developer with over 6 years of experience, including freelancing, internships, and 4 years of full-time professional work.

I specialize in building responsive and user-friendly websites using React.js, JavaScript, and modern CSS frameworks like Tailwind CSS.

After taking a career break to raise my daughter, I resumed my journey through freelancing and internships, working on real-world web applications while continuously upgrading my skills.

`;

export const ABOUT_TEXT = `I am a dedicated frontend developer with over 6 years of experience, including 4 years of full-time work in building user-friendly and responsive web applications. My expertise lies in HTML, CSS, JavaScript, and React.js, along with proficiency in Postman, GitHub, and REST APIs. I have a strong passion for writing clean, maintainable code and enjoy solving real-world problems through efficient web solutions. I thrive in collaborative environments and constantly seek opportunities to enhance my skills. Beyond coding, I enjoy exploring new technologies and staying updated with industry trends.`;

export const EXPERIENCES = [
  {
  year: "Feb 2024 – May 2025",
  role: "Frontend Developer",
  company: "Stockable",
  description: [
    "Worked full-time as a frontend developer at Stockable, a stock market startup, collaborating in a 3-member core team.",
    <>
      Took complete ownership of the company’s official websites:{" "}
      <a href="https://stockable.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "light", textDecoration: "underline" }}>https://stockable.uk
      </a>{" "}
      and{" "}
      <a href="https://www.fxpips.net" target="_blank" rel="noopener noreferrer" style={{ color: "#c084fc", fontWeight: "light", textDecoration: "underline" }}>
        fxpips.net
      </a>
      , developing the frontend using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS.
    </>,
    "Translated business goals into intuitive, responsive UIs aligned with the brand’s identity and target audience.",
    "Collaborated closely with the backend developer to integrate REST APIs and deliver real-time data to users. Optimized site performance, mobile responsiveness, and cross-browser compatibility for enhanced UX. Contributed to planning, design improvements, and ongoing iterations based on client and team feedback.",
  ],
  technologies: ["Javascript", "React.js", "HTML", "CSS"],
},


  {
    year: "Dec 2022 – Jan 2024",
    role: "Apprenticeship: Frontend Development",
    company: "Geekster",
    description: [
      "Completed an intensive frontend development course focusing on React.js, JavaScript, and modern web technologies.",
      "Built real-world projects, including interactive web applications, to strengthen hands-on coding skills.",
      "Gained expertise in responsive design, state management, and API integrations.",
      "Worked on industry-level assignments to simulate real-world development environments."
    ],
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
    
  },
  {
    year: "Jan 2022 - Dec 2022",
    role:"Freelance Frontend Developer",
    company: "Self-Employed",
    description: [
      "Took a career break to focus on my newborn while staying engaged in the industry through freelancing.",
      "Developed custom web applications for small businesses and startups.",
      "Enhanced expertise in React.js, JavaScript, and modern web technologies while managing client requirements and deadlines.",
      "Worked independently with clients to design and develop user-friendly websites.",
    ],
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    year: "July 2019 - June 2020",
    role: "Frontend Developer",
    company: "Vyom Labs Pvt Ltd",
    description: [
      "Worked on SCB (Standard Chartered Bank) - Bank Management System, a Malaysia-based banking platform for employee self-service.",
      "Developed UI components using React.js, Material Design, HTML, CSS, and JavaScript.",
      "Implemented React Hooks and Routing for dynamic navigation.",
      "Collaborated with backend developers for API integration and real-time data processing.",
      "Debugged and optimized performance, improving user experience."
    ],
    technologies: ["Reactjs","JavaScript", "HTML", "CSS"],
  },
  {
    year: "Nov 2018 - May 2019",
    role: "Software Engineer",
    company: "Icreon Communication Pvt Ltd",
   description: [
      "Worked on the USM (Unique Sports Management) system, a sports management platform for handling activities related to sports leagues, including cases, players, notes, admins, and agents.",
      "Developed dynamic events such as popups and side drawers, and created JSX components.",
      "Managed stateful and stateless components for efficient rendering.",
      "Handled frontend implementation, including coding, debugging, and routing.",
      "Collaborated with a team of 10 to deliver high-quality user interfaces."
    ],
    technologies: ["ReactJS", "HTML", "CSS", "MaterialUI"],
  },
  {
    year: "Jan 2016 - Feb 2017",
    role: "Software Engineer",
    company:"Start Login Software",
    description: [
      "Worked on the 90Ads (Classified Website) E-Marketing platform, a web-based application designed for online retailers, making product search, viewing, and selection easier for users based on their specific needs.",
      "Handled frontend implementation using HTML, CSS, and Bootstrap to create responsive webpages.",
      "Collaborated with a small team of 4 to ensure efficient development of user-friendly interfaces.",
      
      "Worked on Hospital Management System (HMS), a web-based system to manage the functioning and events of hospitals or medical setups, focusing on in-patient and out-patient management.",
      "Implemented frontend features and ensured a smooth user experience in a team of 8."
    ],
    technologies: ["HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Crypto Currency Tracker",
    image: project1,
    description:
    "The Cryptocurrency Tracker is a web application developed using HTML, CSS, and JavaScript that provides real-time data on various cryptocurrencies. Users can search for specific coins and view detailed information such as current prices, market capitalization, and price changes over time. The app features a responsive design, live updates through API integration, and a user-friendly interface, making it easy to stay informed about the latest trends in the cryptocurrency market.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://ruchi-shrivastava.github.io/module4-assignments/major-project/",
  },
  {
    title: "MyPortFolio",
    image: project4,
    description:
    "MyPortfolio is a modern and responsive personal portfolio website built using React.js and Tailwind CSS, with smooth animations powered by Framer Motion. It showcases my skills, experience, and projects in an interactive and visually appealing way. The website is designed with a minimalist UI, ensuring a seamless user experience across devices.",
    technologies: ["HTML", "CSS","Javascript","ReactJs","Framer-Motion"],
    link: "https://my-portfolio-ruchis.vercel.app/",
  },
  {
    title: "Language Translator ",
    image: project2,
    description:
    "The Language Translator is a small web-based project that allows users to translate text from one language to another using an API (like Google Translate API or LibreTranslate). It provides a simple user interface where users can input text, select the source and target languages, and get the translated text instantly.",
    technologies: ["HTML", "CSS", "Javascript","ReactJs"],
    link: "https://astounding-language-translator.netlify.app/",
  },
  {
    title: "HotGadgets",
    image: project3,
    description:
      "HotGadgets is a dynamic web application developed using HTML, CSS, and JavaScript that showcases the latest tech gadgets on the market. Users can explore a curated selection of products, complete with detailed descriptions, images, and prices. The app features a search functionality and a 'show details' button to enhance user experience, making it easy to discover new and exciting gadgets. Its responsive design ensures a smooth browsing experience across all devices.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://ruchi-shrivastava.github.io/module4-assignments/phonehunting-app/index.html",
  },
  
  {
    title: "Kings Coffee Clone",
    image: project5,
    description:
      "The King’s Coffee Website Clone is a responsive web design project that replicates the UI of a premium coffee shop website using HTML & CSS. The website showcases the brand’s products, menu, and contact section.",
    technologies: ["HTML", "CSS"],
    link: "https://kings-coffee-project2.netlify.app/",
  },
];

export const CONTACT = {
  address: "Pune, India",
  email: "ruchi.shrivastava15@gmail.com",
  linkedIn : "https://www.linkedin.com/in/ruchi-shrivastava-49743366/"
};
