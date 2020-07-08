import React, { useState, useEffect } from 'react';
import Tijera from "./tijera.jpg"
import Papel from "./papel.jpg"
import Piedra from "./piedra.jpg"
import Lagarto from "./lagarto.jpg"
import Spock from "./spock.jpg"



const Game = (props) => {
    const userName = props.location.state.nameUser


    const randomMaquina = (userEligio) => {
      
        const lista = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]
        const numberRandom = Number.parseInt(Math.random() * lista.length)
        const jugadaDeMaquina = lista[numberRandom]
        console.log(jugadaDeMaquina)
        if (userEligio == "Piedra" && jugadaDeMaquina == "Tijera") {
            props.history.push('/winner',{winner: "User"})
        } else {
            props.history.push('/winner',{winner: "Maquina"})

        }
    }

    




 
   

   
 



  

    return (
        <div>
             <div  id = "titleGame">
            <h2>Hola {userName}, por favor selecciona uno</h2>
            </div>
          <div id = "game">
                <figure>
                    <img src={Piedra} alt="Piedra" alt="Piedra"    onClick= {() =>randomMaquina("Piedra")}></img>
                    <img src={Papel} alt="Papel"   alt = "Papel"    onClick= {() =>randomMaquina("Papel")}></img>
                    <img src={Tijera} alt="Tijera" alt="Tijera"   onClick= {() =>randomMaquina("Tijera")}></img>
                    <img src={Lagarto} alt="Lagarto"alt="Lagarto" onClick= {() =>randomMaquina("Lagarto")}></img>
                    <img src={Spock} alt="Spock"  alt="Spock"     onClick= {() =>randomMaquina("Spock")}></img>
                </figure>
            </div>
        </div>
    )
}

export default Game