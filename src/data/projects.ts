export interface Project {
  id: string;
  title: string;
  domain: string;
  duration: string;
  techStack: string[];
  description: string;
  highlights: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ieee-paper-review',
    title: 'IEEE Paper Review Bot',
    domain: 'IEEE AI Tech',
    duration: 'Nov 2025 - Present',
    techStack: ['LLM Prompt Engineering', 'Hugging Face', 'FastAPI', 'Python', 'OCR'],
    description: 'Built and optimized an AI-driven IEEE Paper review bot using LLMs and rule-based validations to automate document analysis.',
    highlights: [
      'Debugged and improved quality and validation modules, reducing false positives for domain-specific phrases',
      'Worked with FastAPI backend, updating services, validators, and response structures',
    ],
    featured: true,
  },
  {
    id: 'agentic-ai-platform',
    title: 'Enterprise Agentic AI Platform',
    domain: 'Enterprise Automation',
    duration: 'Jul 2025 - Oct 2025',
    techStack: ['LangChain', 'Azure OpenAI', 'Gemini Pro', 'Prompt Engineering', 'Python'],
    description: 'Designed and deployed an enterprise-grade Agentic AI platform to automate RFP analysis and proposal generation using multi-agent orchestration.',
    highlights: [
      'Built multi-agent Agentic AI system for end-to-end RFP analysis and generation',
      'Integrated Gemini Pro and Azure OpenAI with schema-enforced outputs',
      'Implemented CI/CD pipelines for deployment and version control',
      'Ensured FAR-compliant prompt engineering and secure data handling',
    ],
    featured: true,
  },
  {
    id: 'legal-rag-system',
    title: 'Legal Document RAG System',
    domain: 'Legal Tech',
    duration: 'Feb 2025 - Jul 2025',
    techStack: ['LangChain', 'FAISS', 'FastAPI', 'Python', 'Hybrid Search'],
    description: 'Developed an enterprise Retrieval-Augmented Generation system enabling legal professionals to query large document repositories using natural language.',
    highlights: [
      'Implemented LangChain-based RAG pipeline for semantic search and QA',
      'Enhanced retrieval quality using hybrid search and re-ranking techniques',
      'Integrated FAISS vector database for efficient embedding search',
      'Managed document ingestion and preprocessing using PyPDF2 and Hugging Face models',
    ],
    featured: true,
  },
  {
    id: 'mental-wellness-ai',
    title: 'AI Mental Wellness Assistant',
    domain: 'Healthcare',
    duration: 'Sept 2024 - Feb 2025',
    techStack: ['BERT', 'Hugging Face', 'FastAPI', 'REST APIs', 'Python'],
    description: 'Built an AI-powered mental wellness assistant for real-time emotion detection and personalized support, ensuring compliance with healthcare privacy standards.',
    highlights: [
      'Gathered requirements and performed data preprocessing for emotion classification',
      'Fine-tuned BERT model using Hugging Face for real-time sentiment analysis',
      'Developed FastAPI backend with encrypted data flow for secure predictions',
      'Integrated REST APIs for seamless communication with front-end applications',
    ],
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance System',
    domain: 'Industrial IoT',
    duration: 'Apr 2024 - Aug 2024',
    techStack: ['LSTM', 'TensorFlow', 'PyTorch', 'SageMaker', 'FastAPI', 'Docker', 'Streamlit'],
    description: 'Designed an intelligent predictive maintenance system to forecast equipment failures using real-time sensor data, reducing downtime and optimizing operational efficiency.',
    highlights: [
      'Developed Bidirectional LSTM model for failure prediction with 82% precision',
      'Engineered features and performed sequence modeling for time-series data',
      'Built Streamlit dashboard for real-time monitoring and alerting',
      'Containerized application using Docker for scalable deployment',
    ],
  },
  {
    id: 'precision-agriculture',
    title: 'Precision Agriculture ML System',
    domain: 'Agritech',
    duration: 'Jan 2024 - Mar 2024',
    techStack: ['Random Forest', 'XGBoost', 'OpenCV', 'Python', 'Feature Engineering'],
    description: 'Implemented ML solutions for precision agriculture to optimize irrigation and crop health monitoring using computer vision and anomaly detection.',
    highlights: [
      'Designed ML models (Random Forest, XGBoost) achieving 97% accuracy for crop yield prediction',
      'Built anomaly detection system using OpenCV and YOLO for real-time crop monitoring',
    ],
  },
];
