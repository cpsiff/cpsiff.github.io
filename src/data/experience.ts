export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2026 - Present",
    title: "Machine Learning Engineer",
    company: "Blue River Technology",
    description: "Computer Vision for Agricultural Robotics"
  },
  {
    date: "Summer 2025",
    title: "Applied Scientist II Intern",
    company: "Amazon Robotics",
    description:
      "Computational Imaging for Automation",
    // advisor: "Peter Wang",
    // companyUrl: "https://deepmind.com",
  },
  {
    date: "Summer 2022",
    title: "Machine Vision Research Intern",
    company: "CyberOptics",
    description:
      "Computer Vision for Industrial Inspection",
    // advisor: "Peter Wang",
    // companyUrl: "https://deepmind.com",
  },
  // {
  //   date: "Summer 2018",
  //   title: "Software Engineer Intern",
  //   company: "Cerner",
  //   // description:
  //     // "Computer Vision for Industrial Inspection",
  //   // advisor: "Peter Wang",
  //   // companyUrl: "https://deepmind.com",
  // },
];
