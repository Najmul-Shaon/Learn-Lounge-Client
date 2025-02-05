
# 📚 Learn Lounge

**An open platform for students worldwide to collaborate, study in groups, and evaluate assignments together.**

## 📝 Introduction

Learn Lounge is a global platform that allows students to engage in group studies, create assignments, and evaluate each other's work. The platform encourages peer learning and knowledge sharing among students, ensuring an interactive and productive educational experience.

## 📌 Features

- 🌍 Open to students worldwide
- 👥 Group study and collaboration
- 📝 Assignment creation and peer evaluation
- 🔥 Real-time notifications and updates
- 🎨 Modern UI with **Tailwind CSS** and **DaisyUI**
- 🚀 Fast performance powered by **Vite** and **Firebase**

## 📂 Table of Contents

- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Dependencies](#-dependencies)
- [Development](#-development)
- [License](#-license)

## 🔧 Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/learn-lounge.git
   cd learn-lounge
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

Create a `.env` file in the project root and add the following variables:

```env
VITE_apiKey=AIzaSyD8lK_s02vE9S70qnDMreiiZ5zIU-O3f5g
VITE_authDomain=learn--lounge.firebaseapp.com
VITE_projectId=learn--lounge
VITE_storageBucket=learn--lounge.firebasestorage.app
VITE_messagingSenderId=16659888029
VITE_appId=1:16659888029:web:cae8ef468156c909052174
```

⚠️ **Important:** Avoid exposing Firebase API keys in public repositories. Consider using environment variables securely with tools like **dotenv**.

## 🚀 Usage

- **Create Study Groups**: Collaborate with peers on assignments.
- **Submit Assignments**: Share work and receive peer feedback.
- **Evaluate Assignments**: Peer-review submissions for interactive learning.
- **Real-Time Updates**: Stay updated with notifications.

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

## 🛠 Development

To contribute:

1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Make your changes
4. Commit and push (`git commit -m "Added new feature"`)
5. Open a pull request

## 📜 License

This project is licensed under the **MIT License**.

---
