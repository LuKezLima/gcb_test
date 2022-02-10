import React from "react";



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from "./views/landingPage/LandingPage";
import Registercp from "./views/register/Registercp";


export default ()=> {
    return(<>
        <Router>
        <Routes>

<Route exact path="/" element={<LandingPage/>}/>

<Route exact path="/register" element={<Registercp/>}/>

</Routes>
        </Router>
        </>
    )
}