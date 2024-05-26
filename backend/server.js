const express = require("express");
const connectDB = require("./db");
const Student = require("./models/studentModel");
const Course = require("./models/courseModel");
const Exam = require("./models/examModel");

const studentMarksRoutes = require("./routes/studentMark");
const studentRoutes = require("./routes/all");
const topStudentsRoutes = require("./routes/topper"); // Import the new rout
const studentController = require("./routes/studentinadept"); // Import the student controller
const averageMark = require("./routes/average");

const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api", studentMarksRoutes); // Mount the student marks routes
app.use("/api", studentRoutes);
app.use("/api", topStudentsRoutes);
app.use("/api", studentController); // Mount the student controller
app.use("/api", averageMark); // Mount the average marks routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
