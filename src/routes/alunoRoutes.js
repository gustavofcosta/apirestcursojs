import { Router } from "express";
import alunoController from "../controllers/AlunoController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", alunoController.findAll);
router.get("/:id", alunoController.findOne);
router.post("/", loginRequired, alunoController.create);
router.patch("/:id", loginRequired, alunoController.update);
router.delete("/:id", loginRequired, alunoController.delete);

export default router;
