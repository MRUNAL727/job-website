import express from 'express';
import cors from 'cors';
import routes from './routes/router.js';
import mongoose from 'mongoose'
// import User from '../models/userModel'
import User from './models/userModel.js'
import companyModel from './models/companyModel.js';
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import dotenv, { config } from 'dotenv'
import path from 'path';

const app = express();

const PORT = 8000
config('dotenv')

var corsOptions = {
    origin: 'https://asdjbaksjdbkab.herokuapp.com',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET, PUT, POST, DELETE"
  }

app.use(cors(corsOptions))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())



const database_url = process.env.MONGO_URL



app.use('/', routes)


if(process.env.NODE_ENV= 'production'){
    app.use(express.static(path.resolve("/client/build")))

     app.get("*", (req,response)=>{
      response.sendFile(path.resolve('client', "build", "index.html"))
    })
  } 

mongoose.connect(database_url, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=> app.listen(PORT, ()=>
  console.log("Connected succesfully at port no", {PORT})))
 .catch((err)=> console.log(err.message));



