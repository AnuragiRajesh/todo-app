import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();


const jwtKey = crypto.randomBytes(64).toString("hex");



const AuthorizationToken = (id:any) => {
  // console.log(jwtKey,id)

  const token = jwt.sign(
    {id} ,
    jwtKey,
    {
      expiresIn: "2h",
    }
  );

  return token

};

const  AuthenticationToken =  (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split (' ')[1]
  console.log(token,"yes it is coming ")

  if (!token)
			{
				return res.status (403).send ("A token is required for authentication");
			}
      try {
       jwt.verify(token, jwtKey);
        return next()
        
      } catch (error) {
        console.log (error);
				return res.status (401).send ("Invalid Token");
      }
  
    

};

export {
  
  AuthenticationToken,AuthorizationToken
};