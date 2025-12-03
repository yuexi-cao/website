export interface Profile {
  name: string;
  title: string;
  institution: string;
  email: string;
  location: string;
  image: string;
  about: string;
  fields: string[];
  cvUrl: string;
  scholarUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  publication?: string;
  status: 'published' | 'working_paper' | 'work_in_progress';
  abstract: string;
  pdfUrl?: string;
  codeUrl?: string;
  year: string;
  isJobMarketPaper?: boolean;
}

export interface TeachingExperience {
  id: string;
  course: string;
  role: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ResearchData {
  jobMarketPaper: Paper;
  publications: Paper[];
  workingPapers: Paper[];
  workInProgress: Paper[];
}