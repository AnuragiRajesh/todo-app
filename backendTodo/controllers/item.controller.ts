import { Request, Response } from "express";
import { item } from '../models/item';



const createItem = async (req: Request, res: Response) => {

  try {
    console.log("its comingllllllllllllllllllllllllllllllllllllllllllllllll", req.params.id)
    // let data = {list:req.body.list, userId:req.params.id}
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

const getItem = async (req: Request, res: Response) => {
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
const deleteItem = async (req: Request, res: Response) => {
  console.log("yres")

  try {
    
    
    const resp:any = await item.destroy({
    where: {
      list: JSON.stringify(req.body.item)
    }


  });
    res
      .status(200)
      .json({ msg: "successfully deleted the item", response: resp });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Bad request", Error: error });


  };
}
const deleteAll = async (req: Request, res: Response) => {
  

  try {
    const resp = await item.destroy({
      truncate: true
    });
    res
      .status(200)
      .json({ msg: "successfully deleted all the items", response: resp });
    
    
  
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Bad request", Error: error });


  };
}

const updateItem = async (req: Request, res: Response) => {
  
  try {
    
    // console.log(req.params.id,"llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll", req.body)

    const resp = await item.update({ list: req.body.updatedItem }, {
      where: {
        
        list:req.body.item
      }
    })
    res
      .status(200)
      .json({ msg: `successfully updated the items `, response: resp });
    // console.log(resp);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Bad request", Error: error });


  };
}

export { getItem, createItem,updateItem,deleteItem, deleteAll }