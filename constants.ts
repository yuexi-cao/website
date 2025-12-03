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
  title: "Incoming Ph.D. student",
  institution: "Renmin University of China",
  email: "caoyuexi2022@ruc.edu.cn",
  location: "Beijing, China",

  // Image: 可以是外链，也可以是 public/assets 里的本地文件
  // 例如：public/assets/profile.png -> "assets/profile.png"
  image: "assets/profile.png",

  about:
    "I am a senior undergraduate student at Renmin University of China, majoring in Economics and Mathematics. I anticipate obtaining my Bachelor’s Degree by June 2026. Subsequently, I will enroll in Econ PhD Program at Peking University, Guanghua School of Management (GSM).",
  fields: ["Applied Microeconomics", "Innovation", "International Economics"],

  // CV: 可以是 "assets/cv.pdf"（本地）或 "https://website.com/cv.pdf"（外链）
  cvUrl: "assets/cv.pdf",
  linkedinUrl: "https://www.linkedin.com/in/yuexi-cao-067914324/",
};

export const RESEARCH_DATA: ResearchData = {
  // ==========================
  // Job Market Paper（留位示例）
  // ==========================
  // 当你有 JMC 论文时，把下面这一块取消注释并填写：
  //
  // jobMarketPaper: {
  //   id: "jmp-1",
  //   title: "Your job market paper title",
  //   authors: ["Yuexi Cao"],
  //   year: "20XX",
  //   status: "working_paper", // 或 "published"
  //   isJobMarketPaper: true,  // 右上角会出现 “Job Market Paper” 标识
  //   abstract: "Write your abstract here...",
  //   // 本地 PDF：放在 public/papers/jmp.pdf -> "papers/jmp.pdf"
  //   pdfUrl: "papers/jmp.pdf",
  //   // 可选：代码或附录链接（GitHub / OSF / external）
  //   codeUrl: "https://github.com/your-repo",
  // },

  // ==========================
  // Publications（留位示例）
  // ==========================
  // 当你有已发表论文时，可以按这个格式添加：
  //
  // publications: [
  //   {
  //     id: "pub-1",
  //     title: "Paper title here",
  //     authors: ["Yuexi Cao", "Coauthor Name"],
  //     year: "20XX",
  //     status: "published",
  //     // 期刊名称填在这里
  //     publication: "Journal of Economic Behavior & Organization",
  //     // 这里写摘要；如果不想展示，可以删掉 abstract 字段
  //     abstract: "Short abstract here...",
  //     // 可以是 DOI 链接，也可以是本地 PDF（例如 public/papers/pub1.pdf -> "papers/pub1.pdf"）
  //     pdfUrl: "https://doi.org/xxxxxxx",
  //     // 可选的代码/附录链接
  //     codeUrl: "https://github.com/your-repo",
  //     slidesUrl: "https://www.google.com",
  //   },
  // ],

  // ==========================
  // Working Papers（真实数据）
  // ==========================
  workingPapers: [
    {
      id: "wp-1",
      title: "Internal Networks and the Geography of Knowledge Spillovers",
      authors: ["Puyang Sun", "Yili Liu", "Yuexi Cao"],
      year: "2025. R&R.",
      status: "working_paper",
      abstract:
        "This paper examines whether multi-location business networks extend the geographic reach of innovation spillovers from multinational enterprises (MNEs). Using Orbis ownership links to construct Chinese firms’ cross-city networks and exploiting first-time MNE entry from FDI Markets in a stacked difference-in-differences design, we show that affiliates located in non-entry cities experience sizeable and persistent gains in innovation—about 12 percent on average—after an MNE enters another city within the same network. Patent citation patterns reveal that these affiliates increase citations to both the entrant-city affiliate and the MNE itself, indicating cross-regional knowledge transmission rather than internal reallocation of R&D. Spillover strength is greater when MNE technologies are more advanced or technologically distant from domestic firms, and when affiliates have lower absorptive capacity or face lower internal coordination frictions. The findings highlight multi-location business networks as important channels for overcoming geographic frictions in knowledge diffusion and for amplifying the domestic innovation returns to foreign investment.",
      slidesUrl: " ",
        // 预留：工作论文 PDF 链接（本地或外链）
      // pdfUrl: "papers/internal_networks.pdf",
      // 预留：代码仓库链接
      // codeUrl: "https://github.com/your-repo/internal-networks",
    },
    {
      id: "wp-2",
      title: "Housing Rights and the Urban Integration of Migrant Workers",
      authors: ["Haoze Li", "Shouying Liu", "Puyang Sun", "Yuexi Cao"],
      year: "2024. R&R.",
      status: "working_paper",
      abstract:
        "We study how expanding rural migrants’ housing rights affects their urban integration in China. Using the 2014 nationwide removal of home-purchase restrictions as a quasi-experiment and CMDS microdata from 2012–2016, we implement DID strategies to estimate causal effects. Restoring purchase eligibility substantially increases migrants’ citizenization: for new homeowners, long-term settlement intention rises by 4.35%, family co-residence by 7.54%, wages by 13.13%, and consumption by 6.44%. Non-homeowners respond mainly through improved expectations. Effects are stronger for younger and less-educated migrants. Instrumental-variable and grouped-DID analyses support the findings. The results highlight housing rights as a key margin of urban assimilation and underscore the importance of rights-based reforms in China’s urbanization.",
      // 预留：工作论文 PDF 链接（本地或外链）
      // pdfUrl: "papers/housing_rights.pdf",
      // 预留：代码仓库链接
      // codeUrl: "https://github.com/your-repo/housing-rights",
    },
  ],

  // ==========================
  // Work in Progress（真实数据 + 留位）
  // ==========================
  workInProgress: [
    {
      id: "wip-1",
      title: "Co-opetition, Information Sharing and M&A outcomes",
      authors: ["Yuexi Cao", "Puyang Sun", "Yiqing Yang"],
      year: "2025",
      status: "work_in_progress",
      // 还在早期阶段，可以先不写摘要；准备好后再补充
      // abstract: "Work in progress abstract...",
      // pdfUrl: "papers/coopetition_ma.pdf",
      // codeUrl: "https://github.com/your-repo/coopetition-ma",
    },
  ],
};

export const TEACHING_DATA: TeachingExperience[] = [
  {
    id: "t-1",
    course: "Game Theory",
    role: "Teaching Assistant",
    institution: "Renmin University of China",
    period: "Fall 2025",
    description: "Led weekly recitation sections for 70+ undergraduate students.",
    // 课程材料链接占位：
    // 把教学材料放在 public/teaching/game-theory/syllabus.pdf
    // 然后这里写成 "teaching/game-theory/syllabus.pdf"
    // materialsUrl: "teaching/game-theory/syllabus.pdf",
  },
];