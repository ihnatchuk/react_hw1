import React, {useEffect, useState} from 'react';

import './postDetails.css'
import {getPost} from "../../services";

const PostDetails = ({ postId }) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        getPost(postId).then(value => setPost(value))
    },[postId])

    return (
        <>
            {post && (
                <div >
                    <h2>{post.id}. userId: {post.userId}</h2>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )}
        </>

    );
};

export {PostDetails};