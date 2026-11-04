export interface Project {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  problem: string;
  solution: string;
}

export const projectsData: Project[] = [
  {
    id: "StudyBuddy: An Integrated Academic Productivity Hub for Modern Students",
    title: "StudyBuddy - Student Productivity & Focus WebApp",
    tagline: "A lightweight, zero-login, client side productivity hub built for students.",

    tags: ["HTML", "CSS", "JavaScript" , "JSON"],
    githubUrl: "https://github.com/Naqib2003/study-buddy",
    liveUrl: "https://study-buddy-topaz-alpha.vercel.app/",
    problem:
      "Students often struggle to manage assignments, study sessions, and academic deadlines across multiple tools, leading to missed tasks, poor time management, and reduced productivity due to fragmented workflows.",
    solution:
      "Developed a client-side productivity web application that unifies task management, Pomodoro based focus tracking, study/rest scheduling, and deadline monitoring into a single platform, featuring local data storage, customizable timers, interactive calendars and offline audio-visual reminder systems."
  },
  {
    id: "DevPathways: An Interactive Developer Learning Roadmap Platform with Curated Resources and Structured Career Paths",
    title: "DevPathways · Interactive Developer Roadmaps & Free Curated Resources",
    tagline: "DevPathways: An Interactive Developer Learning Roadmap Platform with Curated Resources and Structured Career Paths",
    tags: ["HTML", "CSS", "API"],
    githubUrl: "https://github.com/Naqib2003/DevPathways",
    liveUrl: "https://dev-pathways-fq2vdz08c-naqib3.vercel.app/",
    problem:
      "Aspiring developers often struggle to navigate the overwhelming amount of learning resources available online, resulting in fragmented learning paths, skill gaps, and uncertainty about the progression required to achieve specific career goals.",
    solution:
      "Developed an interactive roadmap platform that provides structured, role-based learning paths across software engineering, cloud computing, DevOps, cybersecurity, AI, and full-stack development, combining curated free resources, milestone-based progression, and responsive visualization to streamline technical skill development."
  },
  {
    id: "A comprehensive web application designed to connect families with children and senior citizens in need of a loving home or care.",
    title: "Family Adoption & Senior Care Portal",
    tagline: "Family Adoption & Senior Care Portal: A Smart Platform for Adoption, Care Placement, Verification, and Community Support",
    tags: ["Node.js", "Express.js", "MySQL" , "HTML" , "CSS" , "JavaScript"],
    githubUrl: "https://github.com/Naqib2003/Adoption-Webapp",
    problem:
      "The absence of a centralized system for adoption and senior care management can lead to inefficient coordination, delayed approvals, and reduced transparency for both applicants and care providers.",
    solution:
      "Built a comprehensive care coordination platform that connects families, children, senior citizens, legal authorities, and moderators through a unified ecosystem with smart matching, application monitoring, needs-based sponsorship, and long-term welfare tracking capabilities."
  }
];