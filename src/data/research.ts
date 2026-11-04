export interface ResearchItem {
  id: string;
  title: string;
  venueStatus: string;
  year: string;
  abstract: string;
  tags: string[];
  paperUrl?: string;
  codeUrl?: string;
}

export const researchData: ResearchItem[] = [
  {
    id: "representation-unlearning",
    title: "Representation-Aware Unlearning in Large Language Models",
    venueStatus: "Ongoing Research / Pre-print Formulation",
    year: "2026",
    abstract:
      "Investigating mechanistic approaches to selectively unlearn sensitive representations and memorized facts in transformer models without degrading downstream task capabilities.",
    tags: ["LLMs", "Machine Learning", "NLP", "Mechanistic Interpretability"],
    codeUrl: "https://github.com"
  }
];