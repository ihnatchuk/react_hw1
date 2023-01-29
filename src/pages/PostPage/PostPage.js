import React from 'react';
import {useLocation} from "react-router-dom";

import {Post} from "../../components";
import css from './PostPage.module.css'


export const PostPage = () => {
    const {state}=useLocation()

    return (
        <div className={css.PostPage}>
            <Post postId={state}/>
        </div>

    );
};
