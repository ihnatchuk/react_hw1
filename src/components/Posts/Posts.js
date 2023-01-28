import React, {useEffect, useState} from 'react';
import {postService} from "../../api";
import {Post} from "../Post/Post";
export const Posts = () => {
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts([...data]))
    },[])

    return (
        <div className={'posts'}>
            {
                posts.map(post=><Post key={post.id} post={post}/>)
            }
        </div>
    );
};
