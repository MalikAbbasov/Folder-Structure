import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    Username: String,
    Email: String,
    Password: { type: String, required: true },
    Age: Number,
    isMarried: Boolean, 
  }); 

export const userModel = mongoose.model("myusers", userSchema);