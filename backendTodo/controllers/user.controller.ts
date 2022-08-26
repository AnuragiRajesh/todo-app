
import  { Request, Response } from "express";

import {AuthorizationToken} from "../middleware/jwt"
import { user } from "../models/user";



const getUser = async (req: Request, res: Response) => {


    
  try {
  
    console.log("yes")
    const resp = await user.findOne({where:{email:req.body.email}
    });
    if (resp ){
      // console.log(resp.id)
      if( resp.password==req.body.password &&  resp.email==req.body.email ) {
        

        const token = AuthorizationToken(resp.id);
        // console.log(token)
      
     return res
          .status(200)
          .json({ msg: "successfully fetched the user", verificationToken: token, response: resp });
      }
      return res.send({ msg: "wrong password or email" })
    }else{
      return res.send({ msg: "user does not exist", response: resp })

    }
  } catch (error) {
    console.log(error);
   return res.status(400).json({ msg: "Bad request", Error: error });
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
  }}


  const deleteUser = async (req: Request, res: Response) => {
    
  try {
    console.log(req.params.id,"ppppppppppppppppppppppppppppppppppppppppppp")
    const resp = await user.destroy({where:{id:Number(req.params.id.replace(":", "")) }})
    res
      .status(200)
      .json({ msg: "successfully deleted the author", response: resp });
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Bad request", Error: error });
  }


};

export { createUser, getUser, deleteUser  };