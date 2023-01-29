import React from 'react';

import css from './Album.module.css'

export const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div className={css.Album}>
            <h2>{id}. UserId:{userId}</h2>
            <h3>{title}</h3>
        </div>
    );
};
