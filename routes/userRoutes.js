import express from "express";
import { getUser, login, createUser, getScores, postScore } from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.route("/:id").get(getUser);
userRouter.route("/login").post(login);
userRouter.route("/register").post(createUser);
userRouter.route("/:id/scores").get(getScores);
userRouter.route("/scores").post(postScore);

export { userRouter };
