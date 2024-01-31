import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
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
