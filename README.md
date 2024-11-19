# IN18_Assignment
Coding Assignment for IN18 Labs

# Prerequisites

1. Node.js (for both frontend and backend)

2. NPM (Node Package Manager) comes with Node.js, so it will be installed automatically with Node.js.

3. Git (optional, for cloning the repositories).

# Project Setup Instructions
This project contains both the backend and frontend, with the following folder structure:


'''
/root-folder
  /backend
  /frontend
  '''
Follow these steps to clone and run both parts of the project locally:

Step 1: Clone the Repository
First, clone the repository to your local machine using the following command:


('''git clone https://github.com/your-username/your-repository.git''')
This will clone the entire project, including both the backend and frontend directories.

Step 2: Set Up the Backend
2.1: Navigate to the Backend Folder
Change your directory to the backend folder:

bash
Copy code
cd backend
2.2: Install Backend Dependencies
Install all necessary dependencies for the backend by running:

bash
Copy code
npm install
2.3: Run the Backend Server
Start the backend server with the following command:

bash
Copy code
npm start
The backend should now be running on http://localhost:5000.

Step 3: Set Up the Frontend
3.1: Navigate to the Frontend Folder
Now, change your directory to the frontend folder:

bash
Copy code
cd ../frontend
3.2: Install Frontend Dependencies
Install all necessary dependencies for the frontend by running:

bash
Copy code
npm install
3.3: Run the Frontend Server
Start the frontend React app with the following command:

bash
Copy code
npm start
The frontend should now be running on http://localhost:3000.

Step 4: Verify Both Servers Are Running
Backend: Open a browser and go to http://localhost:5000 to check if the backend API is running.
Frontend: Open another browser tab and go to http://localhost:3000 to check if the React app is running.
Additional Information
Environment Variables: If the project requires any environment variables (like database credentials or API keys), make sure to add them in the .env files for both the backend and frontend (if applicable).

Testing: Run any tests if the project has them, usually with npm test for both backend and frontend.

Example Commands
Here are the important commands you will be using:

For Backend
bash
Copy code
# Install backend dependencies
npm install

# Start the backend server
npm start
For Frontend
bash
Copy code
# Install frontend dependencies
npm install

# Start the frontend React app
npm start
Troubleshooting
Port Conflicts: If localhost:3000 (for frontend) or localhost:5000 (for backend) is already in use, you can modify the port numbers in the package.json files.
Missing Dependencies: If you see errors about missing modules, ensure that you are in the correct directory (backend or frontend) and run npm install again.
This should cover everything you need to set up and run both the backend and frontend locally from a single root folder.
