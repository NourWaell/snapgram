import * as z from "zod";

export const SignupFormSchema = z.object({
  name: z.string().min(2, { message: "name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "username must be at least 2 characters." }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const PostFormSchema = z.object({
  caption: z.string().min(0).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(0).max(2200),
  tags: z.string(),
});
