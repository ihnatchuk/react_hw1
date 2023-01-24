import {useEffect, useState} from "react";

import './App.css';
import {Character} from "./components/character/Character";
import {characterService} from "./api/characterService";

function App() {

  const [characters,setCharacters]=useState([]);

  useEffect(()=>{
    characterService.getAll()
        .then(value=>value.data)
        .then(value=>setCharacters([...value.results]))
  },[])

  return (
      <div className="App">
        {
          characters.map( person => <Character person={person} /> )
        }
      </div>
  );
}

export default App;
