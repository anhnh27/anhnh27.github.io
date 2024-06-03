import { FC } from "react";
import "./App.css";

const Profile = [
  {
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
    value: "+61 48331 0292",
  },
  {
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
        />
      </svg>
    ),
    value: "nguyenhoanganh10290@gmail.com",
  },
  {
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
    value: "Melbourne, Australia",
  },
];

const PersonalDetails = [
  ["Date of Birth", "10th Feb 1990"],
  ["National", "Vietnamese"],
  ["Languages", "English, Vietnamese"],
  ["Interests", "Reading, Coding, Music, Cooking"],
];

const Objective = `Senior Full Stack Developer with 8+ years of experience in 
designing, implementing, and deploy web & mobile applications. 
Proficient in both frontend and backend technologies, 
seeking challenging opportunities to learn & contribute technical expertise to innovative projects.`;

const Education = {
  degree: "Bachelor of Science in Management Information Systems",
  university: "Banking Academy of Vietnam",
  year: "2014",
};

const Skills = [
  ["Frontend", "TypeScript, JavaScript, ReactJS, React Native, HTML, CSS"],
  ["Backend", "ASP.NET, NodeJS, Express, SQL Server, MySQL, MongoDB"],
  ["Cloud Platforms", "AWS (EC2, S3, RDS, Cloudfront, Rooute 53, Cognito)"],
  [
    "DevOps",
    "Buildkite, Github Actions, GitLab CI/CD, Teamcity, Micosoft App Center, Docker",
  ],
  ["Version Control", "Git, GitHub, Gitlab"],
  ["Testing", "Jest, React Testing Library, Maestro"],
  ["Other", "RESTful APIs, GraphQL, Agile Methodologies"],
];

const Experiences = [
  // {
  //   title: "Senior Software Developer",
  //   company: "FPT Software Malaysia",
  //   location: "Kuala Lumpur, Malaysia",
  //   date: "2023 - present",
  //   achievements: [
  //     `Design & implement scalable web applications using AWS services.`,
  //     `Led backend & frontend teams to deliver assigned projects.`,
  //     `Implement CI/CD pipeline using Github Actions & Docker to deploy the application.`,
  //     `Keep updated with the latest technologies & trends to improve the codebases.`,
  //     `Research new technologies & tools to improve the development process.`,
  //     `Enforce coding standards, code review, and mentor junior developers.`,
  //   ],
  // },
  {
    title: "Senior Mobile Developer",
    company: "HammerTech Technology",
    location: "Melbourne, Australia",
    date: "2022 - present",
    achievements: [
      `Revamp the mobile app codebase, splitting code by modules, cleaning up technical debts.`,
      `Migrate ASP.Net MVC 5 web application to ReactJS + ASP.Net Web API.`,
      `Apply new technique to improve performance & production issues.`,
      `Refactor obsolete components, migrate class components to functional components.`,
      `Apply Context API, react hooks to decoupling business logics & UI and keep the components clean & readable.`,
      `Deliver new features & maintain current codebase, API integrating.`,
      `Implement unit testing strategies using Jest & React Testing Library.`,
      `Implement end to end testing using Maestro.`,
      `Create and maintain CI/CD pipeline using Teamcity & Fastlane to deploy testing app & release to production smoothly.`,
      `Conduct code review & mentor junior developers.`,
    ],
  },
  {
    title: "Senior Mobile Engineer",
    company: "REA Group Asia",
    location: "Kuala Lumpur, Malaysia",
    date: "2019 - 2022",
    achievements: [
      `Resolving technical debts & refactor fat components.`,
      `Implementing a native module to support lazy loading photo library.`,
      `Maintaining the current codebase, delivering new features, and fixing production issues.`,
      `Improving app performance by optimizing & fixing the unnecessary re-renders using https://github.com/welldone-software/why-did-you-render`,
      `Implementing unit testing strategies using Jest & React Testing Library to reduce regression issues.`,
      `Maintaining CI/CD pipeline using Buildkite & Fastlane.`,
      `Implement Crashlytics & Analytics to monitor app performance.`,
    ],
  },
  {
    title: "Full Stack Developer",
    company: "FPT Software Malaysia",
    location: "Kuala Lumpur, Malaysia",
    date: "2018 - 2019",
    achievements: [
      `Working on multiple projects, take initiative tasks to create project structure & core components.`,
      `Optimizing database queries and indexes to improve query performance and reduce page load times.`,
      `Collaborating with cross-functional teams to gather requirements, prioritize features, and deliver high-quality software solutions that meet business objectives and user needs.`,
      `Mentoring and coaching junior developers, fostering a collaborative team environment and facilitating knowledge sharing on best practices and emerging technologies.`,
    ],
  },
  {
    title: "Web Developer",
    company: "FPT Software",
    location: "Hanoi, Vietnam",
    date: "2016 - 2018",
    achievements: [
      `Collaborated with senior developers to refactor and optimize codebase, improve page load times and overall performance of the application.`,
      `Resolved critical bugs and issues reported by QA testers, demonstrating strong problem-solving skills and attention to detail in identifying and addressing technical issues.`,
      `Received positive feedback from team members and project managers for proactive communication, willingness to learn, and dedication to delivering high-quality work in a fast-paced development environment.`,
    ],
  },
];

const Projects = [
  {
    name: "HT Inspection",
    description: `Eliminate paper and spreadsheets with one digital platform for
    equipment, safety and critical job site inspections - online and
    offline. The HammerTech Inspection mobile application & website increases productivity,
    improves accuracy and expedites time to correct issues.`,
    icon: "https://play-lh.googleusercontent.com/fuOxuBnzmeZXxGdQkLsS4LPe4MxlwL2XQjsuL6QQR35U2TyRpKZgDAQ2vus2QK2lBfQ=w240-h480-rw",
    stacks: [
      "ReactJS",
      "React Native",
      "Redux",
      "Redux Saga",
      "RealmDB",
      "ASP.Netcore",
      "SQL Server",
      "Fastlane",
      "Jest",
      "React Testing Library",
      "Maestro",
      "Teamcity",
    ],
    responsibilities: [
      "Designed and build interactive and user-friendly web & mobile applications.",
      "Designed and implemented RESTful APIs for frontend and backend communication.",
      "Collaborated with the team to design and implement new features for the applications.",
      "Improved the performance of the applications by optimizing the code and database queries.",
      `Implemented automated testing strategies using Jest and React Testing Library, 
       making reduction in regression bugs and improved overall software reliability.`,
      "Managed the application CD/CI pipeline using Teamcity.",
      "Mentored junior developers and conducted code reviews.",
    ],
  },
  {
    name: "iProperty Malaysia",
    description: `iProperty Malaysia is a real estate website that provides property listings and
    information to help users make informed decisions. The website allows users to search for
    properties based on their preferences and requirements.`,
    icon: "https://lh3.googleusercontent.com/PI2XJbwHb-oL4zZNeEonyF0N7KSkmliX60Iar7oc7KVKB88KgFVIp1sXBRipI2Z0vQ=s180-rw",
    stacks: [
      "React Native",
      "Redux",
      "Redux Saga",
      "NodeJS",
      "GraphQL",
      "Buildkite",
      "Fastlane",
      "Jest",
    ],
    responsibilities: [
      `Collaborate with the product and backend teams to develop and
       implement the frontend architecture and interactive features to
       support user interface concepts.`,
      `Develop, test, deploy and enhance react native & native
       applications running on various mobile platforms.`,
      `Develop native modules for React Native applications to satisfy the requirements of the project.`,
      `Strive for continuous improvement and build continuous
       integration, continuous development, and constant deployment
       pipeline (CICD).`,
      `Participate in the project discussion of technical
       implementation, implementation of unit test, code-review and
       frontend architecture optimization.`,
    ],
  },
  {
    name: "POINT",
    description: `POINT (Plant Operations Integrated Tools) is a centralised
    database and integrated system, primarily utilised by both
    operators and technical staff to support day to day operation
    activities within the plant.`,
    icon: "https://lh3.googleusercontent.com/M5wm8TTH9iy5TLj6uyv8X294ze2Cfps-o9_80zmrBuscN6Ax9gK5tOMx_MM8UpDN3Q=s180-rw",
    stacks: [
      "React Native",
      "Redux Saga",
      "ASP.Net Web API",
      "SQL Server",
      "Fastlane",
      "RealmDB",
    ],
    responsibilities: [
      `Build project structure, and create core & common components
      to support development.`,
      `Develop and maintain the mobile application using React Native.`,
      `Conduct code review and mentor junior developers.`,
      `Fix production issues and deliver new features.`,
      `Develop offline mode for the mobile application.`,
    ],
  },
  {
    name: "Petronas Risk Based Inspection",
    description: `This project was part of the call out contract awarded by
    PETRONAS in 2015 for us to perform Risk Based Inspection (RBI)
    technical services.`,
    icon: "https://www.contactcenterworld.com/images/company/PETRONAS-ICT-Sdn-Bhd-1200px-logo.png",
    stacks: ["ASP.Net Web API", "ReactJS", "SQL Server"],
    responsibilities: [
      `Develop and maintain API endpoints and UI interface using
      ASP.Net Web API & Entity Framework. & ReactJS`,
      `Fix production issues and deliver new features.`,
    ],
  },
];

const App: FC = () => {
  return (
    <div className="flex flex-1 flex-grow bg-white">
      <div className="flex flex-1 flex-row">
        <div className="flex flex-col bg-[#e3d4c7] p-8">
          <img
            className="rounded-full w-52 h-52 object-cover border-2 border-[#9e9fa1] self-center"
            src="./src/assets/images/profile.jpg"
            alt="profile"
          />
          <ul className="list-none mt-8 w-full">
            {Profile.map((item, index) => (
              <li key={index} className="flex items-start my-2">
                <div className="mx-2">{item.Icon}</div>
                {item.value}
              </li>
            ))}
          </ul>
          <div className="text-left my-4 text-2xl font-semibold border-b-[0.5px] border-[#343537]">
            Personal Details
          </div>
          <ul className="list-none w-full">
            {PersonalDetails.map((item, index) => (
              <li key={index} className="flex flex-col items-start my-2">
                <div className="font-medium text-xl">{item[0]}</div>
                <div>{item[1]}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="p-8 text-[#e3d4c7] bg-[#343537]">
            <div className="font-bold text-7xl mt-12 text-left">
              Hoang Anh Nguyen
            </div>
            <div className="uppercase text-2xl text-left">
              Senior Full Stack Developer
            </div>
          </div>
          <div className="bg-[#fff] py-12 pl-8">
            <div className="text-left text-2xl border-b uppercase">
              About Me
            </div>
            <div className="text-left mt-6">{Objective}</div>
            <div className="text-left text-2xl border-b uppercase mt-12">
              Skills
            </div>
            <div className="grid grid-cols-2 mt-8 gap-2">
              {Skills.map((item, index) => (
                <div key={index} className="text-left">
                  <span className="font-bold">{item[0]}</span>: {item[1]}
                </div>
              ))}
            </div>
            <div className="text-left text-2xl border-b uppercase mt-12">
              Work Experience
            </div>
            <div className="text-left mt-6">
              {Experiences.map((item, index) => (
                <div key={index} className="mt-6">
                  <div className="text-xl font-semibold">{item.title}</div>
                  <div>{`${item.company} / ${item.location} / ${item.date}`}</div>
                  <ul className="mt-4 mx-4 list-disc">
                    {item.achievements.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-left text-2xl border-b uppercase mt-12">
              Projects
            </div>
            <div className="text-left mt-6">
              {Projects.map((item, index) => (
                <div className="mt-6">
                  <div
                    key={index}
                    className="font-semibold text-lg flex flex-row items-center"
                  >
                    <img className="w-8 h-8 mr-2" src={item.icon} />
                    {item.name}
                  </div>
                  <div className="mr-4 mt-4">{item.description}</div>
                  <div className="flex flex-wrap mt-4 gap-1">
                    {item.stacks.map((stack, index) => (
                      <div
                        key={index}
                        className="bg-[#343537] px-4 py-1 rounded-md text-white font-semibold"
                      >
                        {stack}
                      </div>
                    ))}
                  </div>
                  <ul className="mt-4 ml-4 list-disc">
                    {item.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-left text-2xl border-b uppercase mt-12">
              Education
            </div>
            <div className="text-left mt-6">
              <div className="text-xl font-semibold">{Education.degree}</div>
              <div>{`${Education.university} / ${Education.year}`}</div>
              <ul className="mt-4 ml-4 list-disc">
                <li>
                  <p>Data Structures and Algorithms</p>
                </li>
                <li>
                  <p>Databases, SQL and RDBMS</p>
                </li>
                <li>
                  <p>Object-oriented Programming</p>
                </li>
                <li>
                  <p>Software Analysis and Design</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
