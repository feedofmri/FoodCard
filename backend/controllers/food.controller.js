import mongoose from "mongoose";
import Food from "../models/food.model.js";


export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error("Error in fetching foods", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


export const addFood = async (req, res) => {
  const food = req.body;

  if (!food.name || !food.calories || !food.price || !food.image) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const newFood = new Food(food);

  try {
    await newFood.save();
    res.status(201).json({ success: true, data: newFood });
  } catch (error) {
    console.error("Error in adding food", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


export const updateFood = async (req, res) => {
  const { id } = req.params;
  const food = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid food id" });
  }

  try {
    const updatedFood = await Food.findByIdAndUpdate(id, food, { new: true });
    res.status(200).json({ success: true, data: updatedFood });
  } catch (error) {
    console.error("Error in updating food", error.message);
    res.status(500).json({ success: false, message: "Food not found" });
  }
};


export const deleteFood = async (req, res) => {
  const { id } = req.params;

  try {
    await Food.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Food is deleted" });
  } catch (error) {
    console.error("Error in deleting food", error.message);
    res.status(500).json({ success: false, message: "Food not found" });
  }
};