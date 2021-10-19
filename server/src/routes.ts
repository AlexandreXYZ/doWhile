import { Router } from "express";
import AuthentificateUserController from "./controllers/AuthentificateUserController";
import CreateMessageController from "./controllers/CreateMessageController";
import { ensureAuthenticated } from "./middlewares/enssureAuthenticated";

const router = Router();
router.post('/authenticate', new AuthentificateUserController().handle);

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);
export { router }

