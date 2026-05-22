# Full Stack Blog Application – Complete README

## 📌 Project Overview

This project is a complete Full Stack Blog Application developed using the MERN Stack.
It includes:

* User Authentication
* Author Dashboard
* Admin Dashboard
* Blog Creation & Management
* Image Uploads
* Protected Routes
* Responsive Frontend UI
* REST API Integration
* MongoDB Database Connection
* JWT Authentication
* Deployment Support

---

# 🛠️ Technologies Used

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Bootstrap / Tailwind CSS
* React Icons
* Context API
* Local Storage

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors
* cookie-parser
* multer / cloudinary

---

# 📁 Complete Project Structure

```bash
project-root/
│
├── backend/
│   ├── APIs/
│   │   ├── UserAPI.js
│   │   ├── AuthorAPI.js
│   │   ├── AdminAPI.js
│   │   └── CommonAPI.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   ├── articleModel.js
│   │   └── adminModel.js
│   │
│   ├── middleware/
│   │   ├── verifyToken.js
│   │   └── errorHandler.js
│   │
│   ├── utils/
│   │   └── cloudinary.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
└── README.md
```

---

# ⚙️ Backend Setup

## Step 1: Create Backend Folder

```bash
mkdir backend
cd backend
```

---

## Step 2: Initialize Node Project

```bash
npm init -y
```

---

## Step 3: Install Backend Dependencies

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken cookie-parser multer cloudinary
```

---

## Step 4: Install Nodemon

```bash
npm install --save-dev nodemon
```

---

## Step 5: Backend Package.json Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## Step 6: Create .env File

```env
PORT=4000
DBURL=your_mongodb_connection
SECRET_KEY=your_secret_key
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
```

---

## Step 7: Start Backend Server

```bash
npm run dev
```

---

# 🚀 Frontend Setup

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

## Step 3: Install Frontend Dependencies

```bash
npm install
```

---

## Step 4: Install Required Packages

```bash
npm install react-router-dom axios react-icons bootstrap
```

---

## Step 5: Start Frontend

```bash
npm run dev
```

---

# 🔗 Frontend & Backend Connection

## Axios Base URL

```js
axios.defaults.baseURL = "http://localhost:4000";
```

---

# 🔐 Authentication Features

## Implemented Features

* User Registration
* User Login
* JWT Token Generation
* Protected Routes
* Password Hashing using bcryptjs
* Role-Based Authentication

---

# 👨‍💻 Roles in Application

## 1. User

* Register
* Login
* Read Blogs
* Like Articles
* Comment on Articles

## 2. Author

* Create Articles
* Edit Articles
* Delete Articles
* Manage Dashboard

## 3. Admin

* Manage Users
* Manage Authors
* Delete Inappropriate Content

---

# 📦 Important Backend Commands

## Install Express

```bash
npm install express
```

## Install MongoDB Mongoose

```bash
npm install mongoose
```

## Install JWT

```bash
npm install jsonwebtoken
```

## Install bcryptjs

```bash
npm install bcryptjs
```

## Install dotenv

```bash
npm install dotenv
```

## Install CORS

```bash
npm install cors
```

## Install Cookie Parser

```bash
npm install cookie-parser
```

## Install Nodemon

```bash
npm install --save-dev nodemon
```

---

# 📦 Important Frontend Commands

## Install Axios

```bash
npm install axios
```

## Install React Router

```bash
npm install react-router-dom
```

## Install React Icons

```bash
npm install react-icons
```

## Install Bootstrap

```bash
npm install bootstrap
```

---

# 🌐 API Routes

## User Routes

```bash
POST   /auth/users
POST   /auth/login
GET    /users
GET    /users/:id
```

## Author Routes

```bash
POST   /author/article
GET    /author/articles
PUT    /author/article/:id
DELETE /author/article/:id
```

## Admin Routes

```bash
GET    /admin/users
DELETE /admin/user/:id
```

---

# 🧠 Important Concepts Used

## React Hooks

### useState

Used to manage component state.

### useEffect

Used for API calls and lifecycle methods.

### useContext

Used for global state management.

### useNavigate

Used for page navigation.

---

# 🔒 Middleware Used

## verifyToken Middleware

Checks whether user token is valid.

## Error Handling Middleware

Handles backend server errors.

---

# ☁️ Cloudinary Integration

Used for image uploads.

## Install Cloudinary

```bash
npm install cloudinary multer
```

---

# 🗄️ MongoDB Connection

## Connect Database

```js
import mongoose from 'mongoose'

mongoose.connect(process.env.DBURL)
.then(()=>console.log('DB Connected'))
.catch(err=>console.log(err))
```

---

# 🌍 CORS Configuration

```js
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
```

---

# 🍪 Cookie Parser Setup

```js
app.use(cookieParser())
```

---

# 🔑 JWT Token Generation

```js
jwt.sign(payload, process.env.SECRET_KEY, {
  expiresIn: '1d'
})
```

---

# 🔐 Password Hashing

```js
bcrypt.hash(password, 5)
```

---

# 🖥️ Sample Backend Server

```js
import 'dotenv/config'
import exp from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = exp()

app.use(exp.json())
app.use(cors())
app.use(cookieParser())

mongoose.connect(process.env.DBURL)
.then(()=>console.log('DB Connected'))
.catch(err=>console.log(err))

app.listen(process.env.PORT, ()=>{
  console.log(`Server running on ${process.env.PORT}`)
})
```

---

# 🧩 React Router Setup

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```

---

# 📱 Features of Project

* Fully Responsive UI
* Secure Authentication
* Fast API Communication
* Clean Architecture
* Reusable Components
* Protected Routes
* Cloud Image Uploads
* MongoDB Storage
* REST APIs
* Dynamic Routing

---

# 📈 Advantages of MERN Stack

* JavaScript Used Everywhere
* Fast Development
* Scalable Architecture
* Easy API Integration
* Component Reusability
* Large Community Support

---

# 🚀 Deployment Commands

## Build Frontend

```bash
npm run build
```

---

# 🌐 Deploy Backend on Render

## Start Command

```bash
npm start
```

## Build Command

```bash
npm install
```

---

# 🌐 Deploy Frontend on Vercel / Netlify

## Build Command

```bash
npm run build
```

## Output Directory

```bash
dist
```

---

# 🐙 Git Commands Used

## Initialize Git

```bash
git init
```

## Add Files

```bash
git add .
```

## Commit Files

```bash
git commit -m "Initial Commit"
```

## Connect GitHub Repository

```bash
git remote add origin your_repository_link
```

## Push Code

```bash
git push -u origin main
```

---

# 🧪 Testing APIs

## Tools Used

* Postman
* Thunder Client

---

# 📚 Common Errors & Solutions

## Error: CORS Policy Blocked

### Solution

```js
app.use(cors())
```

---

## Error: MongoDB Connection Failed

### Solution

Check:

* MongoDB URL
* Internet Connection
* IP Whitelist in MongoDB Atlas

---

## Error: JWT Malformed

### Solution

Send correct token in authorization headers.

---

## Error: 500 Internal Server Error

### Solution

* Check backend logs
* Verify database connection
* Check request body
* Verify API route

---

# 🎯 Learning Outcomes

After completing this project, you will understand:

* MERN Stack Architecture
* REST APIs
* Authentication Flow
* MongoDB Operations
* React Hooks
* State Management
* Deployment Process
* Backend Integration
* Cloudinary Uploads

---

# 👨‍🎓 Viva Questions

## Why React?

React provides component-based architecture and fast rendering using Virtual DOM.

## Why Node.js?

Node.js allows JavaScript execution on the server side.

## Why MongoDB?

MongoDB is flexible and stores data in JSON format.

## Why JWT?

JWT provides secure authentication.

## Why useEffect?

Used for side effects like API calls.

## Why CORS?

Allows frontend and backend communication.

---

# 📌 Conclusion

This Full Stack Blog Application demonstrates complete frontend and backend integration using the MERN Stack. The project includes authentication, CRUD operations, REST APIs, MongoDB integration, image uploads, deployment, and responsive UI design.

It is a production-ready project useful for learning real-world full stack development.


Complete deployment link-https://capstone-g18-54fq.vercel.app/

