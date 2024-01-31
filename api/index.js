import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("My Database is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/user", userRoutes); //First Api
app.use("/api/auth", authRoutes); //Signup Api

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
