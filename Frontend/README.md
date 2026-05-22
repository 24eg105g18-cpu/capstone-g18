# Frontend README

````markdown
# Frontend - Full Stack Blog Application

## 📌 Overview

This is the frontend of the Full Stack Blog Application developed using React.js and Vite.

The frontend provides:

- User Authentication
- Author Dashboard
- Blog Display
- Article Creation UI
- Protected Routes
- Responsive Design
- API Integration
- Dynamic Routing

---

# 🛠️ Technologies Used

- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap / Tailwind CSS
- React Icons
- Context API
- Local Storage

---

# 📁 Frontend Folder Structure

```bash
frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ArticleCard.jsx
│   │   ├── Sidebar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── AuthorProfile.jsx
│   │   ├── AddArticle.jsx
│   │   ├── Articles.jsx
│   │   └── ErrorPage.jsx
│   │
│   ├── context/
│   │   └── UserLoginContext.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
````

---

# ⚙️ Frontend Setup

## Step 1: Create React App using Vite

```bash
npm create vite@latest frontend
```

Choose:

```bash
React
JavaScript
```

---

## Step 2: Move into Frontend Folder

```bash
cd frontend
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

# 📦 Required Packages

## Install React Router DOM

```bash
npm install react-router-dom
```

### Why?

Used for client-side routing and navigation.

---

## Install Axios

```bash
npm install axios
```

### Why?

Used for API calls between frontend and backend.

---

## Install React Icons

```bash
npm install react-icons
```

### Why?

Used for modern UI icons.

---

## Install Bootstrap

```bash
npm install bootstrap
```

### Why?

Used for responsive styling and UI components.

---

# ▶️ Start Frontend Server

```bash
npm run dev
```

---

# 🌐 Frontend Running URL

```bash
http://localhost:5173
```

---

# 🧠 React Concepts Used

## useState

Used to store component state.

Example:

```js
const [users, setUsers] = useState([])
```

---

## useEffect

Used for API calls and lifecycle methods.

Example:

```js
useEffect(() => {
  getData()
}, [])
```

---

## useContext

Used for global state management.

---

## useNavigate

Used for navigation between pages.

---

# 🔗 React Router Setup

## Install Router

```bash
npm install react-router-dom
```

---

## Configure Routing

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```

---

# 📡 API Integration

## Axios Base URL

```js
axios.defaults.baseURL = "http://localhost:4000"
```

---

## Sample GET Request

```js
axios.get('/users')
.then(response => console.log(response))
.catch(err => console.log(err))
```

---

## Sample POST Request

```js
axios.post('/auth/login', userData)
.then(response => console.log(response))
.catch(err => console.log(err))
```

---

# 🔐 Authentication Features

* User Login
* User Registration
* JWT Token Storage
* Protected Routes
* Logout Functionality

---

# 🔒 Protected Route Example

```js
if(userLoginStatus === false){
  return <Navigate to='/login' />
}
```

---

# 🎨 Styling Methods Used

## Bootstrap

Imported in:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

---

## Tailwind CSS (Optional)

### Install Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Initialize Tailwind

```bash
npx tailwindcss init -p
```

---

# 📱 Features of Frontend

* Responsive Design
* Dynamic Routing
* Authentication Pages
* Article Cards
* Dashboard UI
* Reusable Components
* API Integration
* Error Handling

---

# 🧩 Important Components

## Header Component

Contains navigation links.

---

## Footer Component

Contains footer information.

---

## Sidebar Component

Contains navigation menus.

---

## ArticleCard Component

Displays article preview.

---

## ProtectedRoute Component

Protects private routes.

---

# 📌 Common Pages

## Home Page

Displays all articles.

---

## Login Page

Allows users to login.

---

## Register Page

Allows new user registration.

---

## Add Article Page

Used by authors to create articles.

---

## Author Profile Page

Displays author details and articles.

---

# 🧪 Common Frontend Errors

## Error: Module Not Found

### Solution

Install missing package:

```bash
npm install
```

---

## Error: Failed to Fetch

### Solution

Check backend server is running.

---

## Error: CORS Blocked

### Solution

Enable CORS in backend.

---

## Error: Blank Page

### Solution

Check React Router configuration.

---

# 🚀 Build Frontend for Production

```bash
npm run build
```

---

# 📂 Production Build Folder

```bash
dist/
```

---

# 🌍 Deploy Frontend on Vercel

## Build Command

```bash
npm run build
```

## Output Directory

```bash
dist
```

---

# 🌍 Deploy Frontend on Netlify

## Build Command

```bash
npm run build
```

## Publish Directory

```bash
dist
```

---

# 🐙 Git Commands Used

## Initialize Git

```bash
git init
```

---

## Add Files

```bash
git add .
```

---

## Commit Changes

```bash
git commit -m "Frontend Completed"
```

---

## Connect GitHub Repository

```bash
git remote add origin your_repository_link
```

---

## Push Code

```bash
git push -u origin main
```

---

# 📚 Advantages of React Frontend

* Fast Rendering
* Reusable Components
* Easy State Management
* Large Community Support
* Easy API Integration
* Responsive UI Development

---

# 🎯 Learning Outcomes

After completing this frontend project, you will understand:

* React Fundamentals
* React Hooks
* Component-Based Architecture
* API Integration
* Authentication Flow
* React Router
* State Management
* Responsive UI Design
* Deployment Process

---

# 👨‍🎓 Viva Questions

## Why React?

React provides component-based architecture and Virtual DOM.

---

## Why useState?

Used to manage component state.

---

## Why useEffect?

Used for API calls and lifecycle methods.

---

## Why Axios?

Used for sending HTTP requests.

---

## Why React Router DOM?

Used for navigation between pages.

---

## Why Context API?

Used for global state management.

---

# 📌 Conclusion

This frontend application is built using React.js and Vite with modern UI design principles. It includes routing, authentication, API integration, reusable components, and responsive layouts.

The project demonstrates complete frontend development skills required for real-world MERN stack applications.

Frontend deployment Link:https://capstone-g18-54fq.vercel.app/
