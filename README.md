# IMGlobal


# Full Stack Developer Assignment - Login & Home Screen

This repository contains a simple authentication system built with **NestJS** for the backend and **React** with **TypeScript** for the frontend. It implements a basic login page, user registration, and a protected home page with user details. The backend provides API endpoints for registration, login, and fetching user details, while the frontend allows interaction with these APIs.

## Prerequisites

Before running the project, ensure that you have the following installed:
- **Node.js** (v14.x or above)
- **npm** (v6.x or above)
- **PostgreSQL** (for database usage)
- **Git** (for cloning the repository)

## Setup Instructions

Follow the steps below to run the project locally:

### 1. Clone the repository
Clone the repository using the following command:

```bash
git clone https://github.com/vinodkumarhalvi3354/IMGlobal.git
```

### 2. Set up the .env file
Create a .env file in the backend directory and add the necessary environment variables. You can use the example below:


DB_PASSWORD=yourpassword


### 3. Set up the backend
Navigate to the `backend` directory and install dependencies:

```bash
cd backend
npm install
```

Start the backend server in development mode:

```bash
npm run start:dev
```

The backend will run on `http://localhost:3001` by default.

### 4. Set up the frontend
Navigate to the `frontend` directory and install dependencies:

```bash
cd ..
cd frontend
npm install
```

Start the frontend server:

```bash
npm start
```

The frontend will run on `http://localhost:3000` by default.

### 5. Check Swagger Documentation
Once the backend is running, you can access the Swagger API documentation at:

```
http://localhost:3001/api/docs
```

This documentation provides a detailed description of the available API endpoints.

## Features

### Backend (NestJS)
- **Authentication API**:
  - `POST /auth/register`: Register a new user.
  - `POST /auth/login`: Authenticate and return a JWT token.
  - `GET /auth/me`: Fetch user details (protected route, requires token).

- **Database**: Uses an in-memory PostgreSQL database.
- **JWT Authentication**: Secures the login system.
- **Swagger Documentation**: Provides clear API documentation.

### Frontend (React + TypeScript)
- **Login Page**: Form with username and password fields.
- **Registration Pop-up**: Shows a pop-up for new users to register.
- **Home Screen**: Protected route displaying user details upon successful login.
- **State Management**: Manages JWT tokens securely using  `HttpOnly` cookies.
- **Routing**: Uses React Router for navigation between pages.
- **Styling**: Uses TailwindCSS for responsive styling.

