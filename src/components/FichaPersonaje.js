import React,{useState,useEffect} from 'react';
import styles from './FichaPersonaje.module.css';

const FichaPersonaje = (props) => {
    const [personaje,setPersonaje] =useState({});

    useEffect(()=>{
        const seleccionPersonaje = async () => {
            const personajeSleccionado = await cargarPersonaje(props.id);
            setPersonaje(personajeSleccionado[0]);
        }
        seleccionPersonaje();
    },[props.id]);

    const cargarPersonaje = async (id) => {
        try {
            const data = await fetch(`https://breakingbadapi.com/api/characters/${id}`);
            const personaje = await data.json();
            return personaje;
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className={styles.personajeContenedor}>
            <h2>{personaje.name}</h2>
            <div>{personaje.category}</div>
            <img src={personaje.img} alt=""/>
            <div>Interpretadao por <span>{personaje.portrayed}</span></div>
        </div>
    );
}

export default FichaPersonaje;