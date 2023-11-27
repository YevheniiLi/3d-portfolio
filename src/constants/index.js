import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    maps,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    trailer,
    typescript,
    chat,
    gpt,
    weather
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
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
        iconBg: "#fbc3bc",
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
        iconBg: "#b7e4c7",
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
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: maps,
        theme: 'btn-back-red',
        name: 'Google Maps React API',
        description: 'Elevate your map interactions with our Google Maps API project. Personalized markers, real-time geolocation, and interactive layers create a seamless and engaging location-based experience. Ideal for travel planning, business location, and event mapping.',
        link: 'https://github.com/YevheniiLi/google-maps-reactjs',
    },
    {
        iconUrl: trailer,
        theme: 'btn-back-green',
        name: 'Trailer movie App',
        description: 'Is your personal cinema companion, offering a diverse collection of movie trailers all in one place. Receive personalized recommendations, effortlessly discover films, and stay informed about upcoming premieres. With this app, the thrill of the big screen is just a tap away!',
        link: 'https://github.com/YevheniiLi/trailer-now',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-black',
        name: 'Chat Firebase App',
        description: 'Brings seamless and real-time communication to your fingertips. Engage in lively conversations, share updates, and connect instantly with friends and colleagues. Elevate your chatting experience with secure and efficient Firebase integration.',
        link: 'https://github.com/YevheniiLi/chatapp',
    },
    {
        iconUrl: gpt,
        theme: 'btn-back-pink',
        name: 'Chat GPT Clone App',
        description: 'Experience the next level of conversational AI with ChatGPT Clone. This cutting-edge chat application mirrors the prowess of OpenAI GPT-3.5, providing natural and intelligent interactions. Engage in dynamic conversations and witness the power of language modeling in real-time.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-blue',
        name: 'Weather Feature App',
        description: 'Stay informed and plan your day with our intuitive Weather Feature. Get real-time updates on current conditions, hourly forecasts, and extended outlooks, ensuring youre prepared for whatever Mother Nature has in store. Seamlessly integrated for a user-friendly experience, its your go-to tool for weather insights.',
        link: 'https://github.com/YevheniiLi/chatgpt-client',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer App',
        description: 'Revolutionize your content consumption with our AI-powered Summarizer. Extracting key insights from lengthy text, this tool provides concise and informative summaries, saving you time while ensuring you grasp the essence of any document. Elevate your information processing with AI Summarizer for efficient and effective reading.',
        link: 'https://github.com/YevheniiLi/AI-summarizer',
    }
];