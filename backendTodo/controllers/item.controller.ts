import { Request, Response } from "express";
import {item} from '../models/item';



const createItem = async (req: Request, res:Response)=>{
  
  try {
    console.log("its comingllllllllllllllllllllllllllllllllllllllllllllllll", req.body)
    const resp = await item.create(req.body);
    res
      .status(200)
      .json({ msg: "successfully added the item", response: resp });
    console.log(resp);
  } catch (error) {
    console.log(error);
      res.status(400).json({ msg: "Bad request", Error: error });
    
    
    };
}

const getItem = async (req: Request, res:Response)=>{
    console.log("yres")
  
    try {
      const resp = await item.findAll();
      res
        .status(200)
        .json({ msg: "successfully fetched the items", response: resp });
      // console.log(resp);
    } catch (error) {
      console.log(error);
        res.status(400).json({ msg: "Bad request", Error: error });
      
      
      };
  }

export {getItem, createItem}