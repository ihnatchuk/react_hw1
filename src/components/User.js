import React from 'react';

import './user.css'
export const User = ({user, setChosenUserId}) => {

    const {id, name }=user;

    return (
        <div className={'user'}>
            <h2>{id}. {name}</h2>
            <button onClick={()=>{
                setChosenUserId(id)
                const postsDiv=document.getElementsByClassName('posts')[0]
                postsDiv.classList.add('blank')
            }}>Details</button>
        </div>
    );
};
