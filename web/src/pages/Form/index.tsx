import React, { useState } from "react";
import { api } from "../../services/api";

import styles from './styles.module.scss';

type Weather = {
    date: String
    id: String
    luminosity: String
    moisture: String
    temperature: String
    user: String
}

export function Form() {

    const [idUser, setIdUser] = useState('')
    const [weather, setWeather] = useState<Weather[]>([])

    async function Search(UserID: string) {
        try {
            await api.post('search', { id:UserID }).then(response => 
                setWeather(response.data)  ) 
        } catch {
            alert("Ops, erro ao buscar!")
        }    
    }


    async function Delete(UserID: string) {
        try {
            await api.post('delete', { id:UserID })
            alert("Item apagado com sucesso!")
            setIdUser('')
        } catch {
            alert("Ops, tem algum erro ai!")
            setIdUser('')
        }
    }

        return(
            <div className={styles.container} >
    
                <div className={styles.input}>
                    <p>ID</p>
                    <input 
                    type="text" 
                    onChange={e => setIdUser(e.target.value)}
                    />
                    <button onClick={() => Search(idUser)}>Buscar</button>
                </div>

                {Object.keys(weather).length > 0 && ( //condição para renderizar essa div.
                    <><div className={styles.form}>
                        <div className={styles.info}>
                            <span>Nome</span>
                            <span>{weather.user}</span>
                        </div>
                        <div className={styles.info}>
                            <span>Id</span>
                            <span>{weather.id}</span>
                        </div>
                        <div className={styles.info}>
                            <span>Temperatura</span>
                            <span>{weather.temperature}</span>
                        </div>
                        <div className={styles.info}>
                            <span>Umidade</span>
                            <span>{weather.moisture}</span>
                        </div>
                        <div className={styles.info}>
                            <span>Luminosidade</span>
                            <span>{weather.luminosity}</span>
                        </div>
                        <div className={styles.info}>
                            <span>Data</span>
                            <span>{weather.date}</span>
                        </div>
                    </div>

                    <div className={styles.buttonDel}>
                        <button onClick={() => Delete(idUser)}>Deletar</button>
                    </div></>
                    
                )}
            </div>
        )
}
