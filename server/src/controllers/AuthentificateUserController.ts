import {Request, Response} from "express"
import AuthentificateUserService from "../services/AuthenticateUserService";

export default class AuthentificateUserController{
  async handle(request: Request, response){
    const { code } = request.body;
    const service = new AuthentificateUserService();
    const result  = await service.execute(code)
    return response.json(result)
  }
}