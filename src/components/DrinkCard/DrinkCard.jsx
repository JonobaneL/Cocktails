import React from "react";
import { Link } from "react-router-dom";
import styles from './DrinkCard.module.css'

const DrinkCard =({data})=>{
    return(
        <div className={styles.drink}>
            <img src={data.strDrinkThumb} />
            <div className={styles.info}>
                <Link target='_blank' to={`/cocktail/${data.idDrink}`}><p className={styles.title}>{data.strDrink}</p></Link>
                {/* <hr />
                <p className={styles.subTitle}>{data.strCategory}</p> */}
            </div>
        </div>
    )
}
export default DrinkCard;