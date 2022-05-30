import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/sign-in' element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}