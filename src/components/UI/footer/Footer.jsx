import styles from './Footer.module.css'
const Footer =()=>{
    return(
        <footer className={styles.footer}>
            <p>This website was created to exemplify and improve development skills.</p>
            <br />
            <p>For this website I used free API "TheCocktailDB" to get all the information.</p>
        </footer>
    )
}

export default Footer;