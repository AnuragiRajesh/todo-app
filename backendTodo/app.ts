
import dotenv from "dotenv";
import express,{ Request, Response, Application, NextFunction } from "express";
import {item} from './models/item'
import {user} from './models/user'
console.log(user,item)

const app:Application = express();
app.use(express.json)

dotenv.config()


import {DB} from './models/index'

const databaseConnection = async() => {
    try {
      await DB.authenticate();
      
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  
  }


app.get("/data")
const PORT:any = process.env.PORT?process.env.PORT: Number(4520)

app.listen(PORT, async()=>{
   await databaseConnection()
    console.log(`listing on port ${
        PORT
    }`)
})
