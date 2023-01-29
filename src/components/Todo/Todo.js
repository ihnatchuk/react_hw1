import React from 'react';

import css from'./Todo.module.css'

export const Todo = ({todo}) => {
    const {id, userId, title, completed}=todo

    return (
        <div className={css.Todo}>
            <h2>{id}. UserId: {userId}</h2>
            <h3>{title}</h3>
            <div>completed: {completed.toString()}</div>
        </div>
    );
};
