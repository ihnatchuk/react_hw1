import React from 'react';

import {PostDetails} from "../../components";
import {useLocation, useParams} from "react-router-dom";

export const PostDetailsPage = () => {
    const {postId}=useParams();

    const {state}=useLocation();

    return (
            <PostDetails postId={postId} state={state}/>
    );
};
