import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IService, ISkill, IProject } from "./types";

export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about: "I can build a scalable SPA using <b> HTML</b>, <b>CSS</b> with <b>Angular</b>, <b>React.js</b>, <b>Vue.js</b> ",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about: "handle database, server, api using <b>Express </b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about: "I can develop robust  REST API using <b>Node API</b> ",
    },
    // {
    //     Icon: MdDeveloperMode,
    //     title: "Competitive Coder",
    //     about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
    // },
    // {
    //     Icon: AiOutlineAntDesign,
    //     title: "UI/UX designer",
    //     about: "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
    // },
    // {
    //     Icon: RiComputerLine,
    //     title: "Whatever",
    //     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
    // },
];

export const languages: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Angular",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "React",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Vue",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "Next.js",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Node.js",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "PHP",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Bootstrap",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Tailwindcss",
        level: "50",
    },
];

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "Visual Studio Code",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Sublime Text",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "50",
    },
];

export const projects: IProject[] = [
    {
        id: 0,
        name: "WhatsApp Clone",
        description:"This app clone from WhatsApp with feature basic.",
        image_path: "/images/whatsapp-clone.png",
        deployed_url: "https://whats-app-clone-7d3de.web.app",
        github_url: "https://github.com/TamokiLoi/whatsapp-clone",
        category: ["react"],
        key_techs: ["React", "Material UI", "React Router", "React Context API", "Redux", "Google Authentication", "Firebase Firestore Realtime DB"],
    },
    {
        id: 1,
        name: "Amazon Clone",
        description:"This app clone from Amazon with feature basic.",
        image_path: "/images/amazon-clone.png",
        deployed_url: "https://clone-a437c.web.app/",
        github_url: "https://github.com/TamokiLoi/amazon-clone-react",
        category: ["react"],
        key_techs: ["React", "Material UI", "React Router", "React Context API", "Stripe", "Google Authentication", "Firebase DB & Functions"],
    },
    {
        id: 2,
        name: "Read Manga Online",
        description:"This app provides an online comic reading feature.",
        image_path: "/images/read-manga-online.png",
        deployed_url: "https://lakemanga.com/",
        github_url: null,
        category: ["react", "nextjs", "golang"],
        key_techs: ["Golang", "JWT", "React",  "Reactstrap", "Next.js", "Redux", "AntDesign"],
    },
    // {
    //     id: 10,
    //     name: "COVID Tracker",
    //     description:
    //         "This app shows a statistical view about corona virus over the world",
    //     image_path: "/images/covid.jpg",
    //     deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    //     github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    //     category: ["react"],
    //     key_techs: ["React", "Chart.js", "Material UI"],
    // },
    // {
    //     id: 7,
    //     name: "Algorithm Visualizer",
    //     //TODO add data
    //     image_path: "/images/algoVisual.png",
    //     deployed_url: "https://visual-algorithm.web.app/",
    //     github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    //     category: ["react"],
    //     description:
    //         "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    //     key_techs: ["React", "firebase", "Framer Motion"],
    // },

    // {
    //     id: 1,
    //     name: "Dev Talks",
    //     image_path: "/images/dev.jpg",
    //     deployed_url: "https://dev-talks.herokuapp.com/",
    //     github_url: "https://github.com/Dey-Sumit/Dev-talks",
    //     category: ["node", "mongo", "react"],
    //     description:
    //         "Social Media app for developers who can share project,create posts,etc...",
    //     key_techs: [
    //         "React",
    //         "Redux",
    //         "Node",
    //         "Express",
    //         "Mongo",
    //         "REST API",
    //         "Bootstrap",
    //     ],
    // },

    // {
    //     id: 2,
    //     name: "Realtime Chat App",
    //     image_path: "/images/chatapp.jpg",
    //     deployed_url: "https://sumit-chat.netlify.app/",
    //     github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    //     //TODO type on category
    //     category: ["node", "react"],
    //     description:
    //         "Basic Realtime Chat App where one can create a room can talk to each other",
    //     key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    // },

    // {
    //     id: 3,
    //     name: "Tweeter Clone",
    //     image_path: "/images/tweetme.jpg",
    //     deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    //     github_url: "https://github.com/Dey-Sumit/tweetme",
    //     category: ["django", "react"],
    //     description:
    //         "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    //     key_techs: ["React", "Django", "Django REST API"],
    // },
    // {
    //     id: 4,
    //     name: "Dev Portfolio",
    //     image_path: "/images/portfolio.jpg",
    //     deployed_url: "http://suprateem.herokuapp.com/",
    //     category: ["vanilla"],
    //     github_url: "https://github.com/Dey-Sumit/tweetme",
    //     description: "Hey, You are seeing this project now...Enjoy",
    //     key_techs: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    // },

    // {
    //     id: 5,
    //     name: "Color Classification using tf.js",
    //     image_path: "/images/color.jpg",
    //     deployed_url: "!#",
    //     github_url: "https://github.com/Dey-Sumit/color-classification",
    //     category: ["express", "ml"],
    //     description:
    //         "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    //     key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    // },
    // {
    //     id: 6,
    //     name: "YouTube using YouTube ",
    //     image_path: "/images/youtubeClone.png",
    //     deployed_url: "https://not-utube.web.app/",
    //     github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    //     category: ["express", "ml"],
    //     description:
    //         'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    //     key_techs: [
    //         "React",
    //         "Redux",
    //         "Firebase Auth",
    //         "YouTube API",
    //         "Sass",
    //         "Bootstrap",
    //     ],
    // },
    // {
    //     id: 9,
    //     name: "Football App",
    //     //TODO add image,github,dep url
    //     image_path: "/images/football.png",
    //     deployed_url: "https://o-my-goal.web.app/",
    //     github_url: "https://github.com/Dey-Sumit/football-app",
    //     category: ["react"],
    //     description:
    //         "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    //     key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    // },
];