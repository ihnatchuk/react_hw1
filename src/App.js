import './App.css';
import React, {useState} from "react";

import {Users} from "./components";
import {Posts} from "./components";
import {UserDetails} from "./components";


const App=()=> {
    const [chosenUserId, setChosenUserId] = useState(null);
    const [chosenUserIdPosts, setChosenUserIdPosts] = useState(null);

  return (

    <div className="App">

        <div className={'users'}>

            <div className={'users-list'}>
                <Users setChosenUserId={setChosenUserId}/>
            </div>

            <div className={'user-details'}>
                {chosenUserId&&<UserDetails chosenUserId={chosenUserId} setChosenUserIdPosts={setChosenUserIdPosts}/>}
            </div>

        </div>

        <div className={'posts'}>
            <Posts chosenUserIdPosts={chosenUserIdPosts} />
        </div>

    </div>
  );
}

export {App};
