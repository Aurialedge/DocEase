import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

// app config
const app=express()
const port = process.env.PORT || 4000
connectDB()

// middlewares
app.use(express.json()) // parses the incoming data into the json format so it can be accessible using the req.body
app.use(cors()) // allows the frontend to connect with the backend

// api endpoints

app.get('/',(req,res)=>{
    res.send('API working')
})

app.listen(port,()=> console.log("Server Started ", port))