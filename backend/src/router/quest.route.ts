import { Router } from "express";
import * as questController from "../controllers/quest.controllers";

import { upload } from "../middleware/upload.middleware";
import { verifyToken } from "../middleware/verify.token";
import { checkRole } from "../middleware/verify.roles";
const router = Router();

router.post("/", verifyToken, checkRole(["Admin"]), questController.createQuest);
router.post("/import", verifyToken, checkRole(["Admin"]), upload.single("file"), questController.createImportQuest);
router.get("/", verifyToken, checkRole(["Admin"]), questController.getQuest);
router.get("/:id", verifyToken, checkRole(["Admin"]), questController.getQuestId);
router.put("/:id", verifyToken, checkRole(["Admin"]), questController.updateQuest);
router.delete("/:id", verifyToken, checkRole(["Admin"]), questController.deleteQuest);

export default router;
