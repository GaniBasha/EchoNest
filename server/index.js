import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import songRoutes from "./routes/songRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static for uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Base
app.get("/", (req, res) => {
  res.send("🎵 Spotify Clone API is running with Playlists...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);

// DB connect
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`)))
  .catch((err) => console.log("❌ DB Error: ", err));
