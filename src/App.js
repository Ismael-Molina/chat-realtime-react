import React,{ useState, useEffect } from 'react';
import './App.css';
/****************************************
        Components
****************************************/

function App() {
  const [contador,setContador] = useState(0);
  const [tareas,setTareas] = useState([]);

  const incrementar = () => {
    setContador(prevContador => prevContador+1);
  }

  const incrementarTareas = () => {
    setTareas(["nueva tarea", ...tareas]);
  }

  //component mount
  useEffect(() => {
    cargarPaises();
  },[])

  useEffect(() => {
    console.log("tarea añadida");
  },[tareas]);

  //llamada a api externa
  const cargarPaises = async () => {
    const data = await fetch("https://covid19.mathdro.id/api/countries");
    const paises = await data.json();
    console.log(paises);
  }

  return (
    <div className="App">
      {contador}
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={incrementarTareas}>Añadir tarea</button>
    </div>
  );
}

export default App;
