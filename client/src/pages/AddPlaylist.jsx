import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPlaylist() {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    movie: "",
  });
  const [file, setFile] = useState(null);
  const [cover, setCover] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null); // ✅ for preview
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleCoverChange = (e) => {
    const selectedFile = e.target.files[0];
    setCover(selectedFile);
    if (selectedFile) {
      setCoverPreview(URL.createObjectURL(selectedFile)); // ✅ preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("artist", formData.artist);
    form.append("movie", formData.movie);
    if (file) form.append("file", file);
    if (cover) form.append("cover", cover);

    try {
      await axios.post("http://localhost:5000/api/songs", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("✅ Playlist uploaded successfully!");
      setTimeout(() => navigate("/songs"), 1500);
    } catch (err) {
      console.error("❌ Upload failed:", err);
      setMessage("❌ Failed to upload playlist.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">🎶 Add Playlist</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Playlist Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
            required
          />
          <input
            type="text"
            name="artist"
            placeholder="Artist Name"
            value={formData.artist}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
            required
          />
          <input
            type="text"
            name="movie"
            placeholder="Movie Name"
            value={formData.movie}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
          />

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              🎵 Song File (mp3)
            </label>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="w-full text-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              🖼 Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverChange}
              className="w-full text-gray-300"
            />

            {/* ✅ Preview Image */}
            {coverPreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Preview:</p>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                  <img
                    src={coverPreview}
                    alt="Cover Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Upload Playlist
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 font-medium text-gray-300">{message}</p>
        )}
      </div>
    </div>
  );
}

export default AddPlaylist;
