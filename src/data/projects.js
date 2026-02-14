export const projects = [
  {
    id: 'safeswipe',
    name: 'SafeSwipe – Real-Time Fraud Detection',
    role: 'End-to-end ML system for card fraud detection',
    description:
      'Production-focused fraud detection engine with real-time scoring API, model monitoring, and imbalanced classification optimization.',
    impact: 'Designed to minimize false positives while catching high-risk anomalies at scale.',
    tech: ['Flask', 'Python', 'Random Forest', 'SVM', 'Imbalanced-learn', 'Pandas'],
    highlights: [
      'Flask-based REST API for real-time transaction scoring',
      'Random Forest & SVM ensemble tuned for highly imbalanced datasets',
      'Robust feature engineering and pipeline-based preprocessing',
      'Evaluation with ROC-AUC, precision-recall curves, and cost-sensitive metrics'
    ],
    github: 'https://github.com/AayushiJaiswal/SafeSwipe'
  },
  {
    id: 'churn-analytics',
    name: 'Customer Churn Analytics Platform',
    role: 'Analytics + ML platform for churn prediction',
    description:
      'Unified churn analytics stack combining a predictive ML model, executive-ready Power BI dashboards, and a Streamlit exploration UI.',
    impact: 'Helps business teams proactively identify at-risk customers and design retention strategies.',
    tech: ['Python', 'Power BI', 'Streamlit', 'Scikit-learn'],
    highlights: [
      'End-to-end churn prediction pipeline with feature engineering and model evaluation',
      'Interactive Power BI reports for churn segments, cohorts, and revenue at risk',
      'Streamlit-based UI for scenario analysis and threshold tuning',
      'Exportable insights for operations and CRM campaigns'
    ],
    github: 'https://github.com/AayushiJaiswal/Customer-Churn-Analytics-Platform'
  },
  {
    id: 'erp-rag',
    name: 'ERP RAG System',
    role: 'Retrieval-Augmented Generation for ERP knowledge',
    description:
      'RAG system that turns unstructured ERP documentation into a queryable knowledge layer using local LLMs and vector search.',
    impact: 'Reduces lookup time for ERP processes and configurations by enabling natural-language Q&A.',
    tech: ['FAISS', 'Sentence Transformers', 'Ollama', 'Python'],
    highlights: [
      'Vector store with FAISS for low-latency semantic retrieval',
      'Sentence Transformers-based embeddings tuned for technical documentation',
      'Local LLM orchestration via Ollama for privacy-preserving Q&A',
      'Chunking, ranking, and context-window optimization for accurate answers'
    ],
    github: 'https://github.com/AayushiJaiswal/Lightweight-LLM-RAG-QA-System'
  },
  {
    id: 'ai-inventory-agent',
    name: 'AI Inventory Agent',
    role: 'Automation-first inventory intelligence agent',
    description:
      'Autonomous inventory assistant built on workflows and LLMs to monitor stock, trigger alerts, and sync decisions with Google Sheets.',
    impact: 'Automates repetitive inventory checks and provides proactive recommendations.',
    tech: ['n8n', 'OpenAI', 'Google Sheets', 'REST APIs'],
    highlights: [
      'n8n automation graph orchestrating data pulls and decision steps',
      'OpenAI-powered reasoning over stock levels, trends, and constraints',
      'Two-way sync with Google Sheets as a single source of truth',
      'Configurable triggers for alerts, purchase recommendations, and summaries'
    ],
    github: 'https://github.com/AayushiJaiswal/ai-inventory-agent'
  },
];

