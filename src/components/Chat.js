import React,{useState, useEffect, useRef} from 'react';
import socket from './Socket';
import '../App.css';

const Chat = ({nombre,setRegistrado}) => {
    const [mensaje,setMensaje] = useState("");
    const [mensajes,setMensajes] = useState([]);

    useEffect(()=>{
        socket.emit('conectado',nombre);
        console.log(nombre);
    },[nombre]);

    useEffect(()=>{
        socket.on("mensajes",mensaje => {
            setMensajes([...mensajes,mensaje]);
        });
        return () => {socket.off()};
    },[mensajes]);

    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({behavior: 'smooth'});
    });

    const submit = (e) => {
        e.preventDefault();
        socket.emit("mensaje",nombre,mensaje);
        setMensaje("");
    }

    return(
        <div>
            <div className="chat">
                {mensajes.map((e,i) => 
                    <div key={i}>
                        <div>{e.nombre}: {e.mensaje}</div>
                    </div>
                )}
                <div ref={divRef}></div>
            </div>
            <form onSubmit={submit}>
                <label>Mensaje:</label>
                <textarea cols="30" rows="10" value={mensaje} onChange={e => setMensaje(e.target.value)}></textarea>
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default Chat;