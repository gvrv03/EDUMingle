import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

// Define the product schema
const tutorialDetailsSchema = new Schema(
  {
    TutTitle: {
      type: ObjectId,
      ref: "tutorial",
      required: true,
    },
    SubTitle: {
      type: String,
      required: true,
    },
    TutArtical: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.tutorialDetail ||
  mongoose.model("tutorialDetail", tutorialDetailsSchema);
