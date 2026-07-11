export interface Project {
  slug: string
  title: string
  desc: string
  longDesc: string
  tags: string[]
  link: string | null
  features: string[]
  techStack: { category: string; items: string[] }[]
  highlights: string[]
  year: string
  role: string
}

export const projects: Project[] = [
  {
    slug: 'conversational-chatbot',
    title: 'Conversational Chatbot',
    desc: 'A task-automation chatbot with persistent state management, maintaining continuous context across multi-turn conversations.',
    longDesc:
      'A Flutter-based conversational chatbot application designed for task automation with robust state management. The chatbot maintains context across multiple conversation turns, enabling natural and coherent interactions. Built with a focus on user experience and reliable performance.',
    tags: ['Flutter', 'Dart', 'NLP', 'State Management'],
    link: 'https://github.com/sherazi7862/chatbot-Flutter-app',
    features: [
      'Persistent conversation state across sessions',
      'Multi-turn context awareness',
      'Task automation capabilities',
      'Clean, intuitive chat interface',
      'Responsive design for mobile devices',
    ],
    techStack: [
      { category: 'Frontend', items: ['Flutter', 'Dart'] },
      { category: 'State Management', items: ['Provider / Riverpod'] },
      { category: 'Backend', items: ['REST API Integration'] },
    ],
    highlights: [
      'Maintains context across multiple conversation turns',
      'Clean architecture with separation of concerns',
      'Optimized for mobile performance',
    ],
    year: '2024',
    role: 'Solo Developer',
  },
  {
    slug: 'emotion-detection-app',
    title: 'Emotion Detection App',
    desc: 'On-device emotion classifier achieving 85% accuracy, using a custom TensorFlow Lite model trained via Teachable Machine.',
    longDesc:
      'A mobile application that performs real-time emotion recognition using the device camera. The custom TensorFlow Lite model was trained using Google\'s Teachable Machine and optimized for on-device inference, achieving 85% accuracy while maintaining privacy — no data leaves the device.',
    tags: ['TensorFlow Lite', 'Computer Vision', 'Teachable Machine', 'Flutter'],
    link: null,
    features: [
      'Real-time emotion classification from camera feed',
      'On-device inference — no cloud dependency',
      '85% classification accuracy',
      'Privacy-first: all processing stays on device',
      'Optimized model for mobile performance',
    ],
    techStack: [
      { category: 'Model Training', items: ['Teachable Machine', 'TensorFlow'] },
      { category: 'Mobile Inference', items: ['TensorFlow Lite'] },
      { category: 'Frontend', items: ['Flutter', 'Camera API'] },
    ],
    highlights: [
      'Achieved 85% accuracy with a lightweight model',
      'Fully on-device — no internet required',
      'Custom dataset collection and preprocessing',
    ],
    year: '2024',
    role: 'Solo Developer',
  },
  {
    slug: 'realtime-messenger-app',
    title: 'Realtime Messenger App',
    desc: 'A Firebase-backed messaging app built and tested for a small group of users, covering auth and secure message sync.',
    longDesc:
      'A real-time messaging application built with Flutter and Firebase, supporting user authentication, real-time message synchronization, and a clean chat interface. Tested with a small group of users to ensure reliability and performance.',
    tags: ['Firebase', 'Flutter', 'Realtime DB', 'Authentication'],
    link: null,
    features: [
      'Real-time message delivery via Firebase',
      'User authentication (email/password)',
      'Message history and synchronization',
      'Typing indicators and read receipts',
      'Secure data storage with Firestore rules',
    ],
    techStack: [
      { category: 'Frontend', items: ['Flutter', 'Dart'] },
      { category: 'Backend', items: ['Firebase Authentication', 'Cloud Firestore'] },
      { category: 'Realtime', items: ['Firebase Realtime Database'] },
    ],
    highlights: [
      'Tested with real users for reliability',
      'End-to-end message synchronization',
      'Secure authentication flow',
    ],
    year: '2024',
    role: 'Solo Developer',
  },
  {
    slug: 'car-price-prediction',
    title: 'Car Price Prediction Model',
    desc: 'A regression model served through a Flask API with a lightweight HTML/CSS front end for live price predictions.',
    longDesc:
      'A machine learning regression model that predicts car prices based on various features such as make, model, year, mileage, and condition. The model is served through a Flask REST API with a lightweight HTML/CSS frontend for live demonstrations.',
    tags: ['Flask', 'Python', 'ML Regression', 'Scikit-learn'],
    link: null,
    features: [
      'Regression model for price prediction',
      'Flask REST API for model serving',
      'Lightweight HTML/CSS frontend',
      'Feature engineering and preprocessing pipeline',
      'Model evaluation with R² and MAE metrics',
    ],
    techStack: [
      { category: 'Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy'] },
      { category: 'Backend', items: ['Flask', 'Python'] },
      { category: 'Frontend', items: ['HTML', 'CSS'] },
    ],
    highlights: [
      'End-to-end ML pipeline from data to deployment',
      'Served via REST API for easy integration',
      'Feature engineering improved prediction accuracy',
    ],
    year: '2024',
    role: 'Solo Developer',
  },
  {
    slug: 'developershub-aiml-internship',
    title: 'DevelopersHub AI/ML Internship',
    desc: 'Internship notebooks covering applied machine learning workflows — data prep, model training, and evaluation.',
    longDesc:
      'A collection of Jupyter notebooks completed during the DevelopersHub AI/ML internship program. Covers the complete machine learning workflow including data preprocessing, exploratory data analysis, model training, hyperparameter tuning, and evaluation.',
    tags: ['Jupyter', 'Machine Learning', 'Python', 'Data Science'],
    link: 'https://github.com/sherazi7862/DevelopersHub-AIML-Internship',
    features: [
      'Complete ML workflow notebooks',
      'Data preprocessing and cleaning',
      'Exploratory data analysis (EDA)',
      'Model training and hyperparameter tuning',
      'Performance evaluation and visualization',
    ],
    techStack: [
      { category: 'Languages', items: ['Python'] },
      { category: 'Libraries', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'] },
      { category: 'Environment', items: ['Jupyter Notebook'] },
    ],
    highlights: [
      'Industry internship experience',
      'Practical ML workflow implementation',
      'Comprehensive documentation and analysis',
    ],
    year: '2024',
    role: 'AI/ML Intern',
  },
  {
    slug: 'project-floxa',
    title: 'project-floxa',
    desc: 'A C++ systems project exploring core programming and software design fundamentals.',
    longDesc:
      'A systems-level programming project in C++ that explores core computer science concepts including memory management, data structures, and software design patterns. Demonstrates proficiency in low-level programming and algorithmic thinking.',
    tags: ['C++', 'Data Structures', 'Algorithms'],
    link: 'https://github.com/sherazi7862/project-floxa',
    features: [
      'Systems-level C++ implementation',
      'Memory management and pointers',
      'Data structure implementations',
      'Algorithm design and analysis',
      'Command-line interface',
    ],
    techStack: [
      { category: 'Language', items: ['C++'] },
      { category: 'Build System', items: ['CMake', 'Makefile'] },
      { category: 'Tools', items: ['GDB', 'Valgrind'] },
    ],
    highlights: [
      'Deep dive into systems programming',
      'Focus on performance and memory efficiency',
      'Strong foundation in C++ best practices',
    ],
    year: '2024',
    role: 'Solo Developer',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}