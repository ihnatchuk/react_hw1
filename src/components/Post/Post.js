import React, {useEffect, useState} from 'react';
import {postService} from "../../api/postService";

export const Post = ({postId}) => {
    const [post,setPost]=useState(null)

    useEffect(()=>{
        postService.getById(postId).then(({data})=>setPost(data))

    },[postId])

    return (
        <div className={'Post'}>
            {
                post&&
                    <>
                        <h2>{post.id}. UserId:{post.userId}</h2>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </>
            }
        </div>
    );
};
