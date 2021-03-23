import React,{useState} from 'react';
import './App.css';
import socket from './components/Socket';
import Chat from './components/Chat';

function App() {
  const [nombre,setNombre] = useState("");
  const [registrado,setRegistrado] = useState(false);

  const registrar = (e) => {
    e.preventDefault();
    if(nombre!==""){
      setRegistrado(true);
    }
  }

  return (
    <div className="App">
      {
        !registrado &&
        <form onSubmit={registrar}>
          <label>Introdusca su nombre</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)}/>
          <button>Ir al chat</button>
        </form>
      }
      {
        registrado &&
        <Chat nombre={nombre} registrado={setRegistrado}/>
      }
    </div>
  );
}

export default App;
