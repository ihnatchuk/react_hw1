import React, {useEffect, useState} from 'react';

import { commentsService } from "../../api";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'

export const Comments = () => {
    const [comments,setComments]=useState([])

    useEffect(()=>{

        commentsService.getAll().then(({data})=>setComments([...data]))

    },[])


    return (
        <div className={css.Comments}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};