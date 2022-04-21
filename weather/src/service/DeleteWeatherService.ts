import prismaClient from "../prisma";

class DeleteWeatherService {
    async execute(id_weather: string){
        const deleteWeather = await prismaClient.weather.delete({
            where: {
                id: id_weather
            },
        });
    return deleteWeather
    }
}

export { DeleteWeatherService }