import { Response, Request, request } from "express";
import { DeleteWeatherService } from "../service/DeleteWeatherService";

class DeleteWeatherController {
    async handle(request: Request, response: Response){
        const service = new DeleteWeatherService();
        const {id} = request.body

        const result = await service.execute(id)

        return response.json(result);

    }
}

export { DeleteWeatherController }