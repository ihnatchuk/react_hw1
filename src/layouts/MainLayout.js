import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components";

export const MainLayout = () => {
    return (
        <div className={'MainLayout'}>
            <Header/>
            <Outlet/>
        </div>
    );
};
