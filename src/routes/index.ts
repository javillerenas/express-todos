import { Router } from "express";
import {
  getTodos,
  addTodo,
  completeTodo,
  deleteTodo,
} from "../controllers/todos";
import bodyParser from "body-parser";

const router: Router = Router();

router.get("/todos", getTodos);
router.post("/todo", bodyParser.json(), addTodo);
router.put("/todo/:id/complete", completeTodo);
router.delete("/todo/:id", deleteTodo);

export default router;
