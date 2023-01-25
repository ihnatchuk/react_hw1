import React from 'react';

import './post.css'

export const Post = ({post}) => {
    const {id, userId, title}=post

    return (
        <div className={'post'}>
            <h2>{id}. UserId: {userId} </h2>
            <h3>{title}</h3>
        </div>
    );
};
