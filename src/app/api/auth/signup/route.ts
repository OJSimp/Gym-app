import {connect} from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import validator from 'validator';
// import { sendEmail } from "../../../helpers/mailer";

connect()

export async function POST(req: NextRequest, res: NextResponse){
    try {
        const reqBody = await req.json()
        const {email, password} = reqBody

        //check if user already exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "Email already exists"}, {status: 400})
        }
        if (!email || !password) {
            return NextResponse.json({error: "Email & Ppassword empty"}, {status: 401});
        }
        if (!validator.isEmail(email)) {
            return NextResponse.json({error: "Email is invalid"}, {status: 402});
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!passwordRegex.test(password)){
            return NextResponse.json({error: "Password is does not fit requirements"}, {status: 410});
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        console.log("new user", email, hashedPassword);

        const newUser = User.create({
                email: email,
                password: hashedPassword
            })

        console.log("new user", newUser);

        //send verification email
        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            newUser
        })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}