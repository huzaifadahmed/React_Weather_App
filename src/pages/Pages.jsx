import Home from "./Home";
import DailyForcast from "./DailyForcast";
import WeeklyForcast from "./WeeklyForcast";
import {Route, Routes} from "react-router-dom";

function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/daily/:city" element={<DailyForcast/>}/>
            <Route path="/weekly/:city" element={<WeeklyForcast/>}/>

        </Routes>
    )
}


export default Pages;