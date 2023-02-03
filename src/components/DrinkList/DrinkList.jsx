import React from "react";
import DrinkCard from "../DrinkCard/DrinkCard";
import styles from './DrinkList.module.css'
const DrinkList=({drinks})=>{
    return(
        <div className={styles.list}>
            {drinks.map(item=>
                <DrinkCard key={item.idDrink} data={item}/>
                )}
        </div>
    )
}

export default DrinkList;