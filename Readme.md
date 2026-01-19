# Resume Builder 🧾

**A modern, AI-powered resume builder** built with a scalable MERN + TypeScript stack, Dockerized for easy development and production deployment.

This application helps users generate professional resumes using **Google Gemini AI** and a user-friendly UI built with **shadcn/ui**. The backend handles JWT authentication, resume persistence in MongoDB, and smart content generation.  
Frontend and backend are containerized using **Docker & Docker Compose** for streamlined setup.

---

## 🚀 Features

- ✍️ AI-assisted smart resume content generation via Google Gemini API  
- 📦 Full MERN stack with TypeScript for type safety  
- 🧩 Responsive and modern UI using **shadcn/ui** and Tailwind CSS  
- 📸 Upload profile images using **ImageKit**  
- 📄 Save and manage multiple resumes per user  
- 🐳 Docker & Docker-Compose for seamless setup  
- 🧪 Test coverage via **Vitest / Jest**

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TypeScript, shadcn/ui, Tailwind CSS |
| Backend | Node.js, Express, TypeScript |
| Database | MongoDB |
| AI | Google Gemini API |
| DevOps | Docker, Docker Compose |
| Testing | Vitest, Jest |

---

## 🗂️ Project Structure

```text
.
├── client/                     # Frontend (React + TypeScript)
├── server/                     # Backend (Express + TypeScript)
├── docker-compose.yml         # Orchestrates services
├── .dockerignore
├── .gitignore
└── README.md

```

# 📦 Setup & Installation
## 🧾 Clone the repo
```bash
git clone https://github.com/Kushalchavan/resume-builder.git
cd resume-builder

```

## 📌 Create Environment Variables
Backend (server/.env):
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Frontend (client/.env):
```bash
VITE_API_URL=http://localhost:5000
```

## 🐳 Run with Docker Compose
```bash
docker-compose up --build
```

## 🚀 Running Locally (Without Docker)

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev

```

## ⚡ API Endpoints
### Auth
| Method | Path               |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Resume
| Method | Path            |
| ------ | --------------- |
| POST   | /api/resume     |
| GET    | /api/resume/:id |
| DELETE | /api/resume/:id |

### AI
| Method | Path             |
| ------ | ---------------- |
| POST   | /api/ai/generate |


