export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "MySQL" , "PostgreSQL" , "C"]
  },

  {
    category: "Frameworks",
    skills: ["Node.js", "React.js", "Express.js" ,  "Django", "Flask", "PyTorch" , "TensorFlow" , "FastAPI" , "SpringBoot" , "REST API"]
  },

  {
    category: "Machine Learning Cores",
    skills: ["Machine Learning", "NLP", "LLM", "Fine Tuning", "Low Resource Language" , "Deep Learning" , "Neural Networks" , "Pattern Recognition" , "Data Science"]
  },

  {
    category: "Libraries",
    skills: ["Matplotlib", "Panda", "Numpy", "Scikit-learn" , "jQuery" , "Bootstrap" , "OpenGL"]
  },

  {
    category: "Tools & Environments",
    skills: ["Git", "GitHub", "VS Code" , "PyCharm" , "IntelliJ" , "Docker"]
  }
];