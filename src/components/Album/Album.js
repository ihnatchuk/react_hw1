import React from 'react';

export const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div className={'Album'}>
            <h2>{id}. UserId:{userId}</h2>
            <h3>{title}</h3>
        </div>
    );
};
