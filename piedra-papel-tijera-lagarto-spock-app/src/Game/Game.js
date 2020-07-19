import React, { useState, useEffect } from 'react';
import Tijera from "./tijera.jpg"
import Papel from "./papel.jpg"
import Piedra from "./piedra.jpg"
import Lagarto from "./lagarto.jpg"
import Spock from "./spock.jpg"



const Game = (props) => {
    const userName = props.location.state.nameUser
    const [contadorMaquina, setContadorMaquina] = useState(0)
    const [contadorUser, setContadorUser] = useState(0)
    const [partidas,setPartida]            = useState(0)
    var winnerUser = 0
    let winnerMaquina = 0
    var partida = 0


    const randomMaquina = (userEligio) => {
        partida = partida + 1
        setPartida(partida + partidas)
        const lista = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]
        const numberRandom = Number.parseInt(Math.random() * lista.length)
        const jugadaDeMaquina = lista[numberRandom]
        if ((userEligio == "Piedra" && jugadaDeMaquina == "Tijera") || (userEligio == "Piedra" && jugadaDeMaquina == "Lagarto")) {
            // props.history.push('/winner',{winner: "User"})
            actualizarMarcadorUser()
            setContadorUser(winnerUser + contadorUser)
        } else {
            if ((userEligio == "Tijera" && jugadaDeMaquina == "Papel") || (userEligio == "Tijera" && jugadaDeMaquina == "Lagarto")) {
                //  props.history.push('/winner',{winner: "User"})
                actualizarMarcadorUser()
                setContadorUser(winnerUser + contadorUser)
            } else {
                if ((userEligio == "Papel" && jugadaDeMaquina == "Piedra") || (userEligio == "Papel" && jugadaDeMaquina == "Spock")) {
                    //   props.history.push('/winner',{winner: "User"})
                    actualizarMarcadorUser()
                    setContadorUser(winnerUser + contadorUser)
                } else {
                    if ((userEligio == "Lagarto" && jugadaDeMaquina == "Spock") || (userEligio == "Lagarto" && jugadaDeMaquina == "Papel")) {
                        //  props.history.push('/winner',{winner: "User"})
                        actualizarMarcadorUser()
                        setContadorUser(winnerUser + contadorUser)
                    } else {
                        if ((userEligio == "Spock" && jugadaDeMaquina == "Piedra") || (userEligio == "Spock" && jugadaDeMaquina == "Tijera")) {
                            //   props.history.push('/winner',{winner: "User"})
                            actualizarMarcadorUser()
                            setContadorUser(winnerUser + contadorUser)
                        } else {
                            console.log(winnerMaquina)
                            //  props.history.push('/winner',{winner: "Maquina"})
                            actualizarMarcadorMaquina()
                            setContadorMaquina(winnerMaquina + contadorMaquina)
                        }
                    }
                }

            }


        }
    }
    const actualizarMarcadorUser = () => {
        winnerUser = winnerUser + 1
    }

    const actualizarMarcadorMaquina = () => {
        winnerMaquina += 1
    }
    const limpiarHistorial=()=>{
        setPartida(0)
        setContadorUser(0)
        setContadorMaquina(0)
    }







    return (
        <div>
            <div id="titleGame">
                <h2>Hola {userName}, por favor selecciona uno</h2>
            </div>
            <div id="game">
                <figure>
                    <img src={Piedra} alt="Piedra" alt="Piedra" onClick={() => randomMaquina("Piedra")}></img>
                    <img src={Papel} alt="Papel" alt="Papel" onClick={() => randomMaquina("Papel")}></img>
                    <img src={Tijera} alt="Tijera" alt="Tijera" onClick={() => randomMaquina("Tijera")}></img>
                    <img src={Lagarto} alt="Lagarto" alt="Lagarto" onClick={() => randomMaquina("Lagarto")}></img>
                    <img src={Spock} alt="Spock" alt="Spock" onClick={() => randomMaquina("Spock")}></img>
                </figure>

            </div>
            <div className="historial">
                <p id="resultadoPartida">Partida {partidas}, Ganaste {contadorUser} vs Maquina {contadorMaquina}</p>
                <div className = "botonLimpiar">
                <button onClick = {() =>limpiarHistorial ()}>Limpiar Historial</button>
                </div>
            </div>
        </div>
    )
}

export default Game