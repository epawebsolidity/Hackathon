import { Router } from "express";
import * as examController from "../controllers/exam.controllers";
import { checkRole } from "../middleware/verify.roles";
import { verifyToken } from "../middleware/verify.token";

const router = Router();

router.post("/", verifyToken, checkRole(["Admin"]), examController.createExam);
router.get("/", verifyToken, checkRole(["Admin"]), examController.getExam);
router.get("/:id", verifyToken, checkRole(["Admin"]), examController.getExamId);
router.put("/:id", verifyToken, checkRole(["Admin"]), examController.updateExam);
router.delete("/:id", verifyToken, checkRole(["Admin"]),  examController.deleteExam);

export default router;
