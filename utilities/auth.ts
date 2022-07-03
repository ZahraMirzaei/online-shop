import jwt from "jsonwebtoken";
import { IUser } from "../lib/types/user";

export const signToken = (user: IUser) => {
  return jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};
