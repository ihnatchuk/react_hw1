import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Comment.module.css'

export const Comment = ({comment}) => {
    const {id, postId, name, email, body}=comment

    const navigate=useNavigate();

    return (
        <div className={css.Comment}>
            <h2>{id}.  postId:{postId}</h2>
            <h3>{email}</h3>
            <h3>{name}</h3>
            <p>{body}</p>
            <button onClick={()=>navigate(postId.toString(),{state:postId})}>Post</button>
        </div>
    );
};
