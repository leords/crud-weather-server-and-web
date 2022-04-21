import { Response, Request, request } from "express";
import { CreateWeatherService } from "../service/CreateWeatherService";

class CreateWeatherController {
    async handle(request: Request, response: Response){
        const {user} = request.body
        const {temperature}= request.body
        const {moisture}= request.body    
        const {luminosity} = request.body

        const service = new CreateWeatherService();
        const result = await service.execute(user, temperature, moisture, luminosity);

        return response.json(result)

    }
}

export { CreateWeatherController }