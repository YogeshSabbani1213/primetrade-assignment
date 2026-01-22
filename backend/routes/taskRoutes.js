import express from "express";
import auth from "../middleware/auth.js";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.delete("/:id", auth, deleteTask);

export default router;
