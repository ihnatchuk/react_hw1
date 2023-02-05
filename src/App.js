import './App.css';
import {ClassComponent} from "./ClassComponent";
import {useState} from "react";
import {FunctionalComponent} from "./FunctionalComponent";

const App=()=> {

    const [flag,setFlag]=useState(true)

  return (
    <div className="App">
        {/*{ flag && <ClassComponent name={'Dima'}/> }*/}

        {flag && <FunctionalComponent name={'Dima'}/>}
        <button onClick={()=>setFlag(prev=>!prev)}>Hide/UnHide</button>
    </div>
  );
}

export {App};
