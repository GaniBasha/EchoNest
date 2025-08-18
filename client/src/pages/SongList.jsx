import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(null);
  const audioRef = useRef(null);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/songs`);
        setSongs(res.data);
      } catch (err) {
        console.error("❌ Error fetching playlists:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, [API_URL]);

  const handlePlay = (index) => {
    setCurrentIndex(index);
    if (audioRef.current) {
      audioRef.current.src = `${API_URL}${songs[index].fileUrl}`;
      audioRef.current.play();
    }
  };

  const handleNext = () => {
    if (currentIndex !== null && currentIndex < songs.length - 1) {
      handlePlay(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      handlePlay(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white h-screen overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-2xl mb-6">
        <h1 className="text-3xl font-bold text-purple-400">🎵 Playlists</h1>
        <Link
          to="/songs/add"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-purple-700"
        >
          + Add Playlist
        </Link>
      </div>

      {/* Songs List */}
      <div className="flex-1 w-full max-w-2xl overflow-y-scroll scrollbar-hide px-2 pb-28">
        {loading ? (
          <p className="text-gray-300 text-lg">Loading playlists...</p>
        ) : songs.length === 0 ? (
          <p className="text-gray-300 text-lg">No playlists uploaded yet.</p>
        ) : (
          <div className="space-y-6">
            {songs.map((song, index) => (
              <div
                key={song._id}
                className="bg-gray-900 p-4 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {song.coverUrl && (
                  <img
                    src={`${API_URL}${song.coverUrl}`}
                    alt={song.title}
                    className="rounded-lg mb-3 w-full h-48 object-cover"
                  />
                )}
                <h2 className="text-xl font-semibold text-white">
                  {song.title}
                </h2>
                <p className="text-gray-400">🎤 {song.artist}</p>
                <p className="text-gray-500">🎬 {song.movie}</p>

                <div className="flex justify-between mt-3">
                  <button
                    onClick={handlePrev}
                    className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600"
                  >
                    ⏮ Prev
                  </button>
                  <button
                    onClick={() => handlePlay(index)}
                    className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700"
                  >
                    ▶ Play
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600"
                  >
                    ⏭ Next
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Global Audio Player */}
      <audio
        ref={audioRef}
        controls
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 shadow-lg rounded-lg bg-gray-800"
      ></audio>
    </div>
  );
}

export default SongList;
