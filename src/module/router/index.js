import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../navbar/nav";
import Home from "../../page/home";
import Ajouter from '../../page/ajouter';
import Repas from '../../page/repas';

const Router = ({ user }) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav user={user} />}>
                        <Route index element={<Home />} />
                        <Route path="/ajouter" element={<Ajouter />} />
                        <Route path="/repas" element={<Repas />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;