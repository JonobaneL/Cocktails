import React from "react";
import styles from './DrinkCard.module.css'

const DrinkCard =({data})=>{
    return(
        <div className={styles.drink}>
            <img src={data.strDrinkThumb} />
            <div className={styles.info}>
                <p className={styles.title}>{data.strDrink}</p>
                <hr />
                <p className={styles.subTitle}>{data.strCategory}</p>
            </div>
        </div>
    )
}
export default DrinkCard;