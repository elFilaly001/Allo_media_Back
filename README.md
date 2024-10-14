# React Project - AlloMedia Delivery Application

## Part 1: Authentication (FrontEnd)

## Description
This project is a delivery application developed with React, focused on user authentication. This first part concentrates on setting up the frontend for registration, login, and user session management.

## Authentication Features
- **Registration**: 
  - Users can create an account by providing their name, email address, and password.
  - Client-side validation ensures fields are correctly filled.
  - Email format and password security are verified.

- **Login**: 
  - Users can log in with their email address and password.
  - Handles authentication errors, such as incorrect credentials.

- **Password Reset**: 
  - Users can request a password reset link.
  - Interface to enter a new password after clicking the link received by email.

- **Logout**: 
  - Users can log out, which clears the stored JWT token.

## User Interface Overview
Here are some screenshots of the application to give you an overview of the user interface:

## Prerequisites
- Node.js (version 20 or higher)
- Docker and Docker Compose

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/elFilaly001/Allo_media_Front
   cd Allo_media_Front
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file at the root of the project and add the necessary variables, such as the backend API URL and secret keys.

## Usage

1. **Start the application:**
   ```bash
   npm start
   ```

2. **Access the application:**
   Open your browser and go to `http://localhost:5173`.

## Dockerization

1. **Build the Docker image:**
   ```bash
   docker build -t react-app .
   ```

2. **Start the containers with Docker Compose:**
   ```bash
   docker-compose up
   ```

3. **Access the application:**
   Open your browser and go to `http://localhost:5173`.

## Libraries and Frameworks

- **React**: For developing the user interface.
- **React Router**: For route management.
- **Axios**: For HTTP requests.
- **Formik/React Hook Form**: For form management.

## Project Management
This project uses [Jira](https://elfilalyabdeljalil.atlassian.net/jira/software/projects/AMF/boards/7) for task management and development tracking.

