/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Divesh Thakker",
  title: "Hi, I'm Divesh",
  subTitle: emoji(
    "An enthusiastic Software Developer Experienced in Developing Web Applications and working with Machine and Deep Learning Projects. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1T5ixAfeIOwNynqX83A0JHSX0tl28p1cV/view?usp=sharing",
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
      skillName: "Python",
      src: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
    },
    {
      skillName: "JavaScript",
      src: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
    },
    {
      skillName: "C++",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
    },
    {
      skillName: "Tensorflow",
      src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
    },
    {
      skillName: "PyTorch",
      src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
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
      skillName: "Reactjs",
      src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
    },
    {
      skillName: "Django",
      src: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
    },
    {
      skillName: "Spring Boot",
      src: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
    },
    {
      skillName: "Databases",
      src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
    },
    {
      skillName: "npm",
      src: "https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg"
    },
    {
      skillName: "Nodejs",
      src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
    },
    {
      skillName: "Heroku",
      src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
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
      logo: require("./assets/images/kjsceWhite.png"),
      subHeader: "B.Tech in Computer Engineering",
      duration: "August 2019 - June 2023",
      desc: "9.03 CGPI",
      descBullets: [
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
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
      logo: require("./assets/images/bizhives2White.png"),
      subHeader: "Java‌ ‌Backend‌ ‌Developer‌ ‌Intern",
      duration: "July 2020 - September 2020",
      desc: "Bizhives,‌ ‌Business‌ ‌Matchmaking‌ ‌Platform’s‌ ‌Website",
      descBullets: [
        "Created ‌an‌ ‌enterprise‌ ‌application‌ ‌from‌ ‌scratch‌ ‌using‌ ‌Spring‌ ‌boot.‌",
        "Worked ‌with‌ ‌Docker‌ ‌and‌ ‌AWS,‌ ‌hosted ‌the‌ ‌application‌ ‌on‌ ‌ec2‌ ‌instance.‌",
        "Used ‌Postgres‌ ‌and‌ ‌DynamoDB,‌ ‌utilized ‌relational‌ ‌and‌ ‌nosql‌ ‌databases‌ ‌for‌ ‌specific‌ ‌advantages.",
        "Set‌ ‌up‌ ‌CI/CD‌ ‌Pipelines‌ ‌using‌ ‌Github‌ ‌Actions‌ ‌and‌ ‌created ‌api‌ ‌documentation‌ ‌using‌ ‌Swagger‌ ‌UI."
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
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
  twitterDetails
};
