import {z} from 'zod'

export const messageSchema = z.object({
    content:z.string().min(10, {message:"must be atlease 10 character"}).max(250, {message:"can be max 250 character"})
})