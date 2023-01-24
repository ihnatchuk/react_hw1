import React, {useEffect, useState} from 'react';

import {usersService} from "../services";
import {User} from "./User";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [userIdPosts, setUserIdPosts] = useState(null);


    useEffect(()=>{
        usersService.getAll(userIdPosts).then(value=>value.data).then(posts=>posts)

    },[userIdPosts])

    useEffect(()=>{
        usersService.getUserPosts().then(value=>value.data).then(users=>setUsers([...users]))

    },[])

    return (
        <>
            {
                users.map( user => <User key={user.id} user={user} setUserIdPosts={setUserIdPosts}/> )
            }
        </>
    );
};
