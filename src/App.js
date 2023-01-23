import './App.css';
import React from "react";

import {Users} from "./components/Users";
const App=()=> {

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

        </div>

    </div>
  );
}

export {App};
