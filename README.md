# ShareSphere

**Team Name:** TheSaints  
**For Ideathon 4.0**

## Idea

**ShareSphere** is all about bringing people closer and making life a little easier for everyone in the neighborhood. Imagine having a go-to place where you can ask for help or lend a hand with everyday tasks like:

- 🛒 Picking up groceries when you’re swamped.
- 📚 Tutoring a student who needs extra support.
- 🔧 Fixing a leaky faucet or sharing tools.
- 🐾 Taking care of a pet or running small errands.

Our platform is designed to feel simple and natural, like talking to a friend. Here’s how it works:

- **Easy to Use:** Post what you need or offer help in just a few clicks.
- **Local First:** We match you with people nearby, so help is always close.
- **Safe Connections:** Chat securely and see ratings to know you’re in good hands.
- **Building Trust:** Profiles and reviews make it easy to find reliable helpers or requesters.

With **ShareSphere**, we’re not just solving problems; we’re building a community where everyone looks out for each other.  
Life’s better when we work together! 🤝

---

## Project Progress

### Full-Stack Application

ShareSphere is built as a **full-stack application**, with the following key features:

- **Frontend** built using **Vite** (Vanilla JS) to create a fast and interactive user interface.
- **Backend** built with **Node.js** and **Express.js**, connected to a **MongoDB** database for storing user data and task information.

### User Registration and Authentication API

- **User Registration:**
  - A user registration system has been implemented using Express.js and MongoDB. Users can now register by providing their name, email, and password.
  - Passwords are hashed for security before being stored in the database.
  - JWT (JSON Web Tokens) is generated upon successful registration and sent to the client for authentication.

- **User Login:**
  - Users can log in using their email and password.
  - The system checks for valid credentials and, if successful, generates a JWT token for the session.

- **API Endpoints:**
  - `/api/users/register`: Allows users to register on the platform.
  - `/api/users/login`: Allows users to log in to the platform using their credentials.

### Frontend Integration

- The frontend is powered by **Vite** and interacts with the backend through **API requests** for user authentication and task management.
- **CORS** (Cross-Origin Resource Sharing) is enabled in the backend to allow communication between the frontend (running on port 5173) and the backend (running on port 3000).

### Technologies Used:

- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store user data.
- **Mongoose**: MongoDB object modeling library for interaction with MongoDB.
- **Vite**: A fast and modern build tool for the frontend (Vanilla JS).
- **CORS**: Middleware for enabling cross-origin requests.
- **Express-Validator**: Middleware to validate user inputs (email, password).
- **bcryptjs**: Library used for securely hashing passwords.
- **jsonwebtoken (JWT)**: For secure user authentication.

---

## To Do:

- **User Profile and Task Management**:
  - Implement user profile functionality.
  - Allow users to create, update, and delete tasks.
  
- **Messaging System**:
  - Add the ability for users to send messages to each other for task-related discussions.

- **Reviews and Ratings**:
  - Implement a review system where users can rate and review each other based on tasks completed.

- **Improve Security**:
  - Add additional validation and error handling.
  - Implement better password strength validation and secure JWT token storage.

---

### Next Steps

- Finalize the implementation of the `delete` task feature and improve authentication with more complex JWT-based session management.
- Test all APIs using **Postman** or **curl**.
- Implement real-time messaging functionality and integrate it with the task system.
- Add **frontend components** for managing tasks and user profiles.
