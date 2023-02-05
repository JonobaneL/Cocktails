import React, { useEffect, useState } from "react";
import CocktailService from "../API/CocktailService";
import DrinkList from "../components/DrinkList/DrinkList";
import FindCocktail from "../components/FindCocktail/FindCocktail";
import PopularDrinks from "../components/PopularDrinks/PopularDrinks";

const Home =()=>{
    const [populaDrinks,setPopularDrinks] = useState([])
    useEffect(()=>{
        let temporalVar = CocktailService.getPopularCocktails();
        temporalVar.then(res=>setPopularDrinks(res))
    },[])
    console.log(populaDrinks)
    return(
        <div>
            <FindCocktail />
            <PopularDrinks />
        </div>
    )
}
export default Home;