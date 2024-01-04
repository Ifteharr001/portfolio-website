import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  firebase,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "feedback",
    title: "Feedback",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const Bio = {
  name: "Iftekhar Rahat",
  roles: [
    "Full Stack Developer",
    "MERN Stack Web Developer",
    "Frontend Developer",
    "Programmer",
  ],
  description:
    "As a MERN Stack Web Developer, I am enthusiastic about contributing my skills to a dynamic team in a challenging and innovative environment. With proficiency in MongoDB, Express.js, React.js, and Node.js, I specialize in creating scalable and responsive web applications.",
  github: "https://github.com/ifteharr001",
  resume: "https://iftekharrahat-resume.tiiny.site/",
};

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Deceloper",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Library Management System",
    description:
      "Efficiently manage your library with our user-friendly Library Management System website. Explore a seamless experience, featuring easy book cataloging, member management, and streamlined processes for enhanced library administration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/Ifteharr001/library-management-system",
    live_link: "https://repulsive-cover.surge.sh/",
  },
  {
    name: "Inventory Management System",
    description:
      "Optimize your inventory control effortlessly with our Inventory Management System website. Enjoy real-time tracking, automated reordering, and detailed analytics for a streamlined and efficient management of your business inventory.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "daisyUi",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/Ifteharr001/technomind-inventory-management-system",
    live_link: "https://technominds-9a66d.web.app/",
  },
  {
    name: "Multi Vendor Car E-commerce Shop",
    description:
      "Experience the future of car shopping on our advanced Multi-Vendor Car E-commerce Shop. Discover a diverse array of vehicles, enjoy seamless transactions, and receive personalized assistance, ensuring a top-notch online automotive purchasing journey.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ifteharr001/automotive-shop/",
    live_link: "https://automotive-shop-5573d.web.app/",
  },
];

export { navLinks, services, technologies, experiences, testimonials, projects };
