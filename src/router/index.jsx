import { Navigate } from "react-router-dom";
import Drink from "../pages/Drink";
import Home from "../pages/Home";


export const PublicRoutes =[
    {path:'/',element:<Home/>},
    {path:'/cocktail/:id',element:<Drink/>},
    {path:'*',element:<Navigate to='/'/>}
]