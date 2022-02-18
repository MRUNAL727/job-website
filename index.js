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

const app = express();

const PORT = 8000

config('dotenv')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(cookieParser())


const database_url = 'mongodb+srv://mrunal:mrunal@cluster0.li1jl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



app.use('/', routes)

mongoose.connect(database_url, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=> app.listen(PORT, ()=>
  console.log("Connected succesfully at port no", {PORT})))
 .catch((err)=> console.log(err.message));



