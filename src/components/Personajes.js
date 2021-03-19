import React,{useState,useEffect} from 'react';

const Personajes = (props) => {
    const [personajes,setPersonajes] = useState([]);

    useEffect(()=>{
        //declaración de funcion async para cargar estado
        const cargarDatos = async () => {
            const personajes = await cargarPersonajes();
            setPersonajes(personajes);
        }
        cargarDatos();
    },[]);

    const cargarPersonajes = async () => {
        try {
            const data = await fetch("https://breakingbadapi.com/api/characters");
            const personajes = await data.json();
            return personajes;
        } catch (error) {
            console.log(error);
        }
    }

    const seleccionar = (event) => {
        props.seleccionarPersonaje(event.target.value);
    }

    return(
        <select onChange={seleccionar}>
            {personajes.map((e)=><option key={e.char_id} value={e.char_id}>{e.name}</option>)}
        </select>
    );
}

export default Personajes;