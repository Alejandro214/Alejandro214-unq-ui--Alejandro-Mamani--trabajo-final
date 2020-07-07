import React, { useState, useEffect } from 'react';
import Tijera from "./tijera.jpg"
import Papel from "./papel.jpg"
import Piedra from "./piedra.jpg"
import Lagarto from "./lagarto.jpg"
import Spock from "./spock.jpg"

const papel =() => {
    return(
        <div>
            <figure>
            <img src = {Papel}  alt = "Papel"></img>
            </figure>
        </div>
    )
}

const tijera = () => {
    return(
        <div>
            <figure>
            <img src = {Tijera} alt = "Tijera" ></img>
            </figure>
            
        </div>
    )
}

const piedra = () => {
    return(
    <div>
        <figure>
    <img src = {Piedra} alt = "Piedra"></img>
    </figure>
   </div>
    )
}



const lagarto = () => {
    return(
        <div>
        <figure>
    <img src = {Lagarto} alt = "Lagarto"></img>
    </figure>
   </div>
    )
} 

const spock = () => {
    return(
        <div>
        <figure>
    <img src = {Spock} alt = "Spock"></img>
    </figure>
   </div>
    )
}


const Game = (props) => {
    const userName = props.location.state.nameUser



    
const randomMaquina = () => {
    const lista = ["piedra","papel","tijera","lagarto","spock"]
    const numberRandom = Number.parseInt(Math.random() * lista.length) 
    if (true){
        return(
            <div>
                       <h1>  WINNER!!</h1>
            </div>
        )
    }else{
        return(
            <div>
         <p>LOSEER :C</p>
            </div>
        )
    }
}   


    return(  
        <div>
            <div  id = "TitleGame">
            <h2>Hola {userName}, por favor selecciona uno</h2>
            </div>
            <div id = "game">
                {randomMaquina}
                {papel()}
                {piedra()}
                {tijera()}
                {lagarto()}
                {spock()}

            </div>
        </div>
    )
}

export default Game