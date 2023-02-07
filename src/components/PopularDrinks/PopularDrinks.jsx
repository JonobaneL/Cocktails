import React, {useState,useEffect} from "react";
import styles from './PopularDrinks.module.css'
import CocktailService from "../../API/CocktailService";
import DrinkList from "../DrinkList/DrinkList";
import Loader from "../UI/loader/Loader";
import {useFetching} from '../../hooks/useFetching'

const PopularDrinks =()=>{
    const [populaDrinks,setPopularDrinks] = useState([])
    const [fetchP, isPLoading, pError] = useFetching(async()=>{
        let temporalVar = CocktailService.getPopularCocktails();
            temporalVar.then(res=>setPopularDrinks(res))
    })
    useEffect(()=>{
        fetchP(); 
    },[])
    
   
    console.log('sds',populaDrinks)
    return(
        <div className={styles.popular}>
            <h2 className={styles.title}>Popular Drinks</h2>
            {isPLoading ?<Loader color='blue'/>:<DrinkList drinks={populaDrinks}/>}
        </div>
    )
}

export default PopularDrinks;