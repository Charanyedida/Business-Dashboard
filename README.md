# 🏢 Business Dashboard

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://business-dashboard-black.vercel.app/)
[![API Status](https://img.shields.io/badge/API-Online-green?style=for-the-badge&logo=render)](https://business-dashboard-nb4d.onrender.com/)
[![Demo Video](https://img.shields.io/badge/Demo%20Video-Watch%20Now-red?style=for-the-badge&logo=googledrive)](https://drive.google.com/file/d/1mIe3_-stomqR13bKWkQ-lQy-R2ZPYOzq/view?usp=drive_link)

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Contributing](#-contributing)


## 🎯 Overview

Business Dashboard is a modern web application that provides business insights and AI-generated SEO headlines for local businesses. Users can input their business name and location to get simulated Google ratings, review counts, and optimized SEO headlines perfect for marketing and online presence.

## ✨ Features

- 📊 **Business Analytics**: Get simulated Google ratings and review counts
- 🤖 **AI-Generated SEO Headlines**: Creates optimized headlines for search engines
- 🎨 **Modern UI/UX**: Beautiful, responsive design with smooth animations
- ⚡ **Real-time Updates**: Regenerate headlines with a single click
- 🔄 **Interactive Experience**: Dynamic form validation and error handling
- 📱 **Mobile Responsive**: Works perfectly on all devices
- 🚀 **Fast Performance**: Optimized for speed and user experience

## 🌐 Live Demo

<div align="center">

| Platform | Link | Status |
|----------|------|--------|
| 🖥️ **Frontend** | [business-dashboard-black.vercel.app](https://business-dashboard-black.vercel.app/) | [![Website](https://img.shields.io/website-up-down-green-red/https/business-dashboard-black.vercel.app.svg)](https://business-dashboard-black.vercel.app/) |
| 🔗 **Backend API** | [business-dashboard-nb4d.onrender.com](https://business-dashboard-nb4d.onrender.com/) | [![API Status](https://img.shields.io/website-up-down-green-red/https/business-dashboard-nb4d.onrender.com.svg)](https://business-dashboard-nb4d.onrender.com/) |
| 🎥 **Demo Video** | [Watch on Google Drive](https://drive.google.com/file/d/1mIe3_-stomqR13bKWkQ-lQy-R2ZPYOzq/view?usp=drive_link) | [![Demo](https://img.shields.io/badge/Demo-Available-brightgreen)](https://drive.google.com/file/d/1mIe3_-stomqR13bKWkQ-lQy-R2ZPYOzq/view?usp=drive_link) |

</div>

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![CORS](https://img.shields.io/badge/CORS-FF6B6B?style=for-the-badge)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- ![Node.js](https://img.shields.io/badge/Node.js-v14+-43853D?style=flat-square&logo=node.js&logoColor=white)
- ![npm](https://img.shields.io/badge/npm-v6+-CB3837?style=flat-square&logo=npm&logoColor=white)

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/business-dashboard.git
   cd business-dashboard
   ```

2. **Backend Setup**
   ```bash
   # Install backend dependencies
   npm install express cors
   
   # Start the server
   node server.js
   ```
   The API will be available at `http://localhost:3001`

3. **Frontend Setup**
   ```bash
   # Install frontend dependencies
   npm install react lucide-react
   
   # Update API_BASE_URL in BusinessDashboard.jsx
   const API_BASE_URL = 'http://localhost:3001'; // For local development
   
   # Start the development server
   npm start
   ```
   The application will be available at `http://localhost:3000`

### 🔄 Environment Configuration

Update the `API_BASE_URL` in your frontend code based on your environment:

```javascript
// For local development
const API_BASE_URL = 'http://localhost:3001';

// For production
const API_BASE_URL = 'https://business-dashboard-nb4d.onrender.com';
```

## 📚 API Documentation

### Base URL
- **Production**: `https://business-dashboard-nb4d.onrender.com`
- **Development**: `http://localhost:3001`

### Endpoints

#### 🏥 Health Check
```http
GET /health
```
**Response:**
```json
{
  "status": "OK",
  "message": "Business Dashboard API is running"
}
```

#### 📊 Get Business Data
```http
POST /business-data
```
**Request Body:**
```json
{
  "name": "Business Name",
  "location": "Business Location"
}
```
**Response:**
```json
{
  "rating": "4.2",
  "reviews": 127,
  "headline": "Why Business Name is Business Location's Best Choice in 2025"
}
```

#### 🔄 Regenerate SEO Headline
```http
GET /regenerate-headline?name=BusinessName&location=BusinessLocation
```
**Response:**
```json
{
  "headline": "Discover Why Business Name is Business Location's Hidden Gem"
}
```

## 🚀 Deployment

### Frontend Deployment (Vercel)
The frontend is deployed on Vercel at:
- **URL**: [https://business-dashboard-black.vercel.app/](https://business-dashboard-black.vercel.app/)

### Backend Deployment (Render)
The backend API is deployed on Render at:
- **URL**: [https://business-dashboard-nb4d.onrender.com/](https://business-dashboard-nb4d.onrender.com/)

### Deployment Steps

1. **Frontend (Vercel)**
   - Connect your GitHub repository to Vercel
   - Set the build command and output directory
   - Deploy automatically on push to main branch

2. **Backend (Render)**
   - Connect your GitHub repository to Render
   - Set environment variables if needed
   - Deploy the Node.js application

## 📁 Project Structure

```
business-dashboard/
├── backend/
│   ├── server.js              # Express server setup
│   ├── package.json           # Backend dependencies
│   └── README.md             # Backend documentation
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── BusinessDashboard.jsx
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json          # Frontend dependencies
│   └── tailwind.config.js    # Tailwind CSS configuration
└── README.md                 # Main documentation
```

## 📱 Usage

1. **Visit the Application**
   - Go to [https://business-dashboard-black.vercel.app/](https://business-dashboard-black.vercel.app/)

2. **Enter Business Information**
   - Input your business name
   - Enter your business location

3. **Get Insights**
   - Click "Get Business Insights" to generate data
   - View simulated Google rating and review count
   - See AI-generated SEO headline

4. **Regenerate Headlines**
   - Click "Regenerate" to get new SEO headlines
   - Perfect for A/B testing marketing content

## 🎥 Demo Video

Watch the full demo video to see the application in action:
- **Link**: [Google Drive Demo Video](https://drive.google.com/file/d/1mIe3_-stomqR13bKWkQ-lQy-R2ZPYOzq/view?usp=drive_link)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### 📝 Development Guidelines

- Follow the existing code style and conventions
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed


## 🔗 Links

- **Live Application**: [https://business-dashboard-black.vercel.app/](https://business-dashboard-black.vercel.app/)
- **API Endpoint**: [https://business-dashboard-nb4d.onrender.com/](https://business-dashboard-nb4d.onrender.com/)
- **Demo Video**: [Google Drive](https://drive.google.com/file/d/1mIe3_-stomqR13bKWkQ-lQy-R2ZPYOzq/view?usp=drive_link)

---

<div align="center">
  <p>Made with ❤️ for local businesses</p>
</div>
