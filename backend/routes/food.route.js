import express from "express";

import { addFood, deleteFood, getFoods, updateFood } from "../controllers/food.controller.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", addFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
