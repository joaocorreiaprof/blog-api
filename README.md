# Blog Application

This is a full-stack blog application built with **React**, **Vite**, **Node.js (Express)**, and **PostgreSQL**. It features a single front-end that dynamically displays either a user page or an admin panel based on the user's authentication status and role (admin).

## Features

- **User Authentication**: Users can log in and receive a JWT token for authentication.
- **Admin Panel**: Only authenticated admin users can access an admin panel where they can manage posts and comments.
- **Posts and Comments**: Users can view posts, and admin users can create, update, delete, and publish/unpublish posts and comments.
- **JWT Authentication**: Protected routes are secured using JWT tokens.
- **PostgreSQL Database**: All data is stored in a PostgreSQL database with Prisma ORM for easy database interaction.

## Technologies Used

- **React**: For building the front-end UI.
- **Vite**: As the build tool for the React app.
- **Node.js (Express)**: For the back-end API.
- **Prisma**: For interacting with the PostgreSQL database.
- **PostgreSQL**: For the relational database.
- **JWT (JSON Web Tokens)**: For handling user authentication and authorization.

## Project Structure

### Backend

- **Controllers**: Contains the logic for handling different routes (e.g., handling posts, comments, and authentication).
- **Models**: Contains the Prisma models for the database (e.g., User, Post, Comment).
- **Routes**: The Express routes for interacting with the API.
- **Middleware**: Middleware functions like JWT verification for protected routes.
- **Config**: Configuration for database connection and JWT secrets.

### Frontend

- **Components**: React components for building the UI.
- **Pages**: React pages for different views (user view, admin panel, etc.).
- **Utils**: Utility functions, such as handling API requests.
- **Assets**: Static files like images or styles.

## Setup

### Backend

1. **Install dependencies**:

   ```bash
   cd server
   npm install

   ```

2. **Set up environment variables**:
   Create a .env file in the backend directory and add the following variables:

   ```env
   DATABASE_URL="your_postgresql_connection_string"
   JWT_SECRET="your_jwt_secret_key"

   ```

3. **Migrate the database**:
   Run Prisma migration to set up your database:

   ```bash
   npx prisma migrate dev

   ```

4. **Start the backend server**:
   ```bash
   npm run dev
   ```

### Frontend

1. **Install dependecies**:

   ```bash
   cd client
   npm install

   ```

2. **Start the react development server**:
   ```bash
   npm run dev
   ```

### Authentication Flow

1. Login: The user logs in via the login page, which sends a POST request to the backend for authentication. If successful, the user receives a JWT token, which is stored in localStorage.
2. Protected Routes: For any protected routes (admin panel or user-specific routes), the JWT token is attached to the request header using the "Authorization" header with the "Bearer" schema.
3. Admin Access: Only users with a valid JWT and an "admin" role can access the admin panel. The admin panel is rendered conditionally on the front-end based on the user's role and authentication status.

### API EndPoints

- POST /login: Authenticate user and return a JWT token.
- GET /posts: Fetch all posts (public).
- POST /posts: Create a new post (admin only).
- PUT /posts/:id: Edit a post (admin only).
- DELETE /posts/:id: Delete a post (admin only).
- GET /comments: Fetch comments for a post (public).
- POST /comments: Add a comment to a post (authenticated).
- DELETE /comments/:id: Delete a comment (admin only).
