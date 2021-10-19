import { Router } from "express";
import AuthentificateUserController from "./controllers/AuthentificateUserController";

const router = Router();
router.post('/authenticate', new AuthentificateUserController().handle);

export { router }

