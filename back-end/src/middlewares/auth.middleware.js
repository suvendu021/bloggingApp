import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJWT = AsyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(400, "UnAutherized access");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-refreshToken -password"
    );
    if (!user) {
      throw new ApiError(401, "invalid accessToken");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(400, error?.message || "invalid accessToken");
  }
});

export { verifyJWT };
