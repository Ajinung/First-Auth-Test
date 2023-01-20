import { Router } from "express";
import { getUsers, logIn, regUser } from "../controller/user.controller";

const router = Router();

router.route("/register").post(regUser);
router.route("/login").post(logIn);
router.route("/users").get(getUsers);

export default router;
