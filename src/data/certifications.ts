export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  score?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "ai-prompt-engineer",
    title: "AI+ Prompt Engineer Level 1",
    issuer: "AI CERTs",
    issuedDate: "June 2025",
    score: "Score: 84/100"
  },
  {
    id: "ef-set-english",
    title: "EF SET English Certificate",
    issuer: "EF SET",
    issuedDate: "October 2026",
    score: "Score: 70/100(C1 Advanced)"
  },

  {
    id: "ai-powered-analytics",
    title: "From Data to Decisions: Analytics in the AI Era",
    issuer: "Grameenphone Ltd",
    issuedDate: "August 2026"
  },
  {
    id: "influence-before-graduation",
    title: "From Classroom to Career: Building Influence Before Graduation",
    issuer: "Grameenphone Ltd",
    issuedDate: "November 2026",
  }
];