import React, {useContext, useEffect, useState} from 'react';

import {todoService} from "../../api";
import {Todo} from "../Todo/Todo";
import css from './Todos.module.css'
import {MyContext} from "../../index";

export const Todos = () => {
    const [todos, setTodos]=useState([])

    const context=useContext(MyContext);

    useEffect(()=>{
        todoService.getAll().then(({data})=>setTodos([...data]))
        context.pages.push({name:'Todos', status:true});

    },[])


    return (
        <div className={css.Todos}>
            {
                todos.map(todo=><Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};
