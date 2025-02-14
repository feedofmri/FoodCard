import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
    }, {
    timestamps: true // createdAt, updatedAt
    });

const Food = mongoose.model('Food', foodSchema);

export default Food;