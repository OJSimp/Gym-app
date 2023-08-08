
import { userDataFromToken } from "../../hooks/userDataFromToken"

import { connect } from "../../../dbConfig/dbConfig"
import User from "../../../models/userModel"
import { NextRequest, NextResponse } from "next/server"
// import { useState } from "react"

connect()

export async function GET(request: NextRequest){

 // const [isLoading, setIsLoading] = useState(true)

 try{
  const userId = await userDataFromToken(request);
  const user = await User.findOne({_id: userId}).select("-password");
  
  return NextResponse.json({
      message: "User found",
      data: user
  })
    
  
 } catch(error:any){
  return NextResponse.json({error: error.message}, {status: 400})
 }
}