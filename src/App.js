import React,{ useState } from 'react';
import './App.css';
/****************************************
        Components
****************************************/
import Personajes from './components/Personajes';
import FichaPersonaje from './components/FichaPersonaje';

function App() {
  const [personajeId,setPersonajeId] = useState("");

  const seleccionarPersonaje = (id) => {
    setPersonajeId(id);
    console.log(personajeId);
  }

  return (
    <div className="App">
      <h1>Breakong Bad API</h1>
      <Personajes seleccionarPersonaje={seleccionarPersonaje}/>
      <FichaPersonaje id={personajeId}/>
    </div>
  );
}

export default App;
