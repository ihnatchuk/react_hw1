import React, {useEffect, useState} from 'react';

import {usersService} from "../services";
import {Post} from "./Post";
import './posts.css'

export const Posts = ({chosenUserIdPosts}) => {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        usersService.getUserPosts(chosenUserIdPosts)
            .then(value=>value.data).then(posts=>setPosts([...posts]))

    },[chosenUserIdPosts])


    return (

        <div className={'posts'}>
            {posts.map( post => <Post key={post.id} post={post} /> )}
        </div>
    );
};
