/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Claire's Portfolio",
  description:
    "Hi, I'm Claire—a passionate developer, designer, and innovator striving to create meaningful and impactful digital experiences.",
  og: {
    title: "Claire Guo Portfolio",
    type: "website",
    url: "http://https://github.com/claireg0",
  },
};

//Home Page
const greeting = {
  title: "Claire Guo",
  logo_name: "ClaireGuo",
  nickname: "claire.guo@uwaterloo.ca",
  subTitle:
    "Hi, I'm Claire—a passionate developer, designer, and innovator striving to create meaningful and impactful digital experiences.",
  resumeLink:
    "https://drive.google.com/file/d/1bkiHT1tv9vVXVN0Rl_0kDM6VRaIU4bPO/view?usp=sharing",
  portfolio_repository: "https://github.com/claireg0/my-portfolio",
  githubProfile: "https://github.com/claireg0",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/claireg0",
  // linkedin: "https://www.linkedin.com/in/claire-jl-guo/",
  // gmail: "claire.jl.guo@gmail.com",
  // gitlab: "https://gitlab.com/c39guo",
  // instagram: "https://www.instagram.com/clai.re2006/"

  {
    name: "Github",
    link: "https://github.com/claireg0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#A3BBA3", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/claire-jl-guo/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#A3BBA3", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:claire.jl.guo@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#A3BBA3", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "AI/ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Integrating image recognition and generative AI to build applications like a web app that scans food, estimates expiry dates, and generates recipes using OpenAI APIs.",
        "⚡ Developing automated hardware solutions by integrating image recognition with Raspberry Pi for tasks such as wildlife tracking and deterrence.",
        "⚡ Implementing dynamic object tracking systems and generative features to deliver user-driven outputs, like personalized recipes and real-time suggestions.",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI API",
          fontAwesomeClassname: "mingcute:openai-fill",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "file-icons:opencv",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React.js and TailwindCSS",
        "⚡ Developing iOS mobile applications using Swift",
        "⚡ Creating web app backend in Flask, Python, and handling data in JSON format",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "lineicons:tailwindcss",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "file-icons:typescript",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
/**
 * {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
 */
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Waterloo",
      subtitle: "Bachelor of Software Engineering",
      logo_path: "uwaterloo.png",
      alt_name: "University of Waterloo",
      duration: "2024 - 2029",
      descriptions: [
        "⚡ Anticipated Artificial Intelligence Specialization",
        "⚡ I have done courses on Linear Algebra, Methods of Software Engineering, Linear Algebra, Calculus, and more!",
        "⚡ I was selected for the President's Scholarship of Distinction",
      ],
      website_link: "https://uwaterloo.ca/",
    },
  ],
};

/**
 * {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    
 */
const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with a startup, local initiatives, and non-profit organizations. Feel free to take a look!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work and Internships",
      work: true,
      experiences: [
        {
          title: "Website Developer",
          company: "Richmond Hill World of Life Christian Church",
          company_url: "https://rhwolcc.com/",
          logo_path: "RHWOLCC.png",
          duration: "Jun 2024 - Aug 2024",
          location: "Richmond Hill, ON.",
          description:
            "Collaborated with a team to design and develop a responsive church website using HTML, CSS, JavaScript, JQuery, and WOW.js.",
          color: "#000000",
        },
        {
          title: "Centre Assistant",
          company: "Kumon",
          company_url: "https://www.kumon.com/richmond-hill-elgin-mills-on",
          logo_path: "kumon.png",
          duration: "Oct 2023 - Jan 2024",
          location: "Richmond Hill, ON.",
          description: "Taught children ages 2 and up Math and English skills.",
          color: "#000000",
        },
        {
          title: "iOS Mobile App Developer",
          company: "Digitera Interactive",
          company_url: "https://digitalmarketingplus.com/",
          logo_path: "digitera.jpeg",
          duration: "Apr 2023 - Jun 2023",
          location: "Remote",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "UI/UX Designer",
          company: "Digitera Interactive",
          company_url: "https://digitalmarketingplus.com/",
          logo_path: "digitera.jpeg",
          duration: "Jul 2022 - Apr 2023",
          location: "Remote",
          description:
            "Designed two iOS applications for customers using Figma. ",
          color: "#0879bf",
        },
      ],
    },
    //{
    //  title: "Internships",
    //  experiences: [
    //{
    //  title: "Machine Learning Intern",
    //  company: "TikTok Inc.",
    //  company_url: "https://www.tiktok.com/en/",
    //  logo_path: "tiktok_logo.png",
    //  duration: "May 2022 - Aug 2022",
    //  location: "San Francisco, USA",
    //  description:
    //    "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //  color: "#000000",
    //},

    //  ],
    //},
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Head of Marketing",
          company: "Relay for Life",
          company_url:
            "https://cancer.ca/en/get-involved/our-events/relay-for-life",
          logo_path: "relay4life.webp",
          duration: "Sept 2022 - May 2023",
          location: "Richmond Hill, ON.",
          description:
            "Drove strategic campaigns, branding, and engagement efforts to connect with diverse audiences and foster meaningful support. ",
          color: "#4285F4",
        },
        {
          title: "Tutor",
          company: "Richmond Hill High School",
          company_url:
            "http://www.yrdsb.ca/schools/richmondhill.hs/pages/default.aspx",
          logo_path: "rhhs.jpg",
          duration: "Sept 2021 - May 2023",
          location: "Richmond Hill, ON.",
          description:
            "Tutored students in grades 9 and 10 grade-level math and science.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "claire.jpeg",
    description: "Feel free to reach out whenever! Come chat!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
