# Sujeet Pawar — Portfolio Website

A modern, professional portfolio website for **Sujeet Pawar**, a Computer Science Engineering student specializing in **Artificial Intelligence & Machine Learning**. Built with **React (Vite)** on the frontend and a **Python Flask** API on the backend, featuring a dark theme with neon orange/yellow accents, smooth animations, and a fully responsive design.

<p align="center">
  <a href="https://reactjs.org" target="_blank"><img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square" alt="React"></a>
  <a href="https://vite.dev" target="_blank"><img src="https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white&style=flat-square" alt="Vite"></a>
  <a href="https://flask.palletsprojects.com" target="_blank"><img src="https://img.shields.io/badge/Flask-2.3-000000?logo=flask&logoColor=white&style=flat-square" alt="Flask"></a>
  <a href="https://github.com/Sujeet-Pawar" target="_blank"><img src="https://img.shields.io/badge/GitHub-Sujeet--Pawar-181717?logo=github&logoColor=white&style=flat-square" alt="GitHub"></a>
</p>

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Running Tests](#running-tests)
- [Contact](#contact)

## About

**Sujeet Pawar** is a Computer Science Engineering (CSE) student in the **AI/ML** branch, passionate about building innovative solutions that bridge AI and real-world applications. He is an AI/ML enthusiast, full-stack developer, and innovator with **7+ projects** completed across AI/ML, Web Development, and IoT.

### Featured Projects

1. **AI-Powered Adaptive Learning Platform** — Intelligent learning platform with ML algorithms
2. **Plant Care Chatbot (Image + Text)** — AI-powered plant disease detection and care recommendations
3. **Online Attendance System (PHP)** — Comprehensive attendance management for educational institutions
4. **College Festival Website (MERN + OTP)** — Full-stack festival management with OTP authentication
5. **Air Pollution Monitoring (Cloud-Edge Hybrid)** — Real-time pollution monitoring with IoT and cloud computing
6. **Hand Gesture Recognition (MediaPipe)** — Real-time gesture recognition for interactive applications
7. **Travel App Prototype** — Mobile app with AI-powered recommendations and itinerary management

## Features

- **Dark theme** with neon orange/yellow gradient accents
- **Animated particle background** with connecting-line effects
- **Smooth animations** — scroll-triggered fade-ins, hover glow effects, floating elements
- **Fully responsive** — mobile-first design with flexible grids and responsive typography
- **Interactive contact form** with validation, SMTP email delivery, and success/error feedback
- **Project showcase** with detail modal view and live/demo links
- **Extra UX polish** — skeleton loaders, toast notifications, and error boundary handling

## Tech Stack

### Frontend

| Technology      | Purpose                                    |
| --------------- | ------------------------------------------ |
| React 19        | UI framework                               |
| Vite 7          | Build tool & dev server                    |
| Framer Motion   | Animation library                          |
| React Icons     | Icon library                               |
| Plain CSS       | Scoped component styles with CSS variables (no Tailwind) |

### Backend

| Technology      | Purpose                         |
| --------------- | ------------------------------- |
| Python Flask    | Web framework (API server)      |
| Flask-CORS      | Cross-origin resource sharing   |
| python-dotenv   | Environment variable loading    |
| SMTP            | Email delivery for the contact form |

## Getting Started

### Prerequisites

- **Node.js** 20.19+ (required by Vite 7)
- **Python** 3.11+ (see `backend/runtime.txt`)
- **npm** (or yarn/pnpm)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sujeet-Pawar/portfolio.git
   cd portfolio
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Set up the backend**

   ```bash
   cd backend
   pip install -r requirements.txt
   cp env.example .env
   ```

4. **Configure environment variables**

   Edit `backend/.env` with your email credentials:

   ```env
   EMAIL_ADDRESS=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com

   # SMTP Configuration (Gmail)
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   ```

   > **Note for Gmail:** use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password, and make sure 2-factor authentication is enabled.

   Optionally set the frontend API URL (defaults to `http://localhost:5000`):

   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application

**Option 1 — Run frontend and backend together:**

```bash
npm run dev:full
```

**Option 2 — Run each separately:**

```bash
# Terminal 1 — Frontend
npm run dev

# Terminal 2 — Backend
npm run backend
```

The application will be available at:

| Service   | URL                   |
| --------- | --------------------- |
| Frontend  | http://localhost:5173 |
| Backend   | http://localhost:5000 |

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Skills.jsx / Skills.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Contact.jsx / Contact.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── ParticleBackground.jsx / ParticleBackground.css
│   │   ├── SkeletonLoader.jsx / SkeletonLoader.css
│   │   ├── Toast.jsx / Toast.css
│   │   └── ErrorBoundary.jsx / ErrorBoundary.css
│   ├── config/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── env.example
│   ├── runtime.txt
│   └── Procfile
├── netlify.toml
├── _redirects
├── vite.config.js
└── package.json
```

## Customization

### Colors

The color scheme is defined in `src/index.css` using CSS variables:

| Variable             | Value     | Description    |
| -------------------- | --------- | -------------- |
| `--accent-primary`   | `#ff6b35` | Neon Orange    |
| `--accent-secondary` | `#ffd23f` | Bright Yellow  |
| `--accent-tertiary`  | `#ff8c00` | Orange         |

### Content

Update the following files to customize your content:

- `src/components/Hero.jsx` — Personal introduction and hero section
- `src/components/About.jsx` — About section content
- `src/components/Skills.jsx` — Skills and technologies
- `src/components/Projects.jsx` — Project portfolio (name, description, repo, demo links)
- `src/components/Contact.jsx` — Contact information and social links

### Styling

Each component has its own CSS file for modular styling. Global theme variables, typography, buttons, cards, and form styles live in `src/index.css`.

## Deployment

### Frontend — Netlify

The repository includes a `netlify.toml` config (build command `npm run build`, publish directory `dist`) and a `_redirects` file for SPA routing:

1. Connect the repository to Netlify (or drag-and-drop the `dist` folder).
2. Set `VITE_API_URL` to your deployed backend URL if needed.
3. Deploy — the `dist` output is served automatically.

### Backend — Render

The backend runs with **gunicorn** (a production WSGI server) and binds to the `PORT` env var that Render sets automatically:

1. Create a new **Web Service** in Render and connect your repository.
2. Set **Root Directory** to `backend` (the Flask app lives in the `backend/` folder).
3. Set **Build Command** to `pip install -r requirements.txt`.
4. Set **Start Command** to `gunicorn app:app --bind 0.0.0.0:$PORT`.
5. Set the **Environment Variables** from `backend/env.example` in the Render dashboard (Render injects `PORT` itself).
6. Deploy, then set the frontend's `VITE_API_URL` to `https://<your-service>.onrender.com` and redeploy on Netlify so the contact form points at the live backend.

> **Note:** gunicorn is a Unix-only server, so keep using `python app.py` (via `npm run backend`) for local development on Windows — the `Procfile` is only used by deployment platforms.

## Running Tests

The project includes a website smoke test and an email test script:

```bash
# Website smoke test against the live deployment
npm run test

# Local website test (requires both servers running)
npm run test:local

# Backend email delivery test
npm run test:email
```

## Contact

- **GitHub**: [github.com/Sujeet-Pawar](https://github.com/Sujeet-Pawar)
- **LinkedIn**: [linkedin.com/in/sujeetpawar](https://linkedin.com/in/sujeetpawar)
- **Email**: [sujeetpawar998@gmail.com](mailto:sujeetpawar998@gmail.com)

---

Built with ❤️ using React, Vite, and Flask.
