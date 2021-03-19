import React,{ useState } from 'react';
import './App.css';
/****************************************
        Components
****************************************/

function App() {
  const [persona,setPersona] = useState({
    nombre:"",
    app:"",
    apm:""
  });

  const manejaraFormulario = (event) =>{
    const {name,value} = event.target;
    setPersona(prevPersona => ({
      ...prevPersona,
      [name]:value
    }))
  }

  const submit = (event)=>{
    event.preventDefault();
    console.log(persona);
  }


  return (
    <div className="App">
      <form onSubmit={submit}>
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" value={persona.nombre} onChange={manejaraFormulario}/>
        </div>
        <div>
            <label for="app">primer apellido:</label>
            <input type="text" name="app" value={persona.app} onChange={manejaraFormulario}/>
        </div>
        <div>
            <label for="apm">segundo apellido:</label>
            <input type="text" name="apm" value={persona.apm} onChange={manejaraFormulario}/>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
