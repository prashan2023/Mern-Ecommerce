import express from "express";
import { createUser,loginUser,logoutCurrentUser,getAllUsers, currentUserProfile, updateCurrentUser, deleteUser, getUserProfile, updateUserById } from "../controllers/userControllers.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/createuser").post(createUser).get(authenticate,authorizeAdmin,getAllUsers);
router.post("/auth", loginUser);
router.post("/logout",logoutCurrentUser);
router.route("/userprofile").get(authenticate,currentUserProfile);
router.route("/updatecurrentUser").put(authenticate,updateCurrentUser);

// Admin routes
router.route(`/deleteUser/:id`).delete(authenticate,authorizeAdmin,deleteUser);
router.route(`/getuser/:id`).get(authenticate,authorizeAdmin,getUserProfile);
router.route(`/updateuser/:id`).put(authenticate,authorizeAdmin,updateUserById);


export default router;