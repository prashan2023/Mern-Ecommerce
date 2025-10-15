import express from "express";
import { createUser,loginUser,logoutCurrentUser,getAllUsers, currentUserProfile, updateCurrentUser } from "../controllers/userControllers.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/createuser").post(createUser).get(authenticate,authorizeAdmin,getAllUsers);
router.post("/auth", loginUser);
router.post("/logout",logoutCurrentUser);
router.route("/userprofile").get(authenticate,currentUserProfile);
router.route("/updatecurrentUser").put(authenticate,updateCurrentUser)


export default router;