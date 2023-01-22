import React, {useEffect, useState} from 'react';

import {Post,PostDetails} from "../../components";
import {postService} from "../../services/postService";


const Posts = () => {

const [posts, setPosts]=useState([]);
const [postId, setPostId]=useState(null);
const [postDetails, setPostDetails]=useState(null);

    useEffect(()=>{
        postService.getAll().then(value=>value.data).then(value=>setPosts([...value]))
    },[]);

    useEffect(()=>{
        postId && postService.getPost(postId).then(value=>value.data).then(value=>setPostDetails({...value}))
    },[postId]);

    return (
        <div>
            <div className={'post-details'}>
                <h2>Post details:</h2>
                {postDetails&&<PostDetails postDetails={postDetails}/>}
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