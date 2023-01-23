import React, {useEffect, useState} from 'react';

import {usersService} from "../services/usersService";
import {User} from "./User";

export const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        usersService.getAll().then(value=>value.data).then(users=>setUsers([...users]))

    },[])

    return (
        <>
            {
                users.map( user => <User key={user.id} user={user}/> )
            }
        </>
    );
};
