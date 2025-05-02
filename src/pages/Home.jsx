// src/pages/Home.jsx
import React, { useState } from 'react';
import { searchMovies } from '../services/omdbService';
import MovieCard from '../components/MovieCard';
import styles from '../components/styles.module.css';


const Home = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        const results = await searchMovies(query);
        setMovies(results);
        setLoading(false);
    };

    const handleFavorite = (movie) => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
            favorites.push(movie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert(`${movie.Title} added to favorites!`);
        } else {
            alert(`${movie.Title} is already in favorites!`);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title} >Movie Browser</h1>
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input className={styles.searchInput}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a movie..."
                />
                <button className={styles.searchButton} type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} onFavorite={handleFavorite} />
                ))}
            </div>
        </div>
    );
};

export default Home;
