import React from 'react';
import {Link} from "react-router-dom";

export const Post = ({post}) => {
    const {id, userId, title}=post
    return (
        <div>
            <h2>{id}. UserId: {userId}</h2>
            <h3>{title}</h3>
            <Link to={id.toString()}>Post Details</Link>
        </div>
    );
};
