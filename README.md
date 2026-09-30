# ParhaiHub

**ParhaiHub** is a MERN-stack online learning platform designed to provide a simple and interactive learning experience for students and teachers.

## 🎯 Objective

The objective of ParhaiHub is to provide an online education platform where:

* Students can explore and access learning courses.
* Teachers can create and manage courses.
* Students can track their learning progress.
* Teachers and students can interact through the platform.
* Quizzes and learning activities can be integrated into courses.
* The platform provides separate experiences for students and teachers.

## ✨ Features

### 👨‍🎓 Student

* Student registration and login
* Browse available courses
* Enroll in courses
* Access course content
* Track learning progress
* Attempt quizzes
* Submit course reviews and ratings
* Forgot-password and password-reset functionality

### 👨‍🏫 Teacher

* Teacher registration and login
* Teacher dashboard
* Create and manage courses
* Add course content
* Manage enrolled students
* Track course-related information
* Teacher authentication and password recovery

### 🔐 Authentication

* Secure student and teacher authentication
* JWT-based authentication
* Protected routes
* Forgot-password functionality
* Email-based password reset

### 📚 Course Management

* Course creation and management
* Course browsing and enrollment
* Course content consumption
* Learning progress tracking

### 📝 Quizzes

* Course-based quizzes
* Quiz questions and answers
* Quiz submission and results
* Support for expanding the platform with AI-generated quiz questions

### ⭐ Reviews & Ratings

* Students can submit reviews
* Course ratings help provide feedback about learning content

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Material UI
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Services

* JWT
* Nodemailer
* Gmail SMTP for password-reset emails

## 📁 Project Structure

```text
ParhaiHub/
│
├── frontend/
│   └── React + Vite application
│
├── backend/
│   └── Node.js + Express API
│
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Installation & Running Locally

### Prerequisites

Make sure you have the following installed:

* Node.js
* MongoDB or MongoDB Atlas
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/The-Logic-Lounge/ParhaiHub.git
cd ParhaiHub
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` folder and add the required database, authentication, and email configuration.

**Do not commit your `.env` file to GitHub.**

### 4. Start the Backend

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:4400
```

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

## 🚀 Future Improvements

* AI-generated quiz questions from course content
* Improved course recommendation system
* Additional learning analytics
* Enhanced teacher-student communication
* More interactive learning features

## 👩‍💻 Project

**ParhaiHub — Online Learning Platform**

Built as a MERN-stack e-learning project.
