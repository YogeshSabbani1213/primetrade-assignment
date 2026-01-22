# Frontend Developer Assignment – Authentication & Dashboard
# github link:https://github.com/YogeshSabbani1213/primetrade-assignment

This project is a full-stack web application built as part of the Frontend Developer Intern assignment.  
The application includes user authentication, a protected dashboard, and CRUD functionality.

---

## Tech Stack

Frontend:
- React (Vite)
- Tailwind CSS
- Axios
- React Router

Backend:
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt

---

## Features

- User registration with validation
- User login with JWT authentication
- Protected routes (dashboard access only after login)
- Task management (Create, Read, Delete)
- User-specific data access
- Client-side and server-side validation
- Clean MVC backend architecture

---

## Validation Rules

- Name must be at least 5 characters
- Password must be at least 8 characters
- Duplicate email registration is prevented
- Clear error messages for all invalid cases

---

## Project Structure

backend/
- models/
- controllers/
- routes/
- middleware/

frontend/
- pages/
- components/
- utils/

---

## Setup Instructions

### Backend
1. Navigate to backend folder
2. Install dependencies  
   npm install
3. Create a `.env` file with:
   PORT=8080  
   MONGO_URI=your_mongodb_uri  
   JWT_SECRET=your_secret
4. Start server  
   node server.js

### Frontend
1. Navigate to frontend folder
2. Install dependencies  
   npm install
3. Start frontend  
   npm run dev

---

## API Endpoints

POST /api/auth/register  
POST /api/auth/login  

GET /api/tasks  
POST /api/tasks  
DELETE /api/tasks/:id  

All task routes are protected using JWT middleware.

---

## Authentication Flow

- User registers with validated inputs
- Password is hashed using bcrypt
- User logs in and receives JWT
- JWT is stored on client
- Token is validated for protected routes

---

