import express from "express";
import "dotenv/config";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});