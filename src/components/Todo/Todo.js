// import React, {useEffect, useState} from 'react';
// import {todoService} from "../../api";
// import {Post} from "../Post/Post";
// export const Todos = () => {
//     const [posts, setPosts]=useState([])
//
//     useEffect(()=>{
//         todoService.getAll().then(({data})=>setPosts([...data]))
//     },[])
//
//     return (
//         <div className={'posts'}>
//             {
//                 posts.map(post=><Post key={post.id} post={post}/>)
//             }
//         </div>
//     );
// };
import React from 'react';

export const Todo = ({todo}) => {
    const {id, userId, title, completed}=todo

    return (
        <div className={'Todo'}>
            <h2>{id}. UserId: {userId}</h2>
            <h3>{title}</h3>
            <div>completed: {completed.toString()}</div>
        </div>
    );
};
