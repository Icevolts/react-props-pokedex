import React from "react";
import './Pokecard.css'

const poke_api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard(props){
    let imgSrc = `${poke_api}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{props.name}</div>
            <img className="Pokecard-img" src={imgSrc} alt=""/>
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">EXP: {props.exp}</div>
        </div>
    )
}

export default Pokecard;