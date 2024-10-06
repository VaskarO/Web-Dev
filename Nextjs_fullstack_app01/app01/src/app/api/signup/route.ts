import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypejs from "bcryptjs";

export async function POST(request:Request){
    await dbConnect()
    try {
        const {username, email, password} = await request.json()
        const existingUserVerification = await UserModel.findOne({
            username,
            isVerified:true
        })

        if(existingUserVerification){
            return Response.json({
                success:false,
                message:'Username already exists',
                },
                {
                    status: 400,
                }
            )
        }
    const userEmailVerify = await UserModel.findOne({email})
    if(userEmailVerify){
        return Response.json({
            success:false,
            message:'Email already exists',
            },
            {
                status: 400,
            }
        )
    }else{
        const hashPassword = await bcrypt.hash(password, 10)
        const expiryDate = new Date()
        expiryDate.setHours(expiryDate.getHours()+1)

        const newUser = new UserModel({
            username,
            email,
            password:hashPassword,
            verifyCode:"verifyCode",
            verifyCodeExpiry:expiryDate,
            isVerified:true,
            isAcceptingMessage:true,
            messages : []
        })
        await newUser.save()
    }
    return Response.json({
        success:true,
        message:"User registered successfully,"
    },
{
    status:200,
})


    } catch (error) {
        console.log(error)
        return Response.json(
            {
                success:false,
                message:'Error on registring user.'
            },
            {
                status: 500
            }
        )
    }
}