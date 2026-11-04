export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    id: "auron-ventures-intern",
    role: "Industrial & Marketing Research Intern",
    organization: "Auron Ventures",
    type: "Internship",
    duration: "June 2026 - August 2026",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Conducted extensive data collection and market mapping across specialized domestic industries.",
      "Delivered in-depth industry analysis examining dynamics for Security Bolt seals and Microfiber towel sectors in Bangladesh.",
      "Synthesized findings into actionable market intelligence briefs for executive leadership."
    ]
  },
  {
    id: "bucc-hr-member",
    role: "General Member - Human Resource Department",
    organization: "BRAC University Computer Club (BUCC)",
    type: "Club Leadership",
    duration: "June 2025 - Present",
    location: "Dhaka, Bangladesh · On-site",
    responsibilities: [
      "Organized university-wide tech workshops, hackathons, and community-building seminars.",
      "Managed member engagement pipelines and facilitated internal communications across departments.",
      "Promoted teamwork and cross-functional collaboration within one of the largest student clubs."
    ]
  },

  {
    id: "codealpha-java-developer",
    role: "Junior Java Developer",
    organization: "CodeAlpha",
    type: "Internship",
    duration: "Jan 2026 - Mar 2026",
    location: "Remote",
    responsibilities: [
      "Hotel Reservation System ",
      "Stock Trading Platform" ,
      "Student Grade Tracker"
    ]
  },
  {
    id: "bjrf-campus-ambassador",
    role: "Campus Ambassador & Volunteer Teacher",
    organization: "Bangladesh Justice & Right Foundation",
    type: "Campus Ambassador",
    duration: "Aug 2026 - Present",
    location: "Hybrid",
    responsibilities: [
      "Providing education to underprivileged primary students.",
      "Addressing issues such as equal rights and women abuse.",
      "Spreading awareness about rights in the society."
    ]
  },
  
];