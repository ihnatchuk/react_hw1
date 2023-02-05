import React, {useContext, useEffect, useState} from 'react';

import {postService} from "../../api/postService";
import css from './Post.module.css'
import {MyContext} from "../../index";

export const Post = ({postId}) => {
    const [post,setPost]=useState(null)

    useEffect(()=>{
        postService.getById(postId).then(({data})=>setPost(data))

    },[postId])

    const context=useContext(MyContext);

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
                            <div>Visited by {context.name} age:{context.age}</div>
                            <div>Visited pages:</div>
                             <div>
                                 {
                                     context.pages.map(page=><div>page:{page.name}  ---  {page.status.toString()}</div>  )
                                 }
                             </div>

                        </div>
                    </>

            }
        </>
    );
};
