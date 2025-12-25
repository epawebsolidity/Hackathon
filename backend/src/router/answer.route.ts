import { Router } from "express";
import * as answerController from "../controllers/answer.controllers";
import { verifyToken } from "../middleware/verify.token";

const router = Router();

router.post("/:examId/submit", verifyToken, answerController.submitAnswer);

export default router;
