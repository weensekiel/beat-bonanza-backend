import express from "express";
import cors from "cors";

const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});