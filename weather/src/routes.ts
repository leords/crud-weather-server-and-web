import { Router } from "express";
import { CreateWeatherController } from "./controllers/CreateWeatherController";
import { DeleteWeatherController } from "./controllers/DeleteWeatherController";
import { LastWeatherController } from "./controllers/LastWeatherController";
import { SearchWeatherController } from "./controllers/SearchWeatherController";



const router = Router();


router.post('/create', new CreateWeatherController().handle )
router.post('/delete', new DeleteWeatherController().handle )
router.get('/last', new LastWeatherController().handle)
router.post('/search', new SearchWeatherController().handle)



export {router}