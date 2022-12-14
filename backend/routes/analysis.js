import express from "express";
import { getAnalysis, createAnalysis, getAnalysisDetail } from "../controller/analysis.js"

const router = express.Router();

router.get("/", getAnalysis);
router.get("/:id", getAnalysisDetail);
router.post("/", createAnalysis);

export default router;

