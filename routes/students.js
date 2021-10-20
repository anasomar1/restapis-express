import express from "express";
import {
  getStudents,
  getStudent,
  deleteStudent,
  addStudent,
  updateStudent,
} from "../controllers/students.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.delete("/:id", deleteStudent);
router.post("/", addStudent);
router.patch("/:id", updateStudent);

export default router;
