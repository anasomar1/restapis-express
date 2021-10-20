import express from "express";
import studentsRouter from "./routes/students.js";

const app = express();

app.use(express.json());

app.use("/students", studentsRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
