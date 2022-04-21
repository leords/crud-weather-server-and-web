import { Request, Response } from "express";
import { LastWeatherService } from "../service/LastWeatherService";



class LastWeatherController {
    async handle(request: Request, response: Response){
        const service = new LastWeatherService();

        const result = await service.execute();

        return response.json(result)
    }
}

export {LastWeatherController}