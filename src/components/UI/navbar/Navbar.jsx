import React from 'react';
import styles from  './Navbar.module.css';
import glass from '../../../images/glass.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <img src={glass} alt="logo" className={styles.imgLogo} />
                <Link className={styles.logo} to='/'><p>Old Tom</p></Link>
            </div>
            <div className={styles.intro}>
            <p className={styles.intro__title}>Find your perfect cocktail</p>
            </div>
        </div>
    );
};


export default Navbar;