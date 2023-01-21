import React from 'react';

const Post = ({post,setPostId}) => {
    const {id, title}=post
    return (
        <div>
            <div className={'post'}>
                <h2>{id}. {title}</h2>
            </div>
            <button onClick={()=> setPostId(id)}>Post details</button>
        </div>
    );
};

export {Post};