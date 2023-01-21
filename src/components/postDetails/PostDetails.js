import React, {useEffect, useState} from 'react';

import './postDetails.css'
import {getPost} from "../../services";

const PostDetails = ({postId}) => {

    const [post, setPost]=useState(null);

    useEffect(()=>{getPost(postId).then(value=> setPost(value))}
        ,[postId])

    return (
        <div>
            {post && <div >
                <h2>{post.id}. userId: {post.userId}</h2>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>}
        </div>

    );
};

export {PostDetails};