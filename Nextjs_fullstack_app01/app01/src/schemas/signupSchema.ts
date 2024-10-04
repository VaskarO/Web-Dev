import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "min length 2 characters")
    .max(25, "max length 25 character ")
    .regex(/^[a-zA-Z0-9_]+$/, "must not contain special character")

export const signUpSchema = z.object({
    username : usernameValidation,
    email:z.string().email({message:"invalid email address"}),
    password:z.string().min(6,{message:"min 5 character required"}),
})
