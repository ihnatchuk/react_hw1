import './App.css';
import {Character} from "./components/character/Character";
import {useEffect, useState} from "react";
import {characterService} from "./api/characterService";

function App() {

  const [characters,setCharacters]=useState([]);

  useEffect(()=>{
    characterService().then(value=>setCharacters([...value.results]))
  },[])

  return (
      <div className="App">
        {
          characters.map( person => <Character key={person.id} person={person} /> )
        }
      </div>
  );
}

export default App;
