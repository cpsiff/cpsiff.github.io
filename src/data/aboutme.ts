export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  blueskyUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Carter Sifferman",
  title: "Ph.D. Candidate",
  institution: "University of Wisconsin - Madison",
  // Note that links work in the description
  description:
    "I am a Computer Science PhD student at University of Wisconsin - Madison, advised by <a href=https://gleicher.sites.cs.wisc.edu/>Michael Gleicher</a> and <a href=https://wisionlab.com/people/mohit-gupta/>Mohit Gupta</a>.<br> <br> My research utilizes low-level techniques from computational imaging to improve robot perception. I am most interested in time-of-flight proximity sensors for up-close and distributed robot sensing. ",
  email: "sifferman@wisc.edu",
  imageUrl:
    "/CarterSifferman.jpg",
  githubUsername: "cpsiff",
  linkedinUsername: "cpsiff",
  twitterUsername: "cartsiff",
  blueskyUsername: "cartsiff.bsky.social",
  googleScholarUrl: "https://scholar.google.com/citations?user=tiajEPoAAAAJ&hl=en",
  cvUrl: "/Carter_Sifferman_CV.pdf",
  institutionUrl: "https://www.cs.wisc.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
