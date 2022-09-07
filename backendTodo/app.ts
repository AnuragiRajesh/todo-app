// import { DB } from './models/index'
import express, {  Application } from 'express';
import cors from "cors"
// import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();



const app: Application = express();
app.use(cors())
// app.use(bodyParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(express.json());
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded());
  



const port = process.env.PORT;
import { getUser, createUser, deleteUser } from "./controllers/user.controller";
import { getItem, createItem,updateItem ,deleteItem,deleteAll} from "./controllers/item.controller";
import {AuthenticationToken} from './middleware/jwt'


app.post('/login', getUser);
app.post('/user', createUser)
app.delete('/user/:id',AuthenticationToken, deleteUser)



app.get('/item/:id',AuthenticationToken, getItem)
app.post('/item/:id',AuthenticationToken, createItem)
app.patch('/item/:id',AuthenticationToken,updateItem)
app.delete('/item/:id',AuthenticationToken, deleteItem)
// app.delete('item/deleteAll/:id',AuthenticationToken, deleteAll)


















app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
