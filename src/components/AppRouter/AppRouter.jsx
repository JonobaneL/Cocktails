import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../../router/index";

const AppRoute =()=>{
    return(
        <Routes>
            {PublicRoutes.map((item,index)=>
                <Route
                key={index}
                path={item.path}
                element={item.element}
                />
                )}
        </Routes>
    )
}

export default AppRoute;