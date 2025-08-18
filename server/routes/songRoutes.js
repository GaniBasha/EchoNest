import express from "express";
import multer from "multer";
import Song from "../models/Song.js";

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ✅ Get all playlists
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find().populate("uploadedBy", "name email");
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: "❌ Error fetching playlists" });
  }
});

// ✅ Upload playlist
router.post(
  "/",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { title, artist, movie, uploadedBy } = req.body;

      const fileUrl = req.files["file"]
        ? `/uploads/${req.files["file"][0].filename}`
        : "";
      const coverUrl = req.files["cover"]
        ? `/uploads/${req.files["cover"][0].filename}`
        : "";

      const newSong = new Song({
        title,
        artist,
        movie,      // ✅ renamed to match schema
        fileUrl,
        coverUrl,
        uploadedBy,
      });

      await newSong.save();
      res.status(201).json(newSong);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "❌ Error adding playlist" });
    }
  }
);

export default router;
