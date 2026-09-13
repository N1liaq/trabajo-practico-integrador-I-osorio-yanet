import { Router } from "express";
import {
  createArticleTag,
  deleteArticleTag,
  getAllArticleTag,
  getArticleTagById,
  updateArticleTag,
} from "../controllers/article.tag.controller.js";

const articleTagRouter = Router();

articleTagRouter.post("/articlesTags", createArticleTag);
articleTagRouter.get("/articlesTags", getAllArticleTag);
articleTagRouter.get("/articlesTags/:id", getArticleTagById);
articleTagRouter.put("/articleTags/:id", updateArticleTag);
articleTagRouter.delete("/articlesTags/:id", deleteArticleTag);
