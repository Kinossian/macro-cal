import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Ajouter from "../../page/ajouter";
import Repas from '../../page/repas';
import Home from '../../page/home';


const Router = ({ aliments }) => {
    return (
        <>
            <HashRouter>
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
            </HashRouter>
        </>
    );
};

export default Router;