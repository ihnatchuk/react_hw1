import React, {useEffect, useState} from 'react';

import {Post,PostDetails} from "../../components";
import {getPosts} from "../../services";

const Posts = () => {

const [posts, setPosts]=useState([]);
const [postId, setPostId]=useState(null);

    useEffect(()=>{
        getPosts().then(posts=>setPosts(posts))},[]);
    return (
        <div>
            <div className={'post-details'}>
                <h2>Post details:</h2>
                {postId&&<PostDetails postId={postId}/>}
            </div>

            <h2>Posts:</h2>
            {posts.map(post=> <Post key={post.id} post={post} setPostId={setPostId}/>
            )}
        </div>
    );
};

export
{
    Posts
};