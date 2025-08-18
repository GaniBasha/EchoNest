
# 🎶 EchoNest - Music Streaming Web App

EchoNest is a **full-stack music streaming platform** where users can register, log in, upload songs with cover images, and listen to playlists.  
Built with the **MERN stack (MongoDB, Express, React, Node.js)**, it provides a seamless, ad-free music experience.  

---

## ✨ Features

- 🔐 User Authentication (Register/Login with JWT)  
- 🎵 Upload songs with cover images  
- 🖼 Beautiful UI with TailwindCSS  
- 📂 Playlists stored in MongoDB  
- 🚀 Deployed backend on Render & frontend ready for deployment (Vercel/Netlify)  
- 🎧 Responsive design for mobile and desktop  

---

## 🛠️ Tech Stack

**Frontend:** React, TailwindCSS, Axios, React Router  
**Backend:** Node.js, Express.js, Multer (file upload), JWT Auth, Bcrypt.js  
**Database:** MongoDB (Mongoose)  
**Deployment:** Render (Backend), Vercel/Netlify (Frontend)  

---

## 📂 Project Structure

```

EchoNest/
│── client/        # React frontend
│   ├── src/
│   │   ├── pages/ # Login, Register, Home, Songs, AddPlaylist
│   │   ├── components/ # Navbar, Banner, etc.
│   │   └── App.js
│   └── package.json
│
│── server/        # Express backend
│   ├── routes/    # authRoutes.js, songRoutes.js
│   ├── models/    # User.js, Song.js
│   ├── uploads/   # Stored cover images & songs
│   ├── index.js
│   └── package.json
│
│── README.md
│── .gitignore

````

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/EchoNest.git
cd EchoNest
````

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
```

Run the backend:

```bash
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
```

Create a `.env` file inside `client/`:

```
REACT_APP_API_URL=https://your-backend.onrender.com
```

Run the frontend:

```bash
npm start
```

---

## 🚀 Deployment

* **Backend (Express + MongoDB)** → [Render](https://render.com/)
* **Frontend (React)** → [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)

Once deployed, update all API calls in React to use:

```
process.env.REACT_APP_API_URL
```

---

## 📸 Screenshots

* 🔐 Login & Register Page
* 🏠 Home Banner
* 🎵 Songs Page
* ➕ Add Playlist Page

---

## 👨‍💻 Author

**Shaik Gani Basha**
🎓 CSE (AIML) Student - 4th Year
📍 Chebrolu Engineering College

---

## ⭐ Contribute

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is **open-source** under the MIT License.

