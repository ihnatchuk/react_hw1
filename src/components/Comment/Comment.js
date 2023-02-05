import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Comment.module.css'
import {Button} from "../Button/Button";

export const Comment = ({comment}) => {
    const {id, postId, name, email, body}=comment

    const navigate=useNavigate();

    return (
        <div className={css.Comment}>
            <h2>{id}.  postId:{postId}</h2>
            <h3>{email}</h3>
            <h3>{name}</h3>
            <p>{body}</p>

            <div style={{display: 'flex',justifyContent:'center'}}>
                <Button click={()=>navigate(postId.toString(),{state:postId})}>Post</Button>
            </div>


            {/*<button onClick={()=>navigate(postId.toString(),{state:postId})}>Post</button>*/}
        </div>
    );
};
