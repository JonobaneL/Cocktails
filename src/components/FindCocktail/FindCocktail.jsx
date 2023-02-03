import React, {useState} from "react";
import styles from './FindCocktail.module.css'
import CInput from "../UI/input/cInput";
import { useFetching } from "../../hooks/useFetching";
import CocktailService from "../../API/CocktailService";
import DrinkCard from "../DrinkCard/DrinkCard";
import DrinkList from "../DrinkList/DrinkList";

const FindCocktail =()=>{
    const [fCocktail,setFCocktail] =useState('');
    const [cocktails, setCocktails] = useState([]);
    const [fetcCocktails,isCocktailsLoading,cocktailsError] = useFetching(async()=>{
        const response = await CocktailService.getCocktailByName(fCocktail);
        console.log(response.data.drinks)
        setCocktails(response.data.drinks);
    })
    const getData=()=>{
        fetcCocktails();
        console.log(cocktails);
    }
    return(
        <div className={styles.find}>
            <CInput value={fCocktail} onChange={e=>setFCocktail(e.target.value)} />
            <button onClick={getData}>Find</button>
            <DrinkList drinks={cocktails}/>
        </div>
    )
}
export default FindCocktail;