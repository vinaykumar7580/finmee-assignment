
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Ntwist from "../Pages/Ntwist-home";
import Github from "../Pages/Github-home";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ntwist" element={<Ntwist/>} />
            <Route path="/github" element={<Github/>} />
        </Routes>
    )
}
export default AppRoutes