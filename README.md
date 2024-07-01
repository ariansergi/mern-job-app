website address
https://mern-job-app-tht8.onrender.com
MERN Project
Description
This is a MERN (MongoDB, Express, React, Node.js) stack project that provides a job tracking application. It allows users to manage job applications and keep track of their job status and types.

Table of Contents
Installation
Usage
Features
Project Structure
Models
Scripts
Dependencies



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Installation
Clone the repository
bash
Copy code
git clone https://github.com/ariansergi/mern-job-app.git
cd mern-project
Install dependencies
Backend
bash
Copy code
npm install
Frontend
bash
Copy code
cd client
npm install
Usage
Development
To start the development server, run:

bash
Copy code
npm run dev
This will concurrently run both the Express server and the React development server.

Production
To set up the production build, run:

bash
Copy code
npm run setup-production-app
Features
User authentication
Job management (create, read, update, delete jobs)
Track job status and types
Responsive frontend using React
Project Structure
Backend
server.js: Entry point for the Express server
models: Contains the MongoDB schemas
routes: Contains the API routes
controllers: Contains the functions to handle API requests
middleware: Contains middleware for authentication, error handling, etc.
Frontend
src: Contains the React components and pages
public: Contains the static files
Models
Job Model
javascript
Copy code
import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const JobSchema = new mongoose.Schema({
    company: String,
    position: String,
    jobStatus: {
        type: String,
        enum: Object.values(JOB_STATUS),
        default: JOB_STATUS.PENDING
    },
    jobType: {
        type: String,
        enum: Object.values(JOB_TYPE),
        default: JOB_TYPE.FULL_TIME
    },
    jobLocation: {
        type: String,
        default: "my city"
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export default mongoose.model("Job", JobSchema);
User Model
javascript
Copy code
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    lastName: {
        type: String,
        default: "lastName"
    },
    location: {
        type: String,
        default: "my city"
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    avatar: String,
    avatarPublicId: String,
})

UserSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
}

export default mongoose.model("User", UserSchema);
Scripts
Backend
setup-project: Installs dependencies for both backend and frontend
setup-production-app: Installs dependencies and builds the frontend for production
server: Starts the Express server with nodemon
client: Starts the React development server
dev: Runs both the Express server and React development server concurrently
Frontend
dev: Starts the Vite development server
build: Builds the React application for production
lint: Lints the React codebase using ESLint
preview: Previews the production build using Vite
Dependencies
Backend
bcryptjs
cloudinary
concurrently
cookie-parser
datauri
dayjs
dotenv
express
express-async-errors
express-mongo-sanitize
express-rate-limit
express-validator
helmet
http-status-codes
jsonwebtoken
mongoose
morgan
multer
nanoid
nodemon
Frontend
@tanstack/react-query
@tanstack/react-query-devtools
axios
dayjs
react
react-dom
react-icons
react-router-dom
react-toastify
recharts
styled-components
Dev Dependencies (Frontend)
@types/react
@types/react-dom
@vitejs/plugin-react
eslint
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-react-refresh
vite
