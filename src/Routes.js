import React from "react";
import {Routes, Route} from 'react-router-dom'

import LandingPage from "./App";
import Register from '../src/views/register/Registercp';

export default () => {
    return (
        <Routes>

        <Route exact path="/" element={<LandingPage/>}/>
  
        <Route exact path="/register" element={<Register/>}/>
       
        </Routes>
    )
}