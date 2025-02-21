import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // Import login

const router = Router();

router.route("/register").post(registerUser);
// router.route("/login").post(login); // Now login is properly imported

export default router;
