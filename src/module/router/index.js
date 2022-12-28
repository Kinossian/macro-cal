import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import DataBase from "../../page/database";
import Home from '../../page/home';
import Repas from '../../page/repas';
import Stat from '../../page/stat/index.js';


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
                        element={<DataBase aliments={aliments} />} />
                    <Route
                        path="/repas"
                        element={<Repas />} />
                    <Route
                        path="/stat"
                        element={<Stat />} />
                    <Route
                        path="*"
                        element={<Home />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default Router;