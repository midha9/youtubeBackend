import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // these are steps what we want from user how do we want user to register in our application
  // get user details from frontent
  // validation - not empty
  // check if user already exists: through username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return
});

export { registerUser };
