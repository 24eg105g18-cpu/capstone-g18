import 'dotenv/config'  // add this as first line
import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { authorApp } from './APIs/AuthorAPI.js'
import { adminApp } from './APIs/AdminAPI.js'
import { commonApp } from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = exp()

app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        'http://localhost:5173',
        'http://localhost:5174',
      ]
      // Allow any vercel.app subdomain
      const vercelPattern = /^https:\/\/.*\.vercel\.app$/

      if (!origin || allowedOrigins.includes(origin) || vercelPattern.test(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true
  })
)

//add cookie parser middleware
app.use(cookieParser())

//body parser middleware
app.use(exp.json())

//path level middleware
app.use('/user-api', userApp)
app.use('/author-api', authorApp)
app.use('/admin-api', adminApp)
app.use('/auth', commonApp)

// Dedicated Database Connection Function
const connectDB = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL environment variable is missing!")
    }
    await connect(process.env.DB_URL, { family: 4 })
    console.log('DB Connected successfully')
  } catch (err) {
    console.error('Error in DB Connect:', err.message)
  }
}

// Start the server immediately so Render's health check passes, 
// using Render's dynamic port or defaulting to 4000 locally.
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
  
  // Initiate DB connection in the background
  connectDB()
})

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url)
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

//To handle errors
app.use((err, req, res, next) => {
  console.log(err.name)
  console.log(err)
  //ValidationError
  if (err.name === 'ValidationError')
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  //CastError
  if (err.name === 'CastError')
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  //Send server side errors
  res.status(500).json({ message: 'Error occured', error: err.message })
})
