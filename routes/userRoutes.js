import express from "express";
import { getUser } from "../controllers/user-controller.js"

const userRouter = express.Router();

userRouter.route("/:id").get(getUser);

export { userRouter };