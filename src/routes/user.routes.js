import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/user", createUser);
userRouter.get("/user", getAllUser);
userRouter.get("/user", getUserById);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);
