import { Response, Request, request } from "express";
import { SearchWeatherService } from "../service/SearchWeatherService";

class SearchWeatherController {
    async handle(request: Request, response: Response){
        const service = new SearchWeatherService();
        const {id} = request.body

        const result = await service.execute(id)

        return response.json(result)

    }
}

export { SearchWeatherController }