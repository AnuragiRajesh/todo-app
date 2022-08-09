import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import crypto from 'crypto';

const jwtKey = crypto.randomBytes(64).toString("hex");


const AuthorizationToken = (id:any) => {
  const token = jwt.sign(id, jwtKey, {
		algorithm: "HS256",
		expiresIn: 300,
	})

  // const token = jwt.sign(id, secreteToken);
  // return token;
};

const AuthenticationToken = (req:Request, res:Response, next:NextFunction) => {
  const cookie = req.cookies.token
  console.log(cookie  )
  
    // const token = cookie.split("=")[1];
  //   if(

  //     jwt.verify(token, secreteToken)
  //   ){
  //    return next();

  //   }else{
  //    return res.send("Have not Login yet ?");
  //   }    
  // } else {
  //  return res.send("Have not Login yet ?");
  // }
 
    if (!cookie) {
      return res.status(401).end()
    }
  
    var payload
    try {
      // Parse the JWT string and store the result in `payload`.
      // Note that we are passing the key in this method as well. This method will throw an error
      // if the token is invalid (if it has expired according to the expiry time we set on sign in),
      // or if the signature does not match
      payload = jwt.verify(cookie, jwtKey)
    } catch (e) {
      if (e instanceof jwt.JsonWebTokenError) {
        // if the error thrown is because the JWT is unauthorized, return a 401 error
        return res.status(401).end()
      }
      // // otherwise, return a bad request error
      return res.status(400).end()
    }

};

export {
  
  AuthenticationToken,AuthorizationToken
};