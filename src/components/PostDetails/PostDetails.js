import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../api";

export const PostDetails = () => {
    const {postId}=useParams()
    const [post, setPost]=useState(null)

    useEffect(()=>{
        postService.getById(postId).then(({data})=>setPost(data))
    },[postId])

    return (
        <>
            { post &&
                <div>
                    <h2>{post.id} {post.userId}</h2>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            }
        </>


    );
};
