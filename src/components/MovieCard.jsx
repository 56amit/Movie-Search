// src/components/MovieCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';


const MovieCard = ({ movie, onFavorite }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button className={styles.cardButton} onClick={() => navigate(`/movie/${movie.imdbID}`)}>More Info</button>
            <button className={styles.cardButton} onClick={() => onFavorite(movie)}>Favorite</button>
        </div>
    );
};

export default MovieCard;
