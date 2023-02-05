import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";

const RequireAuth = ({children}) => {
    const location=useLocation()
    const {user}=useAuthContext()

    console.log(user);

    if (!user){

        return <Navigate to={'/login'} state={location.pathname}/>

    }else{

        return children
    }
};

export {RequireAuth};