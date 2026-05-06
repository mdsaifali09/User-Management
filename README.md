# 🚀 User Management Dashboard (MERN Stack)

A full-stack **User Management Dashboard** built using the MERN stack.
This application allows users to be added, viewed, searched, and sorted with a clean and responsive UI.

---

## 🌐 Live Demo

🔗 Frontend (Vercel):
https://mdsaifali09-user-anagement.vercel.app/

🔗 Backend API (Render):
https://user-management-zs4m.onrender.com/api/users

---

## 📂 GitHub Repository

🔗 Source Code:
https://github.com/mdsaifali09/User-Management.git

---

## ✨ Features

* ➕ Add new users
* 📋 View all users
* 🔍 Search users by name (with debounce)
* 🔃 Sort users (A → Z / Z → A)
* ⚡ Real-time updates after adding user
* ⏳ Loading state handling
* ❌ Error handling
* 📭 Empty state handling

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React (Vite)
* Tailwind CSS

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB (Mongoose)

---

## ⚙️ How It Works

1. Frontend sends requests to backend APIs
2. Backend processes data and interacts with MongoDB
3. Data is returned and displayed in the UI
4. Users can search, sort, and add data dynamically

---

## 📡 API Endpoints

### GET Users

```
GET /api/users
```

### Create User

```
POST /api/users
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mdsaifali09/User-Management.git
cd User-Management
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create `.env` file:

```
VITE_API_URL=https://user-management-zs4m.onrender.com/api/users
```

---

## 🚀 Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**
* Database hosted on **MongoDB Atlas**

---

## 🧠 Key Learnings

* Full-stack MERN development
* API integration and error handling
* Implementing debounce in React
* Managing state using hooks
* Deployment of frontend and backend separately

---

## 📌 Future Improvements

* Edit/Delete user functionality
* Authentication (Login/Signup)
* Pagination for large data
* UI animations and enhancements

---

## 👨‍💻 Author

**Saif Ali**
🔗 GitHub: https://github.com/mdsaifali09

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repository!
