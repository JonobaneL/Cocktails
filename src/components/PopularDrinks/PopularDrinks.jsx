import React, {useState,useEffect} from "react";
import styles from './PopularDrinks.module.css'
import CocktailService from "../../API/CocktailService";
import DrinkList from "../DrinkList/DrinkList";

const PopularDrinks =()=>{
    const [populaDrinks,setPopularDrinks] = useState([])
    useEffect(()=>{
        let temporalVar = CocktailService.getPopularCocktails();
        temporalVar.then(res=>setPopularDrinks(res))
    },[])
    console.log(populaDrinks)
    return(
        <div className={styles.popular}>
            <h2 className={styles.title}>Popular Drinks</h2>
            {populaDrinks ?<DrinkList drinks={populaDrinks}/>: <h1>ISempty</h1>}
        </div>
    )
}

export default PopularDrinks;