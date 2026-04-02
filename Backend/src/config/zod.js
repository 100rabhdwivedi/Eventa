import { z } from 'zod'

const registerValidation = z.object({
  name: z.string().max(50, "Name must be less than 50 characters"),
  email: z.string().max(50, "Email must be less than 50 characters"),
  password: z.string()
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be less than 20 characters")
})