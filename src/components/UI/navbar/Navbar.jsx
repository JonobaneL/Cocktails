import React from 'react';
import styles from  './Navbar.module.css';
import glass from '../../../images/cocktails.png'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <img src={glass} alt="logo" className={styles.imgLogo} />
                <p className={styles.logo}>Old Tom</p>
            </div>
            <div className={styles.intro}>
            <p className={styles.intro__title}>Find your perfect cocktail</p>
            </div>
        </div>
    );
};


export default Navbar;