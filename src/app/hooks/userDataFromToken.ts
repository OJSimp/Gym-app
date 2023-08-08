import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export const userDataFromToken = (request: NextRequest) => {
 

 try{
  const token = request.cookies.get("token")?. value || ''
  const verifyToken:any = jwt.verify(token, process.env.TOKEN_SECRET!)
  return verifyToken.id;

 } catch(error:any){
 
  throw new Error(error.message)
 }
 
};
