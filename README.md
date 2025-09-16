# 📚 Learning Management System (LMS)

A web-based **Learning Management System** built with **Laravel** (backend) and **React** (frontend) to streamline course management, student engagement, and academic workflows.

Developed by **Kalhara** and **Heshan**.

---

## ✨ Features

* 🔑 **User Authentication** – Secure login for students and admins
* 📖 **Course Management** – Add, update, and manage courses
* 👩‍🎓 **Student Enrollment** – Students can enroll in available courses
* 📂 **Assignments & Materials** – Upload and download learning resources
* 📝 **Quizzes & Exams** – Manage and attempt quizzes online
* 📊 **Grades & Reports** – View and manage performance records

---

## 🛠️ Tech Stack

* **Frontend:** React, TailwindCSS / Bootstrap
* **Backend:** Laravel (PHP)
* **Database:** MySQL
* **Other Tools:** Git, GitHub, Composer, Node.js, npm

---

## 🚀 Installation & Setup

### 🔹 Prerequisites

Make sure you have installed:

* [PHP 8+](https://www.php.net/)
* [Composer](https://getcomposer.org/)
* [Node.js & npm](https://nodejs.org/)
* [MySQL](https://dev.mysql.com/)

---

### 🔹 Backend (Laravel)

1. Clone the repository and move into project folder

   ```bash
   git clone https://github.com/username/lms-project.git
   cd lms-project/backend
   ```

2. Install dependencies

   ```bash
   composer install
   ```

3. Copy `.env.example` to `.env` and update DB settings

   ```bash
   cp .env.example .env
   ```

4. Generate application key

   ```bash
   php artisan key:generate
   ```

5. Run database migrations & seeders

   ```bash
   php artisan migrate --seed
   ```

6. Start Laravel server

   ```bash
   php artisan serve
   ```

   Backend will be available at 👉 `http://127.0.0.1:8000`

---

### 🔹 Frontend (React)

1. Go to frontend folder

   ```bash
   cd ../frontend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start React development server

   ```bash
   npm start
   ```

   Frontend will be available at 👉 `http://localhost:3000`

---

### 🔹 Connecting React with Laravel

* Update API base URL in React (`frontend/src/config.js` or `.env`) to point to your Laravel backend:

  ```
  REACT_APP_API_URL=http://127.0.0.1:8000/api
  ```

---

## 👥 Contributors

* **Kalhara** – Backend Development, Database Management
* **Heshan** – Frontend Development, UI/UX Design

---

## 📜 License

This project is licensed under the MIT License.

---
