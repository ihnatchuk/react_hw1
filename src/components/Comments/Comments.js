import React, {useContext, useEffect, useState} from 'react';

import { commentsService } from "../../api";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'
import {MyContext} from "../../index";

export const Comments = () => {
    const [comments,setComments]=useState([])

    const context=useContext(MyContext);

    useEffect(()=>{

        commentsService.getAll().then(({data})=>setComments([...data]))
        context.pages.push({name:'Comments', status:true});

    },[])


    return (
        <div className={css.Comments}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};