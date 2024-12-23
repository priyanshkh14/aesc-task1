# AESC Assignment

## Task
- Build a Candidate List Viewer:
  1. Use React to create a page that displays a list of candidates with mock data fetched from an API.
  2. Each candidate should have the following fields: Name, Skills, and Years of Experience.
     
- Backend API:
  1. Use Node.js/Express to create a single API endpoint (/api/candidates) that serves a hardcoded list of 10 candidate objects.
  2. The data can be static (no need for a database).
     
- Frontend Requirements:
  1. Fetch data from the API and display it in a table format.
  2. Add a search bar to filter candidates by Name or Skills.
     
- Bonus Points:
  1. Add a simple sorting feature to order candidates by Years of Experience.

## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **Styling**: CSS (App-specific styling in `App.css` and global styles in `index.css`)

## Installation

### Prerequisites
- Node.js installed on your machine. (Download it from [here](https://nodejs.org/))
- NPM (Node Package Manager) or Yarn.

### Setup

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/priyanshkh14/aesc-task1.git

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install

3. **Install Frontend Dependencies**

   ```bash
   cd frontend
   npm install

4. **Start the Backend Server**

   In the backend directory, run:

   ```bash
   npm start

   This will start the Express backend server on http://localhost:5001

5. **Start the Frontend Application**

   In the frontend directory, run:

   ```bash
   npm start

   This will start the React frontend development server, and it will open your app at http://localhost:3000
