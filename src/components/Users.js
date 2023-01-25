import React, {useEffect, useState} from 'react';

import {usersService} from "../services";
import {User} from "./User";
import './users.css'
export const Users = ({setChosenUserId}) => {

    const [users, setUsers] = useState([]);


    useEffect(()=>{
        usersService.getAll().then(value=>value.data).then(users=>setUsers([...users]))

    },[])

    return (
        <>
            {
                users.map( user => <User key={user.id} user={user} setChosenUserId={setChosenUserId}/> )
            }
        </>
    );
};
