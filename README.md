# 📚 Learn Lounge

**An open platform for students worldwide to collaborate, study in groups, and evaluate assignments together.**

## 📝 Introduction

Learn Lounge is a global platform that allows students to engage in group studies, create assignments, and evaluate each other's work. The platform encourages peer learning and knowledge sharing among students, ensuring an interactive and productive educational experience. [View](https://learn--lounge.web.app)

## 📂 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Dependencies](#-dependencies)
- [Development](#-development)
- [License](#-license)

---

## 📌 Features

- 🌍 Open to students worldwide
- 👥 Group study and collaboration
- 📝 Assignment creation and peer evaluation
- 🔥 Real-time updates
- 🎨 Modern UI with **Tailwind CSS** and **DaisyUI**
- 🚀 Fast performance powered by **Vite** and **Firebase**

## 🎨 Tech Stack

<h4 align="left">Frontend</h4>

<div align="left">
  <img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=css" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=tailwind" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo"  />
  <img width="12" />
</div>

<h4 align="left">Backend</h4>

<div align="left">

  <img src="https://skillicons.dev/icons?i=nodejs" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
  <img width="12" />
  
</div>
<h4 align="left">Database</h4>

<div align="left">

  <img src="https://skillicons.dev/icons?i=mongodb" height="40" alt="mongodb logo"  />
  
</div>
<h4 align="left">Authentication</h4>

<div align="left">
  <img src="https://skillicons.dev/icons?i=firebase" height="40" alt="firebase logo"  />
  <img width="12" />
 <img src="https://img.shields.io/badge/JWT-JSON%20Web%20Token-blue" alt="JWT" height="40" />
</div>

---

## 🔧 Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Najmul-Shaon/Learn-Lounge-Client.git
   cd Learn-Lounge-Client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (see below).
4. Start the development server:
   ```sh
   npm run dev
   ```

## 🔑 Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
VITE_apiKey=AIzaSyD8lK_s02vE9S70qnDMreiiZ5zIU-O3f5g
VITE_authDomain=learn--lounge.firebaseapp.com
VITE_projectId=learn--lounge
VITE_storageBucket=learn--lounge.firebasestorage.app
VITE_messagingSenderId=16659888029
VITE_appId=1:16659888029:web:cae8ef468156c909052174
```

## 🚀 Usage

- **Create Study Groups**: Collaborate with peers on assignments.
- **Submit Assignments**: Share work and receive peer feedback.
- **Evaluate Assignments**: Peer-review submissions for interactive learning.
- **Real-Time Updates**: Stay updated.

## 📦 Dependencies

The project uses the following technologies:

### Main Dependencies

```json
"dependencies": {
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "framer-motion": "^11.15.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-datepicker": "^7.5.0",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.1",
  "react-toastify": "^11.0.2",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.3"
}
```

### Development Dependencies

```json
"devDependencies": {
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.23",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.5"
}
```

---
