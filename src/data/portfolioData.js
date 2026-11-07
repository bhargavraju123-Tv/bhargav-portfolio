// ============================================================
// PORTFOLIO DATA — T.V. BHARGAV RAJU
// ============================================================

export const personalInfo = {
  name: "T.V. BHARGAV RAJU",
  firstName: "BHARGAV",
  lastName: "RAJU",
  role: "Computer Science Engineering Student",
  taglines: [
    "Java Backend Developer",
    "Cloud Enthusiast",
    "Networking Explorer",
    "CS Engineering Student",
    "Spring Boot Developer",
  ],
  bio: "I am a Computer Science Engineering student interested in Java backend development, cloud computing and networking. I enjoy building practical applications, exploring modern technologies and developing solutions that connect software, cloud infrastructure and intelligent systems.",
  email: "Bhargavraju015@gmail.com",
  // Phone is intentionally masked for privacy — do NOT store the full number here
  phone: "+91 8686XXXXXX",
  linkedin: "https://linkedin.com/in/bhargav-raju-2731a0317",
  // GitHub URL — set to null to hide link until a valid public profile URL is confirmed
  // Update this value once you confirm the correct public GitHub username
  github: null,
  resumePath: "/resume.pdf", // Masked resume PDF placed in public/resume.pdf
};

export const education = [
  {
    id: 1,
    degree: "B.E. Computer Science and Engineering",
    institution: "Sathyabama Institute of Science and Technology",
    period: "2023 – 2027",
    score: "CGPA: 8.65",
    scoreType: "cgpa",
    icon: "mortarboard-fill",
    current: true,
  },
  {
    id: 2,
    degree: "Intermediate Education",
    institution: "Narayana Junior College",
    period: "2021 – 2023",
    score: "84%",
    scoreType: "percentage",
    icon: "book-fill",
    current: false,
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Keshava Reddy School",
    period: "2021",
    score: "99.6%",
    scoreType: "percentage",
    icon: "award-fill",
    current: false,
  },
];

export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    icon: "code-slash",
    skills: ["Java"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "layout-text-window-reverse",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    skills: ["Spring Boot"],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: "cloud-fill",
    skills: ["AWS IAM", "AWS EC2", "AWS S3"],
  },
  {
    id: "networking",
    label: "Networking",
    icon: "diagram-3-fill",
    skills: ["TCP/IP", "Routing", "Switching", "VLANs", "Subnetting", "Cisco Packet Tracer"],
    note: "Practised through virtual network simulations using Cisco Packet Tracer.",
  },
  {
    id: "databases",
    label: "Databases & AI Tools",
    icon: "database-fill",
    skills: ["MySQL", "Qdrant", "LangChain4j", "Ollama", "Apache PDFBox"],
    note: "Some technologies are part of an ongoing project stack.",
  },
  {
    id: "tools",
    label: "Tools",
    icon: "tools",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "MySQL Workbench", "VS Code"],
  },
  {
    id: "os",
    label: "Operating Systems",
    icon: "terminal-fill",
    skills: ["Linux (Basic)"],
  },
];

export const marqueeItems = [
  "Java", "Spring Boot", "React.js", "AWS EC2", "AWS S3",
  "MySQL", "Git", "Cisco Packet Tracer", "Qdrant", "Bootstrap",
  "LangChain4j", "Ollama", "TCP/IP", "GitHub", "HTML",
];

export const projects = [
  {
    id: 1,
    title: "Cloud-Based Smart Document Organizer",
    subtitle: "Semantic Search & Document Summarization",
    status: "Developing",
    statusColor: "warning",
    description:
      "Developing an intelligent document management platform that enables users to upload, organize, search and interact with PDF documents. Integrates semantic search, vector-based document retrieval and AI-powered summarization to improve document discovery and information access.",
    longDescription:
      "This platform is built to solve the challenge of finding relevant information across large collections of PDF documents. By combining Spring Boot on the backend with Qdrant for vector-based semantic search and Ollama for local AI-powered summarization, documents can be queried in natural language rather than by exact keywords.\n\nAWS deployment (EC2, S3, RDS) is planned as the next phase of the project.",
    technologies: ["React.js", "Bootstrap", "Java", "Spring Boot", "MySQL", "Qdrant", "LangChain4j", "Ollama", "Apache PDFBox"],
    cloudTech: ["AWS EC2 (Planned)", "AWS S3 (Planned)", "AWS RDS (Planned)"],
    image: null,
    liveUrl: "https://bhargavraju123-tv.github.io/semantic_cloudProject/",
    githubUrl: null,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    id: 2,
    title: "Bank Account Simulation",
    subtitle: "Web-Based Banking Interface",
    status: null,
    description:
      "Created a web-based banking simulation for basic account operations such as account creation, deposits, withdrawals and balance checking using browser Local Storage. Focused on responsive UI and transaction updates to simulate basic banking operations.",
    longDescription:
      "A client-side banking simulation that demonstrates frontend development skills using HTML, CSS and JavaScript. All transaction data is persisted using the browser's Local Storage API, enabling a persistent session without any backend infrastructure.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    cloudTech: [],
    image: "/images/projects/bank-account-simulation.png",
    liveUrl: null,
    githubUrl: null,
    gradient: "linear-gradient(135deg, #0d1b0d 0%, #0a1f0a 50%, #0d2b0d 100%)",
  },
  {
    id: 3,
    title: "School Network Infrastructure Design",
    subtitle: "Cisco Packet Tracer Simulation",
    status: null,
    description:
      "Designed and simulated a multi-building campus network using Cisco Packet Tracer. Practised network topology design, IP addressing, subnetting and router and switch configuration through virtual network simulations.",
    longDescription:
      "This project demonstrates applied networking knowledge through a comprehensive campus network simulation. The topology includes a cloud email server, main campus router, Layer 3 switch and multiple departmental network segments — all configured and tested virtually.\n\nThis is a virtual simulation exercise, not a physical network installation.",
    technologies: ["Cisco Packet Tracer", "TCP/IP", "Subnetting", "VLANs", "Routing", "Switching"],
    cloudTech: [],
    image: "/images/projects/campus-network-topology.png",
    liveUrl: null,
    githubUrl: null,
    gradient: "linear-gradient(135deg, #1a0d1a 0%, #1f0a1a 50%, #2b0d1a 100%)",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Java Certified Foundations Associate",
    issuer: "Oracle University",
    issuerShort: "Oracle",
    date: "June 22, 2026",
    credentialId: "103207411JAVA8OJA",
    pdfPath: "/certificates/oracle-java-foundations-associate.pdf",
    icon: "patch-check-fill",
    color: "#F80000",
    bgColor: "#1a0d0d",
  },
  {
    id: 2,
    title: "Exploring Networking with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy via Sathyabama Institute of Science and Technology",
    issuerShort: "Cisco",
    date: "August 25, 2025",
    credentialId: null,
    pdfPath: "/certificates/cisco-exploring-networking-packet-tracer.pdf",
    icon: "patch-check-fill",
    color: "#1BA0D7",
    bgColor: "#0d141a",
  },
  {
    id: 3,
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy via Sathyabama Institute of Science and Technology",
    issuerShort: "Cisco",
    date: "August 25, 2025",
    credentialId: null,
    pdfPath: "/certificates/cisco-getting-started-packet-tracer.pdf",
    icon: "patch-check-fill",
    color: "#1BA0D7",
    bgColor: "#0d141a",
  },
];

export const internship = {
  title: "CCNA Virtual Internship",
  organization: "Cisco",
  type: "Virtual Internship",
  year: "2025",
  description:
    "Completed a Cisco virtual internship focused on networking fundamentals and CCNA-related learning. Gained exposure to network configuration, IP addressing and routing concepts through structured learning modules.",
  skills: ["Networking Fundamentals", "IP Addressing", "Routing Concepts", "CCNA Knowledge"],
  icon: "diagram-3-fill",
};

export const interests = [
  { label: "Backend Web Development", icon: "server" },
  { label: "Cloud Computing", icon: "cloud-fill" },
  { label: "Networking Infrastructure", icon: "diagram-3-fill" },
  { label: "CodeChef Weekly Contests", icon: "trophy-fill" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
