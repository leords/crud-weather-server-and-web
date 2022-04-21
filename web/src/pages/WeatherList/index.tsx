import React, { useEffect, useState } from "react";
import {api} from '../../services/api';

import styles from './styles.module.scss';

//tipagem
type Weather = {
    date: String
    id: String
    luminosity: String
    moisture: String
    temperature: String
    user: String
}

export function WeatherLista() {

    const [weather, setWeather] = useState<Weather[]>([])

    useEffect(() => {
        api.get('last').then(response => {
            setWeather(response.data)
        })
    }, [weather])


    return(
        <div className={styles.container}>
            <ul className={styles.list}>

                {weather.map(weather => {
                    return (
                        <li className={styles.weather}>
                            <div className={styles.userContainer}>
                                <span>{weather.user}</span>
                                <span>{weather.id}</span>
                            </div>

                            <div className={styles.weatherContainer} >
                                <div className={styles.info}>
                                    <span>Temperatura:</span>
                                    <span>{weather.temperature}</span>
                                </div>
                                <div className={styles.info}>
                                    <span>Umidade:</span>
                                    <span>{weather.moisture}</span>
                                </div>
                                <div className={styles.info}>
                                    <span>Luminosidade:</span>
                                    <span>{weather.luminosity}</span>
                                </div>
                                <div className={styles.info}>
                                    <span>Data:</span>
                                    <span>{weather.date}</span>
                                </div>
                            </div>
                        </li>        
                    )
                })}
                    
            </ul>
        </div>
    )
} 