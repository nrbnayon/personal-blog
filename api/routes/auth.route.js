import express from "express";
import { google, login, signup } from "../controller/auth.controller.js";

const router = express.Router();

// Create a post request

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", google);

export default router;
