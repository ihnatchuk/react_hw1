import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
export const CommentsPage = () => {
    return (
        <>
            <Outlet/>
            <h2>Comments:</h2>
            <Comments/>
        </>

    );
};
