import { DB } from './models/index'
import express, {  Application } from 'express';
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();


const app: Application = express();
app.use(cors())
app.use(express.json());
// app.use(express.urlencoded());
const port = process.env.PORT;
import { getUser, createUser } from "./controllers/user.controller"
import { getItem, createItem,updateItem ,deleteItem,deleteAll} from "./controllers/item.controller"


app.get('/user', getUser);
app.post('/user', createUser)



app.get('/item:id', getItem)
app.post('/item:id', createItem)
app.patch('/item/:id',updateItem)
app.delete('/item/:id',deleteItem)
app.get('item/deleteAll/:id')


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
