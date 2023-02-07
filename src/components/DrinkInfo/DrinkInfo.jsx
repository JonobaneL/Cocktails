import { useState, useEffect } from 'react';
import { useFetching } from '../../hooks/useFetching';
import styles from './DrinkInfo.module.css'
import { getIngredients,getMeasure } from '../../utils/drinkData'
import Loader from '../UI/loader/Loader';
import CocktailService from '../../API/CocktailService'

const DrinkInfo = ({drinkId})=>{
    const [drinkInfo, setDrinkInfo] = useState({});
    const [fetchDrink,isDrinkLoading,drinkError] = useFetching(async()=>{
        const response = await CocktailService.getCocktailById(drinkId);
        console.log(response.data.drinks[0])
        setDrinkInfo(response.data.drinks[0])
    })
    const ingredients = getIngredients(drinkInfo);
    const measure = getMeasure(drinkInfo,ingredients.length) ;
    console.log(ingredients)
    console.log(measure)
    useEffect(() => {
        fetchDrink();
    }, []);
    if(isDrinkLoading){
        return(
            <div className={styles.drinInfo}>
                <Loader color='blue' />
            </div>
        )
    }else{
        return(
            <div className={styles.drinInfo}>
                <div className={styles.details}>
                    <img className={styles.drinImage} src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrink} />
                    <div className={styles.info}>
                        <h2 className={styles.drinkName}>{drinkInfo.strDrink}</h2>
                        <p className={styles.category}>{drinkInfo.strCategory}</p>
                        <p className={styles.glass}>You should use {drinkInfo.strGlass}</p>
                        <ul className={styles.ingredients}>
                            {ingredients.map((item,index)=>
                                <li key={index}><span>{item}</span><span>{measure[index]}</span></li>
                            )}
                        </ul>
                        <div className={styles.instruction}>{drinkInfo.strInstructions}</div>
                    </div>
                    
                    </div>
            </div>
        )
    }
   
};

export default DrinkInfo;