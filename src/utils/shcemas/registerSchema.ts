import { z } from "zod";

// REGISTER FORM SCHEMA
export const registerSchema = z.object({
  name: z.string().min(3, {
    message: "Name is required.",
  }),
  email: z.string().email("Invalid email format."),
  password: z.string({
    message: "Password is required.",
  }).min(6, {
    message: "Password should be atleast 6 characters long.",
  }),
  cpassword: z.string({
    message: "Password is required.",
  }).min(6, {
    message: "Password should be atleast 6 characters long.",
  })
}).refine((data) => data.password === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"], // Path of error
  });

// LOGIN FORM SCHEMA
export const loginSchema = z.object({
    email: z.string().email("Invalid email format."),
    password: z.string({
      message: "Password is required.",
    }).min(6, {
      message: "Password should be atleast 6 characters long.",
    })
  });