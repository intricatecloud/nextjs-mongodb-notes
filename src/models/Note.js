import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title."],
      trim: true,
      maxlength: [40, "Title cannot be more than 40 characters."],
      unique: true,
    },
    content: {
      type: String,
      required: [true, "Please provide a content."],
      maxlength: [500, "Content cannot be more than 500 characters."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
