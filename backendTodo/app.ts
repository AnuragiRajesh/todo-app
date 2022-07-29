import { DB } from './models/index'
import express, {  Application } from 'express';
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();


const app: Application = express();
app.use(cors())
app.use(express.json());
const port = process.env.PORT;
import { getUser, createUser } from "./controllers/user.controller"
import { getItem, createItem } from "./controllers/item.controller"


app.get('/user', getUser);
app.post('/user', createUser)



app.get('/item', getItem)
app.post('/item', createItem)


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
