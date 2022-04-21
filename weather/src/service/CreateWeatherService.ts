import prismaClient from "../prisma";


class CreateWeatherService {
    async execute(user:string, temperature: string, moisture:string, luminosity:string) {
        const NewWeather = await prismaClient.weather.create({
            data: {           
                user,
                temperature,
                moisture,    
                luminosity,
            },
        });
    return NewWeather
    }
}

export {CreateWeatherService}