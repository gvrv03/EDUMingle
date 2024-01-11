import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

// Define the product schema
const tutorialSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Thumbnail: {
      type: String,
      required: true,
    },
    Keywords: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.tutorial ||
  mongoose.model("tutorial", tutorialSchema);
