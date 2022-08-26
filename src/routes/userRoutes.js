import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// router.get("/", userController.findAll); // Lista todos usuários
// router.get("/:id", userController.findOne); // Lista um usuário pelo id

router.post("/", loginRequired, userController.create);
router.patch("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
