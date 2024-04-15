import express from "express";
import { getUser, login, createUser } from "../controllers/user-controller.js"

const userRouter = express.Router();

userRouter.route("/:id").get(getUser);
userRouter.route("/login").post(login);
userRouter.route("/register").post(createUser);

export { userRouter };