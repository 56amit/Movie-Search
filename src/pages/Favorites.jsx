// src/pages/Favorites.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import styles from '../components/styles.module.css'

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleRemoveFavorite = (imdbID) => {
        const updatedFavorites = favorites.filter(movie => movie.imdbID !== imdbID);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className={styles.favoritesContainer}>
            <h1 className={styles.title}>Favorites</h1>
            {favorites.length === 0 ? (
                <p>No favorite movies found.</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {favorites.map(movie => (
                        <div key={movie.imdbID}>
                            <MovieCard movie={movie} onFavorite={handleRemoveFavorite} />
                            <button className={styles.noFavorites} onClick={() => handleRemoveFavorite(movie.imdbID)}>Remove from Favorites</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
