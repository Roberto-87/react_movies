import React from 'react'
import styles from './MovieCard.module.css'


export function MovieCards({ movie }) {
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path


    return (
        <div className={styles.movieCard}>
            <img width={230} height={345}
                className={styles.movieImage}
                src={imageUrl} alt={movie.title} />
            <li className={styles.movieTitle}>{movie.title}</li>
        </div>
    )
}
