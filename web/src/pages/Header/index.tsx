import React from "react";
import styles from './styles.module.scss';

import LogoImg from '../../assets/logo.png';

export function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={LogoImg} alt="Logo Clima" />
                <h1>Weather</h1>
            </div>
        </div>

    )
}