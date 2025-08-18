import mongoose from "mongoose";

const SongSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    movie: { type: String }, // ✅ renamed from movieName → movie (not required)
    fileUrl: { type: String, required: true },
    coverUrl: { type: String },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Song", SongSchema);
