import React from 'react';
import {Comments} from "../../components";
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <>
            <Outlet/>
            <Comments/>
        </>

    );
};
