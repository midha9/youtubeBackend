import { Router } from "express";
import {
  loginUser,
  registerUser,
  refreshAccessToken,
} from "../controllers/user.controller.js"; // Import login
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
// router.route("/login").post(login); // Now login is properly imported

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;
