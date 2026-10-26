# StaffSync — MERN Human Resource Management System

StaffSync is a full-stack Human Resource Management (HRM) web application built using the MERN stack. It helps organizations manage employees, attendance, leave requests, announcements, and training programs through role-based dashboards for HR, Managers, and Employees.

**Live Demo:** [Frontend](https://staff-sync-jjyn52csy-kashhvi.vercel.app) | [Backend API](https://staffsync-yjj3.onrender.com)

> **Note:** The backend is hosted on Render's free tier. After a period of inactivity, the first request may take 30–50 seconds while the service wakes up.

## Features

- **Authentication:** User registration and login with JWT-based authentication.
- **Role-Based Access Control:** Separate permissions and dashboards for HR, Managers, and Employees.
- **Employee Management:** Create, view, update, and delete employee records.
- **Attendance Management:** Record and track daily attendance.
- **Leave Management:** Submit leave requests and approve or reject them.
- **Announcements:** Publish company-wide announcements.
- **Training Management:** Create and manage employee training programs.
- **Responsive UI:** Designed for desktop, tablet, and mobile devices.

## User Roles

| Role | Permissions |
|---|---|
| **HR** | Manage employees, announcements, training programs, leave requests, and attendance. |
| **Manager** | Review team leave requests and view team attendance. |
| **Employee** | Mark attendance, apply for leave, and view announcements and training programs. |

*Actual permissions depend on the application's implemented authorization rules.*

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Tokens (JWT), bcrypt |
| Deployment | Vercel, Render, MongoDB Atlas |

## Project Structure

```text
StaffSync/
├── client/                 # React + Vite frontend
│   ├── src/
│   ├── package.json
│   └── vercel.json
└── server/                 # Express backend
    ├── config/             # Database configuration
    ├── models/             # Mongoose models
    ├── routes/             # API route definitions
    ├── server.js           # Express application entry point
    ├── seed.js              # Demo data seeding
    └── package.json
```

## API Overview

All backend routes use the `/api` prefix.

| Base Route | Purpose |
|---|---|
| `/api/auth` | User registration and login |
| `/api/employees` | Employee management |
| `/api/leaves` | Leave requests and approvals |
| `/api/attendance` | Attendance records |
| `/api/announcements` | Company announcements |
| `/api/trainings` | Training programs |

**Backend URL:** [https://staffsync-yjj3.onrender.com](https://staffsync-yjj3.onrender.com)

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- MongoDB running locally or a MongoDB Atlas database

### 1. Clone the Repository

```bash
git clone https://github.com/agrawalkashvi53-boop/StaffSync.git
cd StaffSync
```

### 2. Set Up the Backend

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `server/.env` file:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/staffsync
JWT_SECRET=replace_with_a_strong_random_secret
```

For MongoDB Atlas, replace the local MongoDB URI with your Atlas connection string.

Start the backend:

```bash
npm run dev
```

The backend will run at `http://localhost:8000`.

To populate the database with demo data, run the seed script separately if needed:

```bash
npm run seed
```

### 3. Set Up the Frontend

Open a second terminal from the project root:

```bash
cd client
npm install
```

Create a `client/.env` file:

```env
VITE_API_URL=http://localhost:8000/api
```

Start the frontend:

```bash
npm run dev
```

The frontend will usually be available at `http://localhost:5173`.

## Demo Accounts

After running the seed script successfully, these demo accounts may be available:

| Role | Email |
|---|---|
| HR | `hr@staffsync.com` |
| Manager | `manager@staffsync.com` |
| Employee | `employee@staffsync.com` |

**Demo password:** `Password@123`

These credentials are intended for local demonstration only. Do not use them for production accounts.

## Deployment

### Frontend — Vercel

Configure the following environment variable in your Vercel project settings:

| Variable | Value |
|---|---|
| `VITE_API_URL` | `https://staffsync-yjj3.onrender.com/api` |

After updating environment variables, redeploy the frontend.

### Backend — Render

Configure the following environment variables in the Render service settings:

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Strong, randomly generated secret |
| `NODE_ENV` | `production` |

Render automatically provides the `PORT` environment variable. The application uses `process.env.PORT` when available.

### Database — MongoDB Atlas

Configure MongoDB Atlas Network Access to allow connections from your backend hosting environment. Prefer restricting access to the necessary IP addresses when possible.

Avoid allowing connections from all IP addresses unless you understand and accept the security implications.

## Security

- Keep `.env` files out of version control.
- Never publish database passwords, JWT secrets, or other credentials.
- Use strong, unique secrets in production.
- Replace demo credentials before using the application in a real organization.
- Enforce authorization checks on protected backend routes.

## Future Improvements

- Payroll and payslip generation
- Email notifications for leave status changes
- Employee performance reviews
- Reports and analytics export in CSV or PDF format

## License

StaffSync is licensed under the **MIT License**.

Copyright (c) 2026 StaffSync 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
