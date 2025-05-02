// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navLink} to="/">Home</Link>
            <Link className={styles.navLink} to="/favorites">Favorites</Link>
        </nav>
    );
};

export default Navbar;
