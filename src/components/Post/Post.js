import React, {useEffect, useState} from 'react';

import {postService} from "../../api/postService";
import css from './Post.module.css'

export const Post = ({postId}) => {
    const [post,setPost]=useState(null)

    useEffect(()=>{
        postService.getById(postId).then(({data})=>setPost(data))

    },[postId])

    return (
        <>
            {
                post&&
                    <>
                        <div className={css.gapBeforeComments}></div>
                        <div className={css.Post}>
                            <h2>Post:</h2>
                            <h2>{post.id}. UserId:{post.userId}</h2>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </>

            }
        </>
    );
};
