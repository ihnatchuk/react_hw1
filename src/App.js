import './App.css';
import React, {useState} from "react";

import {Users} from "./components";
import {Posts} from "./components";

const App=()=> {

    const [posts, setPosts] = useState([]);



  return (

    <div className="App">

        <div className={'users'}>

            <div className={'users-list'}>
                <Users/>
            </div>

            <div className={'user-details'}>

            </div>

        </div>

        <div className={'posts'}>
            <Posts key={posts.id} posts={posts}/>
        </div>

    </div>
  );
}

export {App};
