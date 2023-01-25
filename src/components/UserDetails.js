import React, {useEffect, useState} from 'react';
import {usersService} from "../services";

export const UserDetails = ({ chosenUserId, setChosenUserIdPosts }) => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        usersService.getUserById(chosenUserId).then(value=>value.data).then(value=>setUser(value))
    },[chosenUserId])

    return (
        <>
            {user&&
                <div>
                    <h2>{user.id}. {user.name}</h2>
                    <h3>{user.email}</h3>
                    <button onClick={()=>{
                        setChosenUserIdPosts(chosenUserId)
                        const postsDiv=document.getElementsByClassName('posts')[0]
                        postsDiv.classList.remove('blank')
                    }}>Posts</button>
                </div>
            }
        </>
    );
};
