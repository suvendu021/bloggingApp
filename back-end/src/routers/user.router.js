import Router from "express";
import {
  registerUser,
  logInUser,
  logOutUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(logInUser);

userRouter.route("/logout").post(verifyJWT, logOutUser);

export { userRouter };
