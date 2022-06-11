import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "pages/Search";
// import Login from "components/Login";
import PublicLayaout from "layaouts/PublicLayaout";
import Home from "components/Restaurants";
import Restaurants from "components/Restaurants";
import RestaurantsProduct from "components/RestaurantsProduct";
import Details from "components/Details";
import LoadingPage from "pages/LoadingPage";


const App = () => {
    return(
        <Router>
            <PublicLayaout>
                <Routes>
                <Route path="/restaurants/:id/details/:id_prodduct" element={<Details/>}/>
                    <Route path="/restaurants/:id" element={<RestaurantsProduct/>}/>
                    <Route path="/restaurants" element={<Restaurants/>}/>
                    <Route path="/search" element={<Search/>}/>
                    {/* <Route path="/login" element={<Login/>}/> */}
                    <Route path="/home" exact element={<Home/>}/>
                    <Route path="/" element={<LoadingPage/>}/>
                </Routes>
            </PublicLayaout>

        </Router>
    )
}


export default App;