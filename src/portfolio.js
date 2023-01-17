import emoji from "react-easy-emoji";
const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Divesh Thakker",
  title: "Hi, I'm Divesh",
  subTitle: emoji(
    "An Enthusiastic Computer Scientist who wants to solve real world problems. I am currently working as a Software Developer Intern at NxtBig Software Labs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SIekZonTiUIwnW9BbaqHV3u0x1XJHh4u/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/divesh2201",
  linkedin: "https://www.linkedin.com/in/divesh-thakker-665496148/",
  gmail: "diveshthakker2201@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/divesh.thakkar.1",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "I work with",
  subTitle: "Combining Technologies to solve real world problems",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      src: "https://www.vectorlogo.zone/logos/java/java-icon.svg"
    },
    {
      skillName: "JavaScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
      skillName: "TypeScript",
      src: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
    },
    {
      skillName: "Python",
      src: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
    },
    {
      skillName: "C++",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
    },
    {
      skillName: "PyTorch",
      src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
    },
    {
      skillName: "Tensorflow",
      src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
    },
    {
      skillName: "WandB",
      src: "https://gblobscdn.gitbook.com/spaces%2F-Lqya5RvLedGEWPhtkjU%2Favatar.png?alt=media"
    },
    {
      skillName: "Git",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    },
    {
      skillName: "CI/CD",
      src: "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg"
    },
    {
      skillName: "AWS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"
    },
    {
      skillName: "Reactjs",
      src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
    },
    {
      skillName: "Django",
      src: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
    },
    {
      skillName: "Spring",
      src: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
    },
    {
      skillName: "Nodejs",
      src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
    },
    {
      skillName: "NoSQL",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png"
    },
    // {
    //   skillName: "npm",
    //   src: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg"
    // },
    {
      skillName: "PostgreSQL",
      src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
    },
    {
      skillName: "Supabase",
      src: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"
    },    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "K J Somaiya College of Engineering",
      logo: require("./assets/images/kjsce.png"),
      subHeader: "B.Tech in Computer Engineering",
      duration: "August 2019 - May 2023",
      desc: "9.04 CGPI",
      descBullets: [
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning and Deep Learning",
      progressPercentage: "65%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      schoolName: "Barclays",
      logo: require("./assets/images/barclays-icon.svg"),
      subHeader: "Business Analyst Intern",
      duration: "June 2022 - August 2022",
      desc: "Positions Balances Transactions Valuations Dashboard, Wealth Processing Department",
      descBullets: [
        "Developed the Positions Balances Transactions Valuations (PBTV) Dashboard, a place where the internal team can check the updates of various feeds along with their entities and running status.",
        "Fetched, verified and combined the data coming from Barclays Data Warehouse (MS SQL) and AWS S3 (Hudi Table).",
        "Computed the runtime status of various batch processes determining whether the delay is from the downstream or not.",
        "Provided a one stop destination to get any information regarding the status of all components in the PBTV Application.",
      ]
    },
    {
      schoolName: "Dr. Ninad Mehendale, KJSCE",
      logo: require("./assets/images/kjsce.png"),
      subHeader: "Research Intern",
      duration: "November 2021 - May 2022",
      desc: "A deep learning based approach to segment exudates in retinal fundus images using Recurrent Residual U-Net.",
      descBullets: [
        "Predicted the stages of Diabetic Retinopathy by segmenting exudates, prominent signs of Diabetic Retinopathy.",
        "Devised an exudate level metric using connected components algorithm and breadth first search traversal.",
        "Performed quantitative comparison of different U-Net architectures on three benchmark datasets.",
        "Designed a residual recurrent U-Net (R2-UNet) that segmented exudates with 93.20% sensitivity and 99.80% specificity.",
      ]
    },
    {
      schoolName: "NxtBig Software Labs",
      logo: require("./assets/images/nxtbig.jpg"),
      subHeader: "Software Developer Intern",
      duration: "March 2021 - June 2021",
      desc: "Finkit‌ ‌and‌ ‌TaxFox‌ ‌-‌ ‌Income‌ ‌Tax‌ ‌Filing‌ ‌Softwares",
      descBullets: [
        "Created‌ ‌a‌ ‌pipeline‌ ‌for‌ ‌converting‌ ‌JSON‌ ‌Schema‌ ‌provided‌ ‌by‌ ‌the‌ ‌Income‌ ‌Tax‌ ‌Department‌ ‌into‌ ‌fully‌ ‌customizable‌ ‌surveys.",
        "Developed‌ ‌a‌ ‌script‌ ‌which‌ ‌reverse‌ ‌maps‌ ‌the‌ ‌user‌ ‌fed‌ ‌data‌ ‌precisely‌ ‌into‌ ‌nested‌ ‌key-value‌ ‌pairs‌ ‌corresponding‌‌ to‌‌ the‌‌ schema‌ ‌hierarchy.",
        "Integrated‌ ‌tax-computations‌ ‌and‌ ‌validations‌ ‌under‌ ‌various‌ ‌income‌ ‌slabs‌ ‌to‌ ‌surveys.‌",
        "Developed‌ ‌a‌ ‌React-Redux‌ ‌application‌ ‌for‌ ‌testing‌ ‌and‌ ‌comparing‌ ‌the‌ ‌performance‌ ‌of‌ ‌the‌ ‌application‌ ‌with‌ ‌previously‌‌ deployed‌ ‌versions."
      ]
    },
    {
      schoolName: "Bizhives",
      logo: require("./assets/images/bz.png"),
      subHeader: "Java‌ ‌Backend‌ ‌Developer‌ ‌Intern",
      duration: "July 2020 - September 2020",
      desc: "Bizhives,‌ ‌Business‌ ‌Matchmaking‌ ‌Platform’s‌ ‌Website",
      descBullets: [
        "Created ‌an‌ ‌enterprise‌ ‌application‌ ‌from‌ ‌scratch‌ ‌using‌ ‌Spring‌ ‌boot.‌",
        "Worked primarily with AWS and Backend, hosting the application on ec2 instance.",
        "Used ‌Postgres‌ ‌and‌ ‌DynamoDB,‌ ‌utilized ‌relational‌ ‌and‌ ‌NoSQL‌ databases‌ ‌for‌ ‌specific‌ ‌advantages.",
        "Set‌ ‌up‌ ‌CI/CD‌ ‌Pipelines‌ ‌using‌ ‌Github‌ ‌Actions‌ ‌and‌ ‌created ‌api‌ ‌documentation‌ ‌using‌ ‌Swagger‌ ‌UI."
      ]
    },
  ]
};

const communityWork = {
  display: true, //Set it to true to show workExperiences Section
  communityWork: [
    {
      schoolName: "Google Developer Student Clubs",
      logo: require("./assets/images/dsc.png"),
      subHeader: "Lead",
      duration: "July 2021 - June 2022",
      desc: "Led the GDSC community organizing events like the Google Cloud Campaign in the campus.",
      descBullets: [
      ]
    },
    {
      schoolName: "CodeChef",
      logo: require("./assets/images/cchef.png"),
      subHeader: "Data Structures and Algorithms Educator",
      duration: "August 2020 - October 2020",
      desc: "Selected among the few across India to work with CodeChef. Taught Data Structures and Algorithms to over 20k students on India’s largest Competitive Programming platform - CodeChef’s official Youtube channel.",
      descBullets: [
      
      ]
    },
    {
      schoolName: "KJSCE CodeCell",
      logo: require("./assets/images/ccell.jpg"),
      subHeader: "Tech Team",
      duration: "May 2020 - June 2021",
      desc: "A team of enthusiastic competitive programmers and developers conducting hackathons, coding events and workshops for the student community.",
      descBullets: [
        "Organized the annual CodeCell hackathon, KJSCE Hack 5.0 at our university.",
        "Hosted a panel session on Google Summer of Code (GSoC) with ex-GSoC contributors live on YouTube.",
        "Organized CodeSpree, a competitive programming competition during the tech fest of our university and authored a dynamic programming problem for the event.",
      ]
    },
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      schoolName: "Winner - 1st Place",
      logo: require("./assets/images/hackbash.jpeg"),
      subHeader: "HackerBash Hackathon",
      duration: "February 2021",
      desc: "Developed CoVaccine application in the 24 hour open hackathon organized by CSI-KJSCE",
      descBullets: [
        "Gets‌ ‌users‌ ‌location‌ ‌using‌ ‌ip‌ ‌address",
        "Locates‌ ‌and‌ ‌finds‌ ‌directions‌ ‌to‌ ‌nearest‌ ‌vaccine‌ ‌center",
        "Allows user to book a vaccine appointment based on availability",
        "Authenticating‌ ‌users‌ ‌via‌ ‌email‌ ‌verification",
        "Dynamic‌ ‌Covid-19‌ ‌statistics‌ ‌of‌ ‌countries",
        "Leaflet.js‌ ‌dynamic‌ ‌map‌ ‌updates"
      ]
    },
  ]
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Want to discuss a project or work? My Inbox is open for all communications.",
  number: "",
  email_address: "diveshthakker2201@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  communityWork
};
