import React from 'react';
import {Post} from "../../components";
import {useLocation} from "react-router-dom";

export const PostPage = () => {
    const {state}=useLocation()

    return (
        <>
            <h2>Post:</h2>
            <Post postId={state}/>
        </>

    );
};
