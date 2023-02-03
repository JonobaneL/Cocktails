import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import CocktailService from "../API/CocktailService";
import { useFetching } from "../hooks/useFetching";
import { getIngredients,getMeasure } from "../utils/drinkData";

const Drink = ()=>{
    const data = useParams();
    const [drink,setDrink] = useState({})
    const [fetcDrink,isDrinkLoading,drinkError] = useFetching(async()=>{
        const response = await CocktailService.getCocktailById(data.id);
        console.log(response.data.drinks[0])
        setDrink(response.data.drinks[0])
    })
   const ingredients = getIngredients(drink);
   const measure = getMeasure(drink,ingredients.length) ;
    useEffect(() => {
        fetcDrink();
    }, []);
    return(
        <div className="drink">
            <img className="drinkImg" src={drink.strDrinkThumb} alt="" />
            <div className="drink-info">
                <p className="drink__title">{drink.strDrink}</p>
                <p className="drink__category">Category: {drink.strCategory}</p>
                <p className="drink__glass">You should use {drink.strGlass}</p>

            </div>
        </div>
    )
}
export default Drink;