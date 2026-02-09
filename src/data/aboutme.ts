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
  // title: "Computer Scientist",
  // institution: "University of Wisconsin - Madison",
  // Note that links work in the description
  description:  
  `I am currently a Machine Learning Engineer at <a href=https://www.bluerivertechnology.com/>
  Blue River Technology</a>, working on autonomy for agriculture. Previously, I completed my PhD
  at the University of Wisconsin - Madison, advised by
  <a href=https://gleicher.sites.cs.wisc.edu/>Michael Gleicher</a> and
  <a href=https://wisionlab.com/people/mohit-gupta/>Mohit Gupta</a>, where I worked on computer 
  vision for robotics, particularly with miniature LiDAR sensors. <br><br>
  I'm proud of the videos I've made communicating my PhD research,
  which have graciously been picked up by the YouTube algorithm.
  You can check them out <a href="https://youtu.be/vJdfpmd6OE0?si=__uS_1874i1nkKaM">here</a>,
  <a href="https://youtu.be/4m9GzPTr8y4?si=gW6ku43Z9g0sGfJd">here</a>,
  and <a href="https://youtu.be/p6G4_JU5y2k">here</a>.`,
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
