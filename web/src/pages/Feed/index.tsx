import React from "react";
import {WeatherLista} from '../WeatherList';
import { Form } from "../Form";

import styles from './styles.module.scss';

export function Feed() {
    return(
        <div className={styles.container}>
            <div className={styles.weather}>
                <WeatherLista />
            </div>
            <div className={styles.menu}>
                <Form />
            </div>

        </div>
    )
}