import express from "express";
import { signup } from "../controller/auth.controller.js";

const router = express.Router();

// Create a post request

router.post("/signup", signup);

export default router;
