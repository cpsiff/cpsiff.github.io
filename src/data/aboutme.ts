export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  resumeUrl?: string;
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
  `I am a Computer Science PhD student at University of Wisconsin - Madison,
  advised by <a href=https://gleicher.sites.cs.wisc.edu/>Michael Gleicher</a> and
  <a href=https://wisionlab.com/people/mohit-gupta/>Mohit Gupta</a>. My research utilizes
  low-level techniques from computational imaging to improve machine perception
  in resource-constrained settings. <br> <br>
  I'm proud of the videos I've made communicating my research,
  which have graciously been picked up by the YouTube algorithm.
  You can check them out <a href="https://youtu.be/vJdfpmd6OE0?si=__uS_1874i1nkKaM">here</a>,
  <a href="https://youtu.be/4m9GzPTr8y4?si=gW6ku43Z9g0sGfJd">here</a>,
  and <a href="https://youtu.be/p6G4_JU5y2k">here</a>.
  <br> <br>
  <div style="background-color: #f0f9f0; padding: 16px; border-radius: 8px; margin: 8px 0;">
  I will be graduating shortly and am seeking a full-time
  <strong> applied scientist</strong>, <strong>research scientist</strong>,
  or <strong>engineering</strong> role. I am most interested in solving important problems
  in computer vision, imaging, and robotics, and am open to exploring new areas if
  the mission is right. See <a href="/Carter Sifferman Resume.pdf"/>my resume</a> and <a href="mailto:sifferman@wisc.edu">send me an email</a> to connect.
  </div>`,
  email: "sifferman@wisc.edu",
  imageUrl:
    "/CarterSifferman.jpg",
  githubUsername: "cpsiff",
  linkedinUsername: "cpsiff",
  twitterUsername: "cartsiff",
  blueskyUsername: "cartsiff.bsky.social",
  googleScholarUrl: "https://scholar.google.com/citations?user=tiajEPoAAAAJ&hl=en",
  resumeUrl: "/Carter Sifferman Resume.pdf",
  institutionUrl: "https://www.cs.wisc.edu/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
