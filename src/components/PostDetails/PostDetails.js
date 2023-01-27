import React, {useEffect, useState} from 'react';

import {postService} from "../../api";

export const PostDetails = ({postId}) => {

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
