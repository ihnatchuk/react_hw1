import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {useAuthContext} from "../../hooks/useAuthContext";
import {Button} from "../Button/Button";
export const Header = () => {
    const {user, logOut}=useAuthContext();

    const navigate=useNavigate()

    let username, buttonName;
    user?username=user:username='Unknown User';
    user?buttonName="logout":buttonName='login';

    const click=()=>{
        if (user){
            logOut()
        }else{
            navigate('/login')
        }
    }


    return (
        <div className={css.Header}>
            <NavLink to={"todos"}>Todos</NavLink>
            <NavLink to={"albums"}>Albums</NavLink>
            <NavLink to={"comments"}>Comments</NavLink>

            <div className={css.UserLogin}>
                <div>{username}</div>
                <Button click={click}>{buttonName}</Button>
            </div>


        </div>
    );
};
