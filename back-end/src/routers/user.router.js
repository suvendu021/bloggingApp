import Router from "express";
import {
  registerUser,
  logInUser,
  logOutUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/logIn").post(logInUser);

router.route("/logout").post(verifyJWT, logOutUser);

export { router };
