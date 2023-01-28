import React, {useEffect, useState} from 'react';

import {todoService} from "../../api";
import {Todo} from "../Todo/Todo";

export const Todos = () => {
    const [todos, setTodos]=useState([])

    useEffect(()=>{
        todoService.getAll().then(({data})=>setTodos([...data]))
    },[])

    return (
        <div className={'Todos'}>
            {
                todos.map(todo=><Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};
