import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.post("/foods", async (req, res) => {});
const food = req.body;

if (!food.name || !food.calories || !food.price || !food.image) {
  res.status(400).json({ success: false, message: "All fields are required" });
}

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on http://localhost:3000");
});
