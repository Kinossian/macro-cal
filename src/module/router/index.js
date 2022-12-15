import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajouter from "../../page/ajouter"
import Repas from '../../page/repas';
import Home from '../../page/home';


const Router = ({ user, aliments }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home user={user} />} />
                    <Route
                        path="/ajouter"
                        element={<Ajouter user={user} aliments={aliments} />} />
                    <Route
                        path="/repas"
                        element={<Repas user={user} />} />
                    <Route
                        path="*"
                        element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;