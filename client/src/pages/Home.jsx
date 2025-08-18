import React from "react";
import bannerImage from "../assets/banner.jpg"; // make sure the image exists

function Home() {
  return (
    <div
      className="relative flex items-start justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Text Overlay */}
      <div className="absolute top-20 text-center max-w-4xl px-6">
        <h1 className="text-5xl font-extrabold mb-6 text-purple-300 drop-shadow-lg">
          Unlock the Soundtrack of Your Life
        </h1>
        <p className="text-lg leading-relaxed drop-shadow-md">
          Discover, stream, and share music like never before.  
          Dive into millions of songs, curated playlists, and personalized recommendations—all tailored just for you.  
          Whether you're working, working out, or winding down, EchoNest delivers the perfect beat for every moment.
        </p>
        <ul className="mt-8 text-lg space-y-3 font-medium drop-shadow-lg">
          <li>🎧 <b>Listen anytime, anywhere</b> – No ads, no interruptions.</li>
          <li>🔥 <b>Personalized for you</b> – Smart recommendations based on your taste.</li>
          <li>📱 <b>Sync across devices</b> – Pick up where you left off, anytime.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
