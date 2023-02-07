import { useParams } from "react-router-dom";
import DrinkInfo from "../components/DrinkInfo/DrinkInfo";

const Drink = ()=>{
    const data = useParams();
    return(
        <div className="drink">
            <DrinkInfo drinkId={data.id}/>
        </div>
    )
}
export default Drink;