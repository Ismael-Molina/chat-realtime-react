import React from 'react';

const Resultado = (props) => {
    let resultado;

    if(props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion){
        resultado = <h1>Ganador: Jugador</h1>;
    }else if(props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion){
        resultado = <h1>Ganador: La Maquina</h1>;
    }else if(props.jugador.eleccion === props.maquina.eleccion && props.jugador.eleccion){
        resultado = <h1>Empate</h1>;
    }
    
    return(
        <h1>{resultado}</h1>
    )
}

export default Resultado;