import React from 'react'
import styles from './App.module.css'

export function Header({ title, slogan, logo }) {
    return (
        <header>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.slogan}>{slogan} {logo}</h2>
        </header>
    )
}

