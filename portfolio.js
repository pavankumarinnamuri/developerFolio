/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pavan Kumar Innamuri",
  title: "Hi all, I'm Pavan",
  subTitle: emoji(
    "A Passionate Cloud Engineer 🌩️ with Experience in Architecting Scalable Cloud Environments and Automating Infrastructure with AWS, Terraform, and Ansible"  ),
  resumeLink:
    "https://drive.google.com/file/d/1-ueYf68dBJf1OhwRDHmvrTzec1qTU17Y/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pavankumarinnamuri",
  linkedin: "https://www.linkedin.com/in/pavankumarinnamuri/",
  gmail: "pavankumarinnamuri619@gmail.com",
  facebook: "https://www.facebook.com/pavankumarinnamuri",
  medium: "https://medium.com/@pavankumarinnamuri",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE CLOUD ENGINEER PASSIONATE ABOUT AUTOMATING AND OPTIMIZING INFRASTRUCTURE",
  skills: [
    emoji(
      "🌩️ Architect and deploy highly scalable and secure cloud environments on AWS and Azure"
    ),
    emoji("📈 Automate CI/CD pipelines and improve infrastructure visibility with tools like Terraform, Ansible, and Jenkins"),
    emoji(
      "🔗 Integration of cloud services and third-party tools for monitoring, disaster recovery, and cost optimization")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fab fa-terminal"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fab fa-terraform"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fab fa-cogs"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-kubernetes"
    },
    {
      skillName: "SQL DATABASE",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "NoSQL (MongoDB)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Arlington",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - May 2024 ",
      desc: "Graduated with distinction and awarded the Golden Star Maverick Scholarship"
    },
    {
      schoolName: "REVA University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Developed a strong foundation in programming languages and software development methodologies.",
  "Completed projects in web applications and cloud computing technologies.",
  "Participated in collaborative team projects, enhancing teamwork and communication skills."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
   {
      Stack: "DevOps/Cloud",
      progressPercentage: "80%"
   },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Engineer",
      company: "Cloud Innovators",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "March 2021 - December 2022",
      //desc: " Cloud Engineer.",
      descBullets: [
        "Designed and implemented a cost-effective cloud architecture for a high-traffic e-commerce website, and heathcare organizations resulting in a 30% reduction in infrastructure costs and a 20% increase in website speed.",
	      "Researched and recommended new cloud technologies and services, resulting in the adoption of a new cloud-based monitoring tool that improved infrastructure visibility by 40%.",
	      "Conducted security assessments and impemented measures, reducing security incidents by 15%.",
"Designed and implemented disaster recovery plans, resulting in a 90% reduction in downtime during a major system outage.",
"Collaborated with cross-functional teams to ensure alignment with project objectives,Agile best practices and security standards."
      ]
    },
    {
      role: "Cloud Engineer",
      company: "BVR Cloud",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2020 – January 2021",
      descBullets:[
	      "Designed, built, and maintained infrastructure and software platforms within cloud-based environments (AWS and Azure).",
      "Set up and configured cloud-based infrastructure using AWS services such as EC2, S3, RDS, and VPC, supporting the development and deployment of cloud-based applications.",
      "Troubleshot and resolved cloud-related issues, reducing downtime by 50% and improving system availability by 25%.",
      "Migrated existing on-premises services from physical data centers to cloud using cloud migration and automation tools.",
      "Created and maintained technical documentation, ensuring that all cloud-based infrastructure and applications were well-documented and easy to maintain."
  ]
    },
  
//some projects
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
  display: true // Set false to hide this section, defaults to true
};
console.log(bigProjects);

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:        "Recognized for demonstrating expertise in designing distributed applications and systems on the AWS platform",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "AWS Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?u"
         }
      ]
    },

	{
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Achieved this certification for proficiency in developing and maintaining applications on the AWS platform.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "AWS Developer Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
	}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-9452491968",
  email_address: "pavankumarinnamuri619@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
