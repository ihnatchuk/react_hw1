import React from 'react';

export const User = ({user, setUserIdPosts}) => {

    const {id, name }=user;

    return (
        <div>
            <h2>{id}. {name}</h2>
            <button onClick={()=>setUserIdPosts(id)}>Posts</button>
        </div>
    );
};
