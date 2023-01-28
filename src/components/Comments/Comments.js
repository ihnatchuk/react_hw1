import React, {useEffect, useState} from 'react';

import { commentsService } from "../../api";
import {Comment} from "../Comment/Comment";

export const Comments = () => {
    const [comments,setComments]=useState([])

    useEffect(()=>{
        commentsService.getAll().then(({data})=>setComments([...data]))
    },[])

    return (
        <div className={'Comments'}>
            <h2>Comments:</h2>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};