StaffSync: MERN Human Resource Management System

StaffSync is a full-stack HRM web app built with the MERN stack. It helps organizations manage employees, attendance, leave requests, announcements and training programs through role-based dashboards for HR, Managers and Employees.

Live Demo: Frontend (Vercel) | API (Render): https://staffsync-yjj3.onrender.com

The backend runs on Render's free tier, so the first request after inactivity can take 30-50 seconds to wake up.

Features
Authentication: secure JWT-based register and login
Role-based access control: separate permissions and dashboards for HR, Manager and Employee
Employee management: full CRUD (add, view, update, delete) with department and role details
Attendance: mark and track daily attendance
Leave workflow: employees apply for leave, managers and HR approve or reject
Announcements: company-wide notices posted by HR
Training programs: create and manage training programs for staff
Responsive UI: works on desktop, tablet and mobile
Roles at a Glance
Role	What they can do
HR	Full access: manage employees, announcements, trainings, all leaves and attendance
Manager	Review and approve team leave requests, view team attendance
Employee	Mark attendance, apply for leave, view announcements and trainings
Tech Stack
Layer	Technologies
Frontend	React, Vite
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Auth	JSON Web Tokens (JWT), bcrypt
Deployment	Vercel (frontend), Render (backend), MongoDB Atlas (database)
Project Structure
StaffSync/
├── client/              # React (Vite) frontend
└── server/              # Express backend
    ├── config/          # Database connection
    ├── models/          # Mongoose schemas
    ├── routes/          # API route definitions
    └── server.js        # App entry point
API Overview

All routes are prefixed with /api.

Base route	Purpose
/api/auth	Register, login
/api/employees	Employee CRUD
/api/leaves	Leave requests and approvals
/api/attendance	Attendance records
/api/announcements	Company announcements
/api/trainings	Training programs
Getting Started
Prerequisites
Node.js v18 or higher
MongoDB (local service, MongoDB Compass, or a MongoDB Atlas connection string)
1. Clone the repository
bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
2. Set up the backend
bash
cd server
npm install

Create a server/.env file:

env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/staffsync
JWT_SECRET=your_secret_key

Use the exact variable names your config/db.js and auth code read.

Seed demo data and start the server:

bash
npm run seed
npm run dev

Backend runs at http://localhost:8000

3. Set up the frontend
bash
cd client
npm install

Create a client/.env file:

env
VITE_API_URL=http://localhost:8000/api

Start the app:

bash
npm run dev

Frontend runs at http://localhost:5173

Demo Logins

After running npm run seed, use password Password@123 for all accounts:

Role	Email
HR	hr@staffsync.com
Manager	manager@staffsync.com
Employee	employee@staffsync.com
Deployment
Frontend (Vercel): set the environment variable VITE_API_URL=https://staffsync-yjj3.onrender.com/api, then redeploy.
Backend (Render): set MONGO_URI, JWT_SECRET and PORT in the service environment settings.
Database: MongoDB Atlas (allow Render's IPs or 0.0.0.0/0 in Network Access).
Screenshots

Add screenshots of the HR, Manager and Employee dashboards here.

<!-- ![HR Dashboard](./screenshots/hr-dashboard.png) -->
Future Improvements
Payroll and payslip generation
Email notifications for leave status
Performance reviews
Reports and analytics export (CSV / PDF)
