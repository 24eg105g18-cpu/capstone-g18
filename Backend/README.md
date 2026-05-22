# Backend README

````markdown
# Backend - Full Stack Blog Application

## 📌 Overview

This is the backend of the Full Stack Blog Application developed using Node.js, Express.js, and MongoDB.

The backend is responsible for:

- User Authentication
- JWT Token Generation
- Database Management
- REST API Creation
- Article Management
- Role-Based Access
- Cloudinary Image Uploads
- Secure Password Storage

This backend follows REST API architecture and connects with the React frontend.

---

# 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors
- cookie-parser
- multer
- cloudinary
- nodemon

---

# 📁 Backend Folder Structure

```bash
backend/
│
├── APIs/
│   ├── UserAPI.js
│   ├── AuthorAPI.js
│   ├── AdminAPI.js
│   └── CommonAPI.js
│
├── models/
│   ├── userModel.js
│   ├── articleModel.js
│   └── adminModel.js
│
├── middleware/
│   ├── verifyToken.js
│   └── errorHandler.js
│
├── utils/
│   └── cloudinary.js
│
├── server.js
├── package.json
├── package-lock.json
└── .env
````

---

# ⚙️ Backend Setup

## Step 1: Create Backend Folder

```bash
mkdir backend
```

---

## Step 2: Move into Backend Folder

```bash
cd backend
```

---

## Step 3: Initialize Node Project

```bash
npm init -y
```

This command creates the `package.json` file.

---

# 📦 Install Required Packages

## Install Express

```bash
npm install express
```

### Why Express?

Express is used to create server-side APIs easily.

---

## Install MongoDB Mongoose

```bash
npm install mongoose
```

### Why Mongoose?

Mongoose helps to connect Node.js with MongoDB and create schemas/models.

---

## Install dotenv

```bash
npm install dotenv
```

### Why dotenv?

Used to store secret environment variables securely.

---

## Install bcryptjs

```bash
npm install bcryptjs
```

### Why bcryptjs?

Used for password hashing and security.

---

## Install JWT

```bash
npm install jsonwebtoken
```

### Why JWT?

JWT is used for secure user authentication.

---

## Install CORS

```bash
npm install cors
```

### Why CORS?

Allows frontend and backend communication.

---

## Install Cookie Parser

```bash
npm install cookie-parser
```

### Why cookie-parser?

Used to handle cookies in requests.

---

## Install Multer

```bash
npm install multer
```

### Why multer?

Used for file uploads.

---

## Install Cloudinary

```bash
npm install cloudinary
```

### Why Cloudinary?

Used to store uploaded images online.

---

## Install Nodemon

```bash
npm install --save-dev nodemon
```

### Why Nodemon?

Automatically restarts the server when changes are made.

---

# 📄 Package.json Scripts

Add these scripts inside package.json:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

# 🔐 Create .env File

Create a `.env` file in backend folder.

```env
PORT=4000
DBURL=your_mongodb_connection_string
SECRET_KEY=your_secret_key
CLOUD_NAME=your_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_secret
```

---

# ▶️ Start Backend Server

## Run Development Server

```bash
npm run dev
```

---

## Run Production Server

```bash
npm start
```

---

# 🌐 Backend Running URL

```bash
http://localhost:4000
```

---

# 🗄️ MongoDB Connection Setup

## Example Database Connection

```js
import mongoose from 'mongoose'

mongoose.connect(process.env.DBURL)
.then(() => console.log('Database Connected'))
.catch(err => console.log(err))
```

---

# 🖥️ Sample server.js File

```js
import 'dotenv/config'
import exp from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = exp()

// Middleware
app.use(exp.json())
app.use(cors())
app.use(cookieParser())

// Database Connection
mongoose.connect(process.env.DBURL)
.then(() => console.log('DB Connected'))
.catch(err => console.log(err))

// Routes
app.get('/', (req, res) => {
  res.send('Backend Running')
})

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
```

---

# 📡 API Routes

# User Routes

## Register User

```bash
POST /auth/users
```

---

## User Login

```bash
POST /auth/login
```

---

## Get Users

```bash
GET /users
```

---

# Author Routes

## Add Article

```bash
POST /author/article
```

---

## Get Articles

```bash
GET /author/articles
```

---

## Update Article

```bash
PUT /author/article/:id
```

---

## Delete Article

```bash
DELETE /author/article/:id
```

---

# Admin Routes

## Get All Users

```bash
GET /admin/users
```

---

## Delete User

```bash
DELETE /admin/user/:id
```

---

# 🔐 JWT Authentication

## Generate Token

```js
jwt.sign(payload, process.env.SECRET_KEY, {
  expiresIn: '1d'
})
```

---

## Verify Token

```js
jwt.verify(token, process.env.SECRET_KEY)
```

---

# 🔒 Password Hashing

## Hash Password

```js
bcrypt.hash(password, 5)
```

---

## Compare Password

```js
bcrypt.compare(password, hashedPassword)
```

---

# 🧩 Middleware Used

# verifyToken Middleware

Used to protect private routes.

Example:

```js
const verifyToken = (req, res, next) => {
  next()
}
```

---

# Error Handling Middleware

Used to handle server errors globally.

---

# ☁️ Cloudinary Configuration

## cloudinary.js

```js
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

export default cloudinary
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

# 📁 File Upload Setup

## Multer Example

```js
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })
```

---

# 🧠 Backend Concepts Used

## REST APIs

Used for frontend-backend communication.

---

## Middleware

Used to execute code before request handling.

---

## Authentication

Used to secure application routes.

---

## Database Models

Used to structure MongoDB collections.

---

# 📱 Features of Backend

* REST API Architecture
* JWT Authentication
* Password Encryption
* MongoDB Integration
* Cloudinary Uploads
* Protected Routes
* Role-Based Access
* Error Handling
* Middleware Support

---

# 🧪 API Testing Tools

* Postman
* Thunder Client

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
git commit -m "Backend Completed"
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

# 🚀 Backend Deployment on Render

# Build Command

```bash
npm install
```

---

# Start Command

```bash
npm start
```

---

# 🌐 Environment Variables on Render

Add these variables:

```env
PORT
DBURL
SECRET_KEY
CLOUD_NAME
API_KEY
API_SECRET
```

---

# 📚 Common Backend Errors

# Error: MongoDB Connection Failed

## Solution

Check:

* MongoDB URL
* Internet Connection
* MongoDB Atlas Network Access

---

# Error: JWT Malformed

## Solution

Send valid token in authorization header.

---

# Error: CORS Blocked

## Solution

Enable CORS middleware.

---

# Error: 500 Internal Server Error

## Solution

* Check backend logs
* Verify API routes
* Verify request body
* Check database connection

---

# 🎯 Learning Outcomes

After completing this backend project, you will understand:

* Node.js Server Creation
* Express.js Routing
* MongoDB Operations
* Authentication Flow
* JWT Token Handling
* Password Hashing
* REST APIs
* Middleware Usage
* Deployment Process

---

# 👨‍🎓 Viva Questions

# Why Node.js?

Node.js allows JavaScript to run on the server side.

---

# Why Express.js?

Express simplifies backend API development.

---

# Why MongoDB?

MongoDB stores data in flexible JSON format.

---

# Why JWT?

JWT provides secure authentication.

---

# Why bcryptjs?

bcryptjs securely hashes passwords.

---

# Why Middleware?

Middleware handles request processing before route execution.

---

# 📌 Conclusion

This backend application is developed using Node.js, Express.js, and MongoDB. It provides authentication, REST APIs, article management, secure password handling, image uploads, and frontend integration.

The project demonstrates real-world backend development concepts used in modern MERN stack applications.

```
```
