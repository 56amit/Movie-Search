// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/omdbService';
import styles from './styles.module.css';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div  className={styles.detailsContainer}>
            <h1 className={styles.title}>{movie.Title}</h1>
            <img className={styles.detailsImage} src={movie.Poster} alt={movie.Title} />
            <p className={styles.detailsText}>Genre: {movie.Genre}</p>
            <p className={styles.detailsText}>Director: {movie.Director}</p>
            <p className={styles.detailsText}>Plot: {movie.Plot}</p>
            <p className={styles.detailsText}>Ratings: {movie.Ratings.map(r => `${r.Source}: ${r.Value}`).join(', ')}</p>
        </div>
    );
};

export default MovieDetails;
