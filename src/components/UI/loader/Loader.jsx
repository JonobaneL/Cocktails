import styles from './Loader.module.css'

const Loader = ({color}) =>{
    if(color=='white'){
        return <div className={styles.wLoader}></div>
    }else if(color=='blue'){
        return <div className={styles.bLoader}></div>
    }
}

export default Loader;