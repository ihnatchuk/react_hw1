import React from 'react';
import {Link, useNavigate} from "react-router-dom";

export const Post = ({post}) => {
    const {id, userId, title}=post

    const navigate=useNavigate()

    return (
        <div className={'post'} >
            <h2>{id}. UserId: {userId}</h2>
            <h3>{title}</h3>
            {/*<Link to={id.toString()} state={{...post}}>Post Details</Link>*/}
            <button onClick={()=>navigate(id.toString(),{state:post})}>Post Details</button>
        </div>
    );
};
