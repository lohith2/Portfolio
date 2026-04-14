export const profile = {
  name: "Lohith Reddy Kondreddy",
  role: "AI Software Engineer building applied AI systems, agentic RAG products, and full-stack platforms.",
  shortName: "Lohith",
  location: "San Jose, CA, USA",
  phone: "+1 (669) 263-5786",
  email: "lohitreddygms123@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lohithrkondreddy/",
    },
    {
      label: "GitHub",
      href: "https://github.com/lohith2",
    },
  ],
  highlights: [
    "I build production GenAI systems with LangGraph, OpenAI APIs, Bedrock, and FastAPI",
    "I ship full-stack platforms across React, TypeScript, Node.js, Python, and cloud services",
    "I improve reliability with observability, evaluation pipelines, and audit-ready architecture",
  ],
};

export const hero = {
  labels: ["AI Software Engineer", "Generative AI Engineer", "Full-Stack Builder"],
  quote:
    '" I build AI systems that are practical, observable, and ready for production."',
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const quickFacts = [
  { value: "4+", label: "Years Experience" },
  { value: "7", label: "Flagship AI / ML Projects" },
];

export const homeCards = [
  {
    label: "About",
    title: "Applied AI, agentic systems, and strong engineering foundations",
    copy: "See my education, technical strengths, AI systems focus, and the stack behind how I build.",
    href: "/about",
  },
  {
    label: "Experience",
    title: "Look at the experience timeline",
    copy: "See the company timeline, role names, and duration at a glance.",
    href: "/experience",
  },
  {
    label: "Projects",
    title: "Agentic AI projects with real technical depth",
    copy: "Review autonomous incident response, PA appeal evidence retrieval, and financial intelligence systems.",
    href: "/projects",
  },
];

export const aboutDetails = {
  summary:
    "My background combines graduate-level software engineering with hands-on product building across applied AI systems, GenAI workflows, cloud-native platforms, and full-stack execution.",
  sections: [
    {
      label: "Education",
      title: "San Jose State University",
      copy: "Master of Science in Software Engineering, Aug 2022 to May 2024, San Jose, California.",
    },
    {
      label: "Specialty",
      title: "Agentic AI and RAG systems",
      copy: "Hands-on delivery across LangGraph, LangChain, MCP, FAISS, Pinecone, OpenSearch, vector search, prompt engineering, and fine-tuning.",
    },
    {
      label: "Strength",
      title: "Production-ready AI engineering",
      copy: "Strong focus on deployment, observability, evaluation, audit logging, and AI systems that hold up beyond a demo environment.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C/C++"],
  },
  {
    title: "AI and GenAI",
    items: [
      "RAG",
      "LangGraph",
      "LangChain",
      "Multi-Agent Systems",
      "MCP",
      "Prompt Engineering",
      "PEFT and QLoRA",
      "Hugging Face Transformers",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
    ],
  },
  {
    title: "LLMs and Vector Search",
    items: [
      "FAISS",
      "Pinecone",
      "OpenSearch",
      "Qdrant",
      "BM25",
      "Voyage AI",
      "OpenAI APIs",
      "Google Gemini",
    ],
  },
  {
    title: "Web and Backend",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "React.js",
      "Angular",
      "REST APIs",
      "GraphQL",
      "Pydantic",
      "Spring Boot",
    ],
  },
  {
    title: "Cloud and DevOps",
    items: [
      "AWS EC2",
      "S3",
      "Lambda",
      "ECS",
      "RDS",
      "API Gateway",
      "MSK",
      "CloudWatch",
      "Bedrock",
      "Azure OpenAI",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    title: "Observability and Tooling",
    items: [
      "OpenTelemetry",
      "Grafana",
      "MLflow",
      "Weights and Biases",
      "LangSmith",
      "Cursor",
      "Claude",
      "VSCode",
      "Postman",
      "Jupyter",
      "Git",
      "JIRA",
    ],
  },
];

export const experience = [
  {
    company: "Springhill Medical Group",
    role: "AI Software Engineer",
    period: "Jul 2024 - Present",
    location: "United States",
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer Intern",
    period: "May 2023 - Aug 2023",
    location: "United States",
  },
  {
    company: "LTI Mindtree",
    role: "Software Engineer (Machine Learning)",
    period: "Aug 2020 - Aug 2022",
    location: "India",
  },
];

export const projects = [
  {
    tag: "Autonomous AI Operations",
    title: "Incident Response MCP System",
    description:
      "An autonomous incident investigation platform built with a TypeScript MCP server, Python, LangGraph, AWS Bedrock, Pinecone, and React for incident analysis and postmortem generation.",
    outcome:
      "Eliminated manual incident investigation across 85 plus incidents and 140 plus failure patterns through a 19-tool MCP system and self-improving multi-model RAG pipeline.",
    stack: ["TypeScript", "Python", "LangGraph", "AWS Bedrock", "Pinecone", "React"],
    href: "https://github.com/lohith2/Incident-Response-MCP",
  },
  {
    tag: "Applied AI",
    title: "PA Appeal Evidence Assistant",
    description:
      "An agentic RAG product using Google Gemini 2.5, Voyage AI embeddings, Redis semantic caching, Supabase PostgreSQL, and a React interface for evidence retrieval workflows.",
    outcome:
      "Demonstrated practical retrieval orchestration, caching, structured evidence assembly, and a strong AI product workflow.",
    stack: ["Voyage AI", "Supabase", "Redis", "FastAPI", "Google Gemini", "React"],
    href: "https://github.com/lohith2/PA-Evidence-Assistant",
  },
  {
    tag: "Financial Intelligence",
    title: "Financial Earnings Intelligence Agent",
    description:
      "A multi-agent LangGraph system fine-tuned on Mistral-7B with QLoRA, streaming live financial insights through Redis pub/sub into a React and Recharts dashboard.",
    outcome:
      "Delivered real-time market research and risk assessment insights through a fine-tuned multi-agent financial intelligence workflow.",
    stack: ["Mistral-7B", "QLoRA", "Redis", "LangGraph", "React", "Recharts"],
    href: "https://github.com/lohith2/Financial-Earnings-Intelligence",
  },
  {
    tag: "Research AI",
    title: "Intelligent Research Architect",
    description:
      "An AI-powered research assistant for literature review, paper discovery, and document-aware research workflows built with FastAPI, LangGraph, Gemini, and Chroma.",
    outcome:
      "Searches academic sources, supports PDF, text, and image uploads, maintains per-chat memory, streams source-backed answers, and exports results as Markdown and BibTeX.",
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Google Gemini",
      "Chroma",
      "Tavily",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    href: "https://github.com/lohith2/Intelligent-Research-Architect",
  },
  {
    tag: "Document AI",
    title: "DOCUAI",
    description:
      "A serverless document question-answering system built with AWS Lambda, Amazon Textract, and AWS Bedrock using Llama 3 70B Instruct.",
    outcome:
      "Extracts text from uploaded PDFs or images, answers custom questions about the document, and uses API Gateway, IAM, and S3 for secure serverless deployment.",
    stack: ["Python", "AWS Lambda", "Amazon Textract", "AWS Bedrock", "API Gateway", "S3", "IAM"],
    href: "https://github.com/lohith2/DOCUAI",
  },
  {
    tag: "Computer Vision",
    title: "Sign Language Recognition",
    description:
      "A real-time sign language recognition system built with convolutional neural networks and OpenCV for gesture translation from webcam input.",
    outcome:
      "Recognizes sign gestures in real time using a custom CNN model trained on the Sign Language MNIST and ASL dataset for intuitive communication assistance.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "NumPy"],
    href: "https://github.com/lohith2/Sign-Language-Recognition-",
  },
  {
    tag: "Face Recognition",
    title: "Smart Attendance",
    description:
      "A computer vision-based smart attendance system that uses facial recognition to automatically mark attendance in real time.",
    outcome:
      "Trains custom face datasets for identification and automates attendance logging for classrooms, offices, and events using OpenCV and Python.",
    stack: ["Python", "OpenCV", "face_recognition", "NumPy", "Pandas"],
    href: "https://github.com/lohith2/Smart-attendence",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "lohitreddygms123@gmail.com",
    href: "mailto:lohitreddygms123@gmail.com",
  },
  {
    label: "Phone",
    value: "+1 (669) 263-5786",
    href: "tel:+16692635786",
  },
  {
    label: "GitHub",
    value: "github.com/lohith2",
    href: "https://github.com/lohith2",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lohithrkondreddy",
    href: "https://www.linkedin.com/in/lohithrkondreddy/",
  },
  {
    label: "Location",
    value: "San Jose, CA, USA",
    href: "https://maps.google.com/?q=San+Jose,+CA",
  },
];

export const chatbotPrompts = [
  "What are your top technical skills?",
  "What projects should I review first?",
  "How can I contact him?",
  "Where did he study?",
];

export const knowledgeBase = [
  {
    keywords: ["who", "background", "introduce", "about", "developer", "engineer", "lohith"],
    answer:
      "I am an AI Software Engineer based in San Jose, California. I have an MS in Software Engineering from San Jose State University and focus on applied AI systems, agentic RAG, cloud-native engineering, and full-stack product building.",
  },
  {
    keywords: ["skills", "stack", "technologies", "tools", "technical", "languages"],
    answer:
      "My strongest technical areas include Python, Java, TypeScript, JavaScript, LangGraph, LangChain, RAG, MCP, Pinecone, OpenSearch, FastAPI, Node.js, React, Spring Boot, PostgreSQL, Redis, AWS, Azure OpenAI, Docker, Kubernetes, OpenTelemetry, Grafana, and evaluation tooling like LangSmith and MLflow.",
  },
  {
    keywords: ["experience", "timeline", "companies", "worked", "roles"],
    answer:
      "My experience page is intentionally simple and timeline-based. It highlights the companies, role names, and duration so viewers can scan the progression quickly.",
  },
  {
    keywords: ["projects", "project", "portfolio", "github"],
    answer:
      "My projects section now highlights seven projects: Incident Response MCP System, PA Appeal Evidence Assistant, Financial Earnings Intelligence Agent, Intelligent Research Architect, DOCUAI, Sign Language Recognition, and Smart Attendance. Together they show agent orchestration, document AI, research workflows, computer vision, and full-stack product engineering.",
  },
  {
    keywords: ["incident", "mcp", "response"],
    answer:
      "The Incident Response MCP System is an autonomous AI investigation platform built with a TypeScript MCP server, 19 tools, Python, LangGraph, AWS Bedrock, Pinecone, and React. It was designed to eliminate manual incident investigation across more than 85 incidents and 140 failure patterns.",
  },
  {
    keywords: ["appeal", "evidence", "prior authorization", "pa"],
    answer:
      "The PA Appeal Evidence Assistant is an applied AI evidence retrieval product built with Google Gemini 2.5, Voyage AI embeddings, Redis semantic caching, Supabase PostgreSQL, FastAPI, and React. It shows strong orchestration, retrieval, and product thinking.",
  },
  {
    keywords: ["financial", "earnings", "mistral", "qlora"],
    answer:
      "The Financial Earnings Intelligence Agent is a multi-agent LangGraph system fine-tuned on Mistral-7B with QLoRA. It streams live financial intelligence through Redis pub/sub into a React and Recharts dashboard for market research and risk assessment.",
  },
  {
    keywords: ["research", "architect", "papers", "literature", "scholarly"],
    answer:
      "Intelligent Research Architect is an AI-powered research assistant for literature review, paper discovery, and document-aware workflows. It uses FastAPI, LangGraph, Gemini, and Chroma, and supports uploads, chat memory, streaming answers, and Markdown and BibTeX exports.",
  },
  {
    keywords: ["docuai", "document", "textract", "bedrock", "lambda"],
    answer:
      "DOCUAI is a serverless document question-answering system built with AWS Lambda, Amazon Textract, and AWS Bedrock. It extracts text from PDFs or images, answers custom questions, and uses API Gateway, IAM, and S3 for deployment and secure access.",
  },
  {
    keywords: ["sign language", "gesture", "cnn", "opencv", "asl"],
    answer:
      "Sign Language Recognition is a real-time gesture translation system built with CNNs and OpenCV. It uses webcam input and a custom model trained on the Sign Language MNIST and ASL dataset.",
  },
  {
    keywords: ["attendance", "face recognition", "smart attendance", "facial"],
    answer:
      "Smart Attendance is a facial-recognition-based attendance system built with Python, OpenCV, face_recognition, NumPy, and Pandas. It identifies faces in real time and automates attendance logging.",
  },
  {
    keywords: ["education", "study", "university", "masters", "master", "sjsu"],
    answer:
      "I earned a Master of Science in Software Engineering from San Jose State University, graduating in May 2024.",
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire"],
    answer:
      "You can reach me at lohitreddygms123@gmail.com or +1 (669) 263-5786. My GitHub is github.com/lohith2, my LinkedIn is linkedin.com/in/lohithrkondreddy, and I am based in San Jose, California.",
  },
];
