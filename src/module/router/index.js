import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajouter from "../../page/ajouter";
import Repas from '../../page/repas';
import Home from '../../page/home';


const Router = ({ aliments }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />} />
                    <Route
                        path="/ajouter"
                        element={<Ajouter aliments={aliments} />} />
                    <Route
                        path="/repas"
                        element={<Repas />} />
                    <Route
                        path="*"
                        element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;