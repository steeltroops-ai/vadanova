# VEDANOVA - AI-powered Ayurvedic Treatment Recommendation System

<div align="center">
  <img src="frontend/public/logo.png" alt="VEDANOVA Logo" width="200"/>
  <h3>Ancient Healing. Intelligent Future.</h3>
</div>

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Key Features](#-key-features)
- [Screenshots](#-screenshots)
- [Technology Stack](#-technology-stack)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [Ayurvedic Concepts](#-ayurvedic-concepts)
- [Use Cases](#-use-cases)
- [Development Roadmap](#-development-roadmap)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 🌿 Introduction

VEDANOVA is a comprehensive Ayurvedic treatment recommendation system that bridges the ancient healing science of Ayurveda with modern technology. The system analyzes user-reported symptoms, identifies dosha imbalances, and provides personalized treatment recommendations including herbs, lifestyle changes, and dietary advice.

Designed with a cyberpunk-inspired UI featuring Ayurvedic color themes, VEDANOVA offers both an intuitive user experience and an educational platform for learning about Ayurvedic principles, herbs, treatments, history, diet, and lifestyle practices.

## 🧩 Key Features

- **Personalized Treatment Recommendations**: Receive customized Ayurvedic treatment plans based on your symptoms
- **Dosha Analysis**: Understand your unique constitution and current imbalances
- **Comprehensive Knowledge Base**: Explore detailed information about Ayurvedic principles, herbs, treatments, history, diet, and lifestyle
- **Interactive Dashboard**: Visualize Ayurvedic knowledge and data
- **User Profiles**: Track your dosha constitution and treatment history
- **Light/Dark Mode**: Toggle between light and dark themes with Ayurvedic-inspired colors
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Educational Content**: Learn about the principles and practices of Ayurveda

## 📸 Screenshots

### Dashboard

![Dashboard](frontend/public/screenshots/dashboard.png)

### Recommendation System

![Recommendation](frontend/public/screenshots/recommendation.png)

### Knowledge Base

![Knowledge](frontend/public/screenshots/knowledge.png)

### User Profile

![Profile](frontend/public/screenshots/profile.png)

## 💻 Technology Stack

### Frontend

- **Framework**: Next.js 15.3.0 with App Router
- **Styling**: Tailwind CSS with custom Ayurvedic theme
- **UI Components**: Custom components with ShadCN UI
- **State Management**: React Hooks and Context API
- **Theme Management**: Custom theme provider with localStorage persistence

### Backend

- **Framework**: FastAPI (Python)
- **API**: RESTful endpoints for herbs, diseases, doshas, and recommendations
- **Data Processing**: Custom NLP models for symptom analysis
- **Mock Server**: Python HTTP server for development

## 🚀 Installation & Setup

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Python**: v3.9.0 or higher (for backend)

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/vedanova.git
cd vedanova

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

### Backend Setup

```bash
# Navigate to backend directory from project root
cd backend

# Create and activate virtual environment (recommended)
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

## 🔄 Running the Application

### Option 1: Using the Development Script (Recommended)

The easiest way to run both frontend and backend simultaneously is using the provided script:

```bash
# From the project root directory

# On Windows
.\run_dev.ps1

# On macOS/Linux
./run_dev.sh
```

This will start both the frontend and backend servers in separate terminal windows.

### Option 2: Running Components Separately

#### Frontend

```bash
# Navigate to frontend directory
cd frontend

# Start the development server
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

#### Backend

```bash
# Navigate to backend directory
cd backend

# Start the backend server
python run.py

# Alternatively, you can use the mock server for development
python mock_server.py
```

The backend API will be available at [http://localhost:8000/api](http://localhost:8000/api).

## 📁 Project Structure

```
vedanova/
├── frontend/                  # Next.js frontend application
│   ├── public/                # Static assets and images
│   ├── src/
│   │   ├── app/              # Next.js app router pages
│   │   │   ├── dashboard/    # Dashboard page
│   │   │   ├── knowledge/    # Knowledge base page
│   │   │   ├── profile/      # User profile page
│   │   │   ├── recommendation/ # Recommendation page
│   │   │   └── layout.tsx    # Root layout component
│   │   ├── components/       # Reusable UI components
│   │   │   ├── layout/       # Layout components
│   │   │   ├── theme/        # Theme components
│   │   │   └── ui/           # UI components
│   │   └── lib/              # Utility functions and API client
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── package.json          # Frontend dependencies
│
├── backend/                   # FastAPI backend application
│   ├── app/                  # Main application package
│   │   ├── routers/          # API route definitions
│   │   ├── models/           # Data models
│   │   ├── services/         # Business logic
│   │   └── main.py           # Application entry point
│   ├── mock_server.py        # Mock server for development
│   ├── run.py                # Server startup script
│   └── requirements.txt      # Python dependencies
│
├── run_dev.ps1               # Windows development script
├── run_dev.sh                # macOS/Linux development script
└── README.md                 # Project documentation
```

## 🌱 Ayurvedic Concepts

VEDANOVA is built around these core Ayurvedic principles:

### The Three Doshas

- **Vata** (Air & Ether): Controls movement, breathing, and nervous system functions
- **Pitta** (Fire & Water): Governs digestion, metabolism, and transformation
- **Kapha** (Earth & Water): Maintains structure, lubrication, and stability

### Treatment Approach

Ayurvedic treatment in VEDANOVA follows these principles:

1. **Identify Dosha Imbalance**: Analyze symptoms to determine which doshas are out of balance
2. **Personalize Treatment**: Recommend herbs, lifestyle changes, and dietary adjustments based on individual constitution
3. **Holistic Healing**: Address the root cause rather than just symptoms
4. **Preventive Care**: Provide guidance for maintaining balance and preventing future imbalances

## 🔍 Use Cases

- **Ayurveda Students**: Learn about herbs, treatments, and dosha relationships
- **Practitioners**: Quick reference for treatment recommendations
- **Individuals**: Self-care guidance based on Ayurvedic principles
- **Wellness Centers**: Client education and treatment planning tool
- **Researchers**: Explore relationships between symptoms, doshas, and treatments

## 📈 Development Roadmap

### Phase 1: Core Functionality (Current)

- ✅ Symptom-based recommendation engine
- ✅ Comprehensive knowledge base
- ✅ Interactive dashboard
- ✅ User profiles
- ✅ Light/dark mode with Ayurvedic themes

### Phase 2: Enhanced Intelligence

- 🔄 Advanced NLP models for symptom analysis
- 🔄 Personalized constitution assessment
- 🔄 Treatment effectiveness tracking
- 🔄 Expanded herb and treatment database

### Phase 3: Advanced Features

- 📅 Integration with AI models for more nuanced recommendations
- 📅 Mobile application
- 📅 Practitioner portal
- 📅 Community features and shared experiences

## 🔧 Troubleshooting

### Common Issues

#### Backend Connection Issues

- Ensure the backend server is running on port 8000
- Check that CORS is properly configured
- Verify that the API endpoints match what the frontend is expecting

#### Frontend Display Issues

- Clear browser cache and reload
- Ensure all dependencies are installed correctly
- Check browser console for any JavaScript errors

#### Dependency Issues

- Make sure you're using the correct versions of Node.js and Python
- Try deleting `node_modules` and reinstalling with `npm install`
- For Python, ensure your virtual environment is activated

## 🤝 Contributing

Contributions to VEDANOVA are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

