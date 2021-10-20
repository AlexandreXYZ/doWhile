import { Router } from "express";
import AuthentificateUserController from "./controllers/AuthentificateUserController";
import CreateMessageController from "./controllers/CreateMessageController";
import {GetLast3MessagesController} from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middlewares/enssureAuthenticated";

const router = Router();
router.post('/authenticate', new AuthentificateUserController().handle);
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);
router.get('/messages/last3', new GetLast3MessagesController().handle);
router.get('/profile', ensureAuthenticated,new ProfileUserController().handle);

export { router };