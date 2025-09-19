
const express = require("express");
const mongoose = require("mongoose");
const contactRoutes = require("./Routes/ContactRoute");
const connectDB = require("./db/db")

const app = express();

// Middleware
app.use(express.json());

connectDB();

// Routes
app.use("/api", contactRoutes);

module.exports = app
