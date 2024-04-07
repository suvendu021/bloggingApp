import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessTokenAndRefreshToken = async function (userId) {
  try {
    const user = await User.findById(userId);
    const accessToken = await User.generateAccessToken();
    const refreshToken = await User.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      501,
      error?.message || "error during generate AccessToken And RefreshToken"
    );
  }
};

//------------------register user-----------------
const registerUser = AsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((info) => info?.trim() === "")) {
    throw new ApiError(401, "All fields are needed");
  }
  const existedUser = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (existedUser) {
    throw new ApiError(401, "username or email already existed");
  }
  const user = await User.create({
    username: username.toLowerCase(),
    email,
    password,
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "user is successfully register"));
});

const logInUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    throw ApiError(401, "user not found");
  }
  const isPasswordCorrect = await User.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw ApiError(402, "invalid password");
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  const loggedInUser = await User.findById(user._id).select(
    "-refreshToken -password"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      200,
      { loggedInUser, accessToken, refreshToken },
      "user is successfully logged in"
    );
});

const logOutUser = AsyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },

    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, "user loggedOut successfully"));
});

export { registerUser, logInUser, logOutUser };
