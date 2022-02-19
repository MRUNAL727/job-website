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
import { fileURLToPath } from 'url';
import crypto from 'crypto'
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 8000 
config('dotenv')

var corsOptions = {
    origin: 'https://abcdedghijk.herokuapp.com/',  
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET, PUT, POST, DELETE"
  }

app.use(cors(corsOptions))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())



const database_url = process.env.MONGO_URL

const conn = mongoose.createConnection(database_url)


app.use('/', routes)

if(process.env.NODE_ENV= 'production'){
    app.use(express.static(path.join( __dirname ,"/client/build")))

     app.get("*", (req,response)=>{
      response.sendFile(path.resolve(__dirname, 'client', "build", "index.html"))
    })
  } 

  let gfs, gridfsBucket;
  conn.once('open', () => {
      
    //A GridFSBucket object is the root object representing a GridFS bucket.
        gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads'
      });
    
      gfs = Grid(conn.db, mongoose.mongo);
      gfs.collection('uploads');
    })
    const storage = new GridFsStorage({
      url: database_url,
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
            if (err) {
              return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
              filename: filename,
              bucketName: 'uploads'
            };
            resolve(fileInfo);
          });
        });
      }
    });
    const upload = multer({ storage });
    
    app.get('/', (req, res) => {
      gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
          res.render('index', { files: false });
        } else {
          files.map(file => {
            if (
              file.contentType === 'image/jpeg' ||
              file.contentType === 'image/png'
            ) {
              file.isImage = true;
            } else {
              file.isImage = false;
            }
          });
          res.render('index', { files: files });
        }
      });
    });

    app.post('/upload', upload.single('file'), (req, res) => {
      res.json({ file: req.file });
      res.redirect('/');
    });
  
  

mongoose.connect(database_url, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=> app.listen(PORT, ()=>
  console.log("Connected succesfully at port no", {PORT})))
 .catch((err)=> console.log(err.message));



