import React, {useEffect, useState} from "react";
import styles from './FindCocktail.module.css'
import CInput from "../UI/input/cInput";
import { useFetching } from "../../hooks/useFetching";
import CocktailService from "../../API/CocktailService";
import DrinkList from "../DrinkList/DrinkList";
import findIcon from '../../images/search-icon.png'
import cancelIcon from '../../images/cancel.png'
import Loader from "../UI/loader/Loader";
// import Filters from "../Filters/Filters";

const FindCocktail =()=>{
    const [search,setSearch] =useState('');
    const [cocktails, setCocktails] = useState([]);
    const [isShow, setIsShow] =useState(false)
    const [fetcCocktails,isCocktailsLoading,cocktailsError] = useFetching(async()=>{
        const response = await CocktailService.getCocktailByName(search);
        console.log(response.data.drinks)
        setCocktails(response.data.drinks);
    })

    const getData=()=>{
        fetcCocktails();
        setIsShow(true);
        console.log(cocktails);
    }
    const clearData=()=>{
        setIsShow(false);
        setSearch('');
    }
    return(
        <div className={styles.find}>
            {/* вирішити як обновити стейт після натиску на кнопку в компоненті Fiter */}
            {/* <Filters search={search} setSearch={setFCocktail} getData={getData}/> */}
            <div className={styles.filter}>
                <CInput value={search} onChange={e=>setSearch(e.target.value)} />
                {isShow&&<button className={styles.cancelButton} onClick={clearData}><img src={cancelIcon} alt="Cancel" /></button>}
                <button className={styles.findButton} onClick={getData}><img src={findIcon} alt="Find" /></button>
            </div>
            
            {isShow &&(isCocktailsLoading ? <Loader color='blue'/>:<DrinkList drinks={cocktails}/>)}
        </div>
    )
}
export default FindCocktail;