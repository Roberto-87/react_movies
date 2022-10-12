import React from 'react'
import { Header } from './Header'
import { MoviesGrid } from './MoviesGrid'


export function App() {
    return (
        <div>
            <Header title="React Movies" slogan="The best thrillers ever" logo='🙀' />
            <main>
                <MoviesGrid />
            </main>
        </div>
    )
}

