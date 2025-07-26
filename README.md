# CodeLocker - React Frontend

This is the frontend user interface for CodeLocker, a full-stack personal code snippet manager. It is a modern, responsive single-page application built with React.

## Features

* **User Registration & Login:** Fully functional pages for user authentication.
* **Full Snippet Management:** Users can view, create, edit, and delete their own personal code snippets.
* **Dynamic UI:** The interface updates in real-time without page reloads.
* **Clean, Modern Design:** Built with the Material-UI (MUI) component library.
* **Client-Side Routing:** Uses React Router for seamless navigation between pages.

## Screenshots

*(This is where you should add screenshots of your application. For example, the login page and the main home page with snippets. This makes a huge difference!)*

![Login Page](<path/to/your/screenshot.png>)
![Home Page](<path/to/your/screenshot.png>)

## Technology Stack

* **Core:** React, Vite
* **UI Library:** Material-UI (MUI)
* **Routing:** React Router DOM
* **Package Manager:** npm

## Setup and Running Locally

1.  **Prerequisites:**
    * Node.js and npm
    * The [CodeLocker Backend API](https://github.com/your-username/codelocker-springboot-backend) must be running.

2.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/codelocker-frontend.git](https://github.com/your-username/codelocker-frontend.git)
    cd codelocker-frontend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Configure Environment Variable:**
    * Create a new file in the root of the project named `.env.local`.
    * Add the following line to it, pointing to your running backend:
        ```
        VITE_API_BASE_URL=http://localhost:8080
        ```

5.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will start on `http://localhost:5173` (or a similar port).
