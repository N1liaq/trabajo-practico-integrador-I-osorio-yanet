import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
} from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.post("/profiles", createProfile);
profileRouter.get("/profiles", getAllProfile);
profileRouter.get("/profiles/:id", getProfileById);
profileRouter.put("/profiles/:id", updateProfile);
profileRouter.delete("/profiles/:id", deleteProfile);
