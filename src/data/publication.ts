export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  projectPageUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "RA-L, In Proc. ICRA",
    title: "Using a Distance Sensor to Detect Deviations in a Planar Surface",
    authors: "Carter Sifferman, William Sun, Mohit Gupta, Michael Gleicher",
    paperUrl: "https://arxiv.org/pdf/2408.03838",
    projectPageUrl: "/papers/using_a_distance_sensor/index.html",
    bibtex: "bib/Sifferman2024.bib",
    tldr: "We detect deviations in a planar surface over a wide field-of-view using an off-the-shelf proximity sensor.",
    imageUrl: "/images/using_a_distance_sensor_before.png"
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "Towards 3D Vision with Low-Cost Single-Photon Cameras",
    authors: "Fangzhou Mu*, Carter Sifferman*, Sacha Jungerman, Yiquan Li, Mark Han, Michael Gleicher, Mohit Gupta, Yin Li",
    paperUrl: "https://arxiv.org/pdf/2403.17801.pdf",
    projectPageUrl: "/papers/towards_3d_vision/index.html",
    bibtex: "bib/Mu2024.bib",
    tldr: "We reconstruct 3D geometry from measurements of a miniature proximity sensor.",
    imageUrl: "/images/towards_3d_before.png"
  },
  {
    year: "2024",
    conference: "ICRA",
    title: "IKLink: End-Effector Trajectory Tracking with Minimal Reconfigurations",
    authors: "Yeping Wang, Carter Sifferman, Michael Gleicher",
    paperUrl: "https://arxiv.org/pdf/2402.16154.pdf",
    bibtex: "bin/Wang2024.bib",
    tldr: "A method for tracking end effector trajectories while taking minimal breaks to reconfigure the arm position..",
    imageUrl: "/images/iklink_before.jpg"
  },
  {
    year: "2023",
    conference: "RA-L, In Proc. ICRA",
    title: "Unlocking the Performance of Proximity Sensors by Utilizing Transient Histograms",
    authors: "Carter Sifferman, Yeping Wang, Mohit Gupta, Michael Gleicher",
    paperUrl: "https://arxiv.org/pdf/2308.13473.pdf",
    projectPageUrl: "/papers/unlocking_proximity_sensors/index.html",
    bibtex: "bin/Sifferman2023.bib",
    tldr: "Directly utilizing low-level information generated by optical time-of-flight sensors allows recovery of planar geometry and albedo from a single sensor measurement.",
    imageUrl: "/images/unlock_prox_before.png"
  },
  {
    year: "2023",
    conference: "IROS",
    title: "Exploiting Task Tolerances in Mimicry-based Telemanipulation",
    authors: "Yeping Wang, Carter Sifferman, Michael Gleicher",
    paperUrl: "https://arxiv.org/pdf/2307.15839",
    bibtex: "bin/Wang2023.bib",
    tldr: "Allowing a robot to move freely in non task-relevant degrees of freedom improves the telemanipulation experience.",
    imageUrl: "/images/rangedik_before.png"
  },
  {
    year: "2022",
    conference: "RA-L, in Proc. IROS",
    title: "Geometric Calibration of Single Pixel Distance Sensors",
    authors: "Carter Sifferman, Dev Mehrotra, Mohit Gupta, Michael Gleicher",
    paperUrl: "/pdf/Sifferman2022.pdf",
    projectPageUrl: "/papers/geometric-calibration/index.html",
    bibtex: "bin/Sifferman2022.bib",
    tldr: "A depth sensor attached to a robot arm can be extrinsically calibrated relative to that robot arm using only an unknown planar surface.",
    imageUrl: "/images/calibration_before.png"
  },
  {
    year: "2019",
    conference: "Bioinformatics and Biomedicine (BIBM)",
    title: "Depth Sensor-Based In-Home Daily Activity Recognition and Assessment System for Stroke Rehabilitation",
    authors: "Zoë Moore*, Carter Sifferman*, Shaniah Tullis*, Mengxuan Ma, Rachel Proffitt, Marjorie Skubic",
    paperUrl: "/pdf/Moore2019.pdf",
    bibtex: "bin/Moore2019.bib",
    tldr: "A system for automatic assessment of stroke patient recovery (e.g. range of motion), using an in-home depth camera.",
    imageUrl: "/images/rehab_before.png"
  },
];
