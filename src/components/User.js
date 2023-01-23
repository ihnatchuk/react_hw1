import React from 'react';

export const User = ({user}) => {

    const {id, name }=user;

    return (

        <div>
            <h2>{id}. {name}</h2>
        </div>
    );
};
