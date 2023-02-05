import React, {useRef} from 'react';

import { useAuthContext } from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "../../components/Button/Button";
import css from './LoginPage.module.css'

const LoginPage = () => {

    const userName=useRef();

    const {logIn}=useAuthContext();

    const navigate=useNavigate();

    const {state}=useLocation();

    const login = ()=>{

        logIn(userName.current.value);
        state?navigate(state, {replace:true}):navigate(-1, {replace:true})

    };

    return (

        <div className={css.InputForm}>
            <input type="text" placeholder={'username'} ref={userName}/>
            <Button click={login} style={{width: '100px'}}>Submit</Button>
        </div>

    );
};

export {LoginPage};