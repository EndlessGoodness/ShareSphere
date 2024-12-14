# ShareSphere

**Team Name:** TheSaints  
**For Ideathon 4.0**

---

## Overview

**ShareSphere** is a community-first platform aimed at fostering connections within neighborhoods. It enables users to offer or request help for everyday tasks, promoting collaboration and trust. Whether it's picking up groceries, tutoring, or taking care of a pet, ShareSphere creates a space where everyone can lend a helping hand.  

---

## Features

- **Simple and Intuitive Design**: Post tasks or offers quickly and easily.
- **Localized Matches**: Connect with people nearby for fast and relevant assistance.
- **Secure and Trusted**: Profiles, reviews, and secure chats ensure a reliable experience.
- **Building Community**: Encourages a supportive and collaborative environment.

---

## Tech Stack

### Frontend:
- **Vite (Vanilla JS)**: Provides a fast and interactive user interface.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for user data and task management.
- **Mongoose**: Object modeling for MongoDB.

### Additional Libraries:
- **Express-Validator**: Validates user inputs like email and passwords.
- **bcryptjs**: Secures user passwords through hashing.
- **jsonwebtoken (JWT)**: Implements secure user authentication.
- **CORS**: Enables cross-origin communication between frontend and backend.

---

## API Implementation

### User Authentication:

- **User Registration**:
  - Securely register users with hashed passwords stored in MongoDB.
  - Generate and return a JWT for authenticated sessions.
  - Endpoint: `/api/users/register`

- **User Login**:
  - Authenticate users using email and password.
  - Validate credentials and return a JWT upon success.
  - Endpoint: `/api/users/login`

- **User Account Deletion**:
  - Authenticated users can delete their accounts.
  - Secure deletion using user-specific JWTs.
  - Endpoint: `/api/users/delete`

### Task Management:  
To be implemented:  
- Create, update, and delete tasks via authenticated endpoints.  
- Real-time status updates.

### Messaging System:  
To be implemented:  
- Enable secure user-to-user messaging for task discussions.

---

## Progress Updates

### Completed:
1. **Authentication System**:
   - Full user registration and login workflows.
   - Password hashing using `bcryptjs`.
   - JWT-based authentication.

2. **API Endpoints**:
   - `/api/users/register`: User registration.
   - `/api/users/login`: User login.
   - `/api/users/delete`: Delete user account.

3. **Frontend Integration**:
   - Initial integration of authentication APIs using **Vite**.
   - Backend (port 3000) communicates with the frontend (port 5173) using CORS middleware.

---

### In Progress:
1. **User Profile and Task Management**:
   - Add profile functionality for users to manage tasks.
   - Enable task creation, editing, and deletion.

2. **Reviews and Ratings**:
   - Implement a rating system to enhance trust.

3. **Real-Time Messaging**:
   - Add a chat system for communication between users.

---

## Next Steps

1. **Finalize Task Management**:
   - Build and test APIs for creating, updating, and deleting tasks.
   - Integrate with frontend components.

2. **Enhance Security**:
   - Add advanced password validation and token storage mechanisms.
   - Improve error handling across APIs.

3. **Frontend Development**:
   - Develop user-friendly components for tasks, profiles, and messaging.

4. **Testing**:
   - Use **Postman** and **curl** for backend testing.
   - Conduct end-to-end tests for frontend-backend interactions.

---

## How to Run the Project

### Prerequisites:
- **Node.js** and **npm** installed on your machine.
- MongoDB instance (local or cloud).

### Steps:
1. Clone the repository:
   ```
   git clone https://github.com/your-username/ShareSphere.git
   cd ShareSphere
   ```
2. Install dependencies for the backend:
  ```
  cd backend
  npm install
  ```
3. Set up the `.env` file in the backend:  
  ```
  PORT=3000
  MONGO_URI=your_mongo_uri
  JWT_SECRET=your_jwt_secret
  ```
4. Start the backend server:
  ```
  npm start
  ```
5. Install dependencies for the frontend:
  ```
  cd ../frontend
  npm install
  ```
6. Start the frontend development server:
  ```
  npm run dev
  ```

---

## Contributing
We welcome contributions to ShareSphere!
Feel free to submit issues, suggestions, or pull requests.

1. Fork the repository.
2. Create a new branch for your feature:

  `git checkout -b feature-branch-name`

3. Commit your changes and push:

  `git push origin feature-branch-name`

4. Submit a pull request and provide a detailed description of your changes.

---

## LICENSE

This project is licensed under the MIT License.
  
  

