import { Profile, ResearchData, TeachingExperience } from './types';

// ==========================================
// GUIDE: LINK & IMAGE HANDLING (2 Options)
// ==========================================
//
// OPTION 1: Network Links (External)
// Use the full URL starting with http or https.
// Example: "https://www.google.com" or "https://mysite.com/image.jpg"
//
// OPTION 2: Project Links (Internal/Local)
// Place your files (PDFs, Images) in the "public" folder of this project.
// Use a relative path (string) to reference them.
// Example: If you have "public/cv.pdf", use "cv.pdf" or "./cv.pdf".
// Example: If you have "public/images/me.jpg", use "images/me.jpg".
//
// NOTE: The `SmartLink` component automatically detects PDF files
// and external links to open them in a new tab.
// ==========================================

export const PROFILE: Profile = {
  name: "Yuexi Cao",
  title: "Ph.D. Candidate in Economics",
  institution: "Top University Name", 
  email: "yuexi.cao@example.edu",
  location: "City, Country",
  
  // Image: Can be an external URL or a local path like "images/headshot.jpg"
  image: "https://picsum.photos/400/400", 
  
  about: "I am a Ph.D. candidate in Economics at [University]. My primary research interests lie in Industrial Organization and Applied Microeconomics, with a focus on digital markets and platform competition. I will be available for interviews at the 2025 ASSA Annual Meeting.",
  fields: ["Industrial Organization", "Applied Microeconomics", "Digital Economics"],
  
  // CV: Can be "cv.pdf" (local) or "https://website.com/cv.pdf" (external)
  cvUrl: "cv.pdf", 
};

export const RESEARCH_DATA: ResearchData = {
  jobMarketPaper: {
    id: "jmp-1",
    title: "Platform Competition and Algorithmic Pricing: Evidence from the Hotel Industry",
    authors: ["Yuexi Cao"],
    year: "2024",
    status: "working_paper",
    isJobMarketPaper: true,
    abstract: "This paper investigates how algorithmic pricing adoption by hotels on booking platforms affects equilibrium prices and consumer welfare. Using a novel dataset of daily prices and algorithm adoption, I find that increased adoption leads to a U-shaped price trajectory...",
    
    // Paper Link: Local file example
    pdfUrl: "papers/jmp_draft.pdf", 
    
    // Code Link: External URL example
    codeUrl: "https://github.com/yuexicao/pricing-algo", 
  },
  publications: [
    {
      id: "pub-1",
      title: "Market Concentration in the Digital Age",
      authors: ["Yuexi Cao", "Co-Author Name"],
      publication: "Journal of Economic Behavior & Organization",
      year: "2023",
      status: "published",
      abstract: "We analyze the trends of market concentration across 50 digital sectors using a new scraped dataset. Our results suggest that while concentration is increasing, niche entry remains robust...",
      pdfUrl: "https://doi.org/10.1016/j.jebo.2023.01.001"
    }
  ],
  workingPapers: [
    {
      id: "wp-1",
      title: "Consumer Privacy and Price Discrimination",
      authors: ["Yuexi Cao"],
      year: "2023",
      status: "working_paper",
      abstract: "I explore the theoretical implications of privacy regulations on firms' ability to price discriminate. The model predicts that stricter privacy laws may paradoxically increase prices for privacy-conscious consumers.",
      pdfUrl: "papers/privacy_paper.pdf"
    }
  ],
  workInProgress: [
    {
      id: "wip-1",
      title: "Network Effects in Two-Sided Markets: A New Estimation Approach",
      authors: ["Yuexi Cao", "Advisor Name"],
      year: "2024",
      status: "work_in_progress",
      abstract: ""
    }
  ]
};

export const TEACHING_DATA: TeachingExperience[] = [
  {
    id: "t-1",
    course: "Intermediate Microeconomics",
    role: "Teaching Assistant",
    institution: "Top University Name",
    period: "Fall 2022, Spring 2023",
    description: "Led weekly recitation sections for 40+ undergraduate students. Rated 4.8/5.0 in student evaluations."
  },
  {
    id: "t-2",
    course: "Industrial Organization (Graduate)",
    role: "Teaching Assistant",
    institution: "Top University Name",
    period: "Fall 2023",
    description: "Graded assignments and held office hours for PhD students."
  }
];