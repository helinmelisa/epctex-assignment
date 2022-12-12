import express from "express";
import { getAnalysis, createAnalysis } from "../controller/analysis.js"

const router = express.Router();

router.get("/", getAnalysis);
router.post("/", createAnalysis);

export default router;

