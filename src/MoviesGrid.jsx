import React from 'react'
import { MovieCards } from './MovieCards'
import movies from './movies.json'
import styles from './MoviesGrid.module.css'

export function MoviesGrid() {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie => (
                <MovieCards key={movie.id} movie={movie} />
            ))}
        </ul>
    )
}


