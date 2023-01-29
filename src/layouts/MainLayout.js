import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components";
import css from './Lyaout.module.css'

export const MainLayout = () => {
    return (
        <div className={css.MainLayout}>
            <div className={css.firstDiv}></div>
            <Header/>
            <Outlet/>
        </div>
    );
};
