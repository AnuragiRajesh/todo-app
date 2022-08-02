import  { Request, Response } from "express";
import { item } from "../models/item";
// import * as jwt from "jsonwebtoken";
import { user } from "../models/user";

// const loginUser = (req: Request, res: Response) => {
//   const { firstName, email } = req.body;
//   console.log(req.body);

//   const token = jwt.sign({ firstName, email }, "This is dummy text", {
//     expiresIn: "12h",
//   });
//   console.log(token);
//   res.send(`authorized: ${token}`);
// };


const getUser = async (req: Request, res: Response) => {
  try {
    // const id = req.params.id
    console.log("yes")
    const resp = await user.findAll({
    //   include: {
    //     model: item,
    //   },
    });
    res
      .status(200)
      .json({ msg: "successfully fetched the authors", response: resp });
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Bad request", Error: error });
  }
};

const createUser = async (req: Request, res: Response) => {
    console.log(req.body)
  try {
    // const id = req.params.id
    const resp = await user.create(req.body);
    res
      .status(200)
      .json({ msg: "successfully created the author", response: resp });
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Bad request", Error: error });
  }
};

export { createUser, getUser };