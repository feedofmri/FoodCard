import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import foodRoutes from "./routes/food.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/foods", foodRoutes);


app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http://localhost:"+ PORT);
});
