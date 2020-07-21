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
    const [partidas, setPartida] = useState(0)
    const [empates, setEmpates] = useState(0)
    const [elecccionDEMaquina, setelecccionDEMaquina] = useState('')
    let winnerUser = 0
    let winnerMaquina = 0
    let partida = 0
    let emps = 0

    const randomElection = () => {
        const lista = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]
        const numberRandom = Number.parseInt(Math.random() * lista.length)
        return lista[numberRandom]
    }






    const randomMaquina = (userEligio) => {
        partida = partida + 1
        setPartida(partida + partidas)
        const jugadaDeMaquina = randomElection()
        if ((userEligio == "Piedra" && jugadaDeMaquina == "Tijera") || (userEligio == "Piedra" && jugadaDeMaquina == "Lagarto")) {
            ganaste(jugadaDeMaquina)
        } else {
            if ((userEligio == "Tijera" && jugadaDeMaquina == "Papel") || (userEligio == "Tijera" && jugadaDeMaquina == "Lagarto")) {
                ganaste(jugadaDeMaquina)
            } else {
                if ((userEligio == "Papel" && jugadaDeMaquina == "Piedra") || (userEligio == "Papel" && jugadaDeMaquina == "Spock")) {
                    ganaste(jugadaDeMaquina)
                } else {
                    if ((userEligio == "Lagarto" && jugadaDeMaquina == "Spock") || (userEligio == "Lagarto" && jugadaDeMaquina == "Papel")) {
                        ganaste(jugadaDeMaquina)
                    } else {
                        if ((userEligio == "Spock" && jugadaDeMaquina == "Piedra") || (userEligio == "Spock" && jugadaDeMaquina == "Tijera")) {
                            ganaste(jugadaDeMaquina)
                        } else {
                            if (jugadaDeMaquina == userEligio) {
                               empate(jugadaDeMaquina)
                            }
                            else {
                                pierdes(jugadaDeMaquina)
                            }
                        }
                    }
                }

            }


        }
    }
    const actualizarEmpates = () => {
        emps = emps + 1
    }
    const actualizarMarcadorUser = () => {
        winnerUser = winnerUser + 1
    }

    const actualizarMarcadorMaquina = () => {
        winnerMaquina += 1
    }
    const limpiarHistorial = () => {
        setPartida(0)
        setContadorUser(0)
        setContadorMaquina(0)
        setEmpates(0)
        setelecccionDEMaquina("")
    }


    const ganaste = (elecMaquina) => {
        actualizarMarcadorUser()
        setContadorUser(winnerUser + contadorUser)
        setelecccionDEMaquina("Ganaste!, la Computadora eligio " + elecMaquina)
    }

    const pierdes = (elecMaquina) => {
        actualizarMarcadorMaquina()
        setContadorMaquina(winnerMaquina + contadorMaquina)
        setelecccionDEMaquina("Perdiste :C , la Computadora eligio " + elecMaquina) 
    }

    const empate = (elecMaquina) => {
        actualizarEmpates()
        setEmpates(emps + empates)
        setelecccionDEMaquina ("Empate :o, la Computadora eligio " + elecMaquina)
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
                <p id="resultadoPartida">Partida {partidas}, Ganaste {contadorUser} vs Maquina {contadorMaquina}, Empates {empates}</p>
                <div className="botonLimpiar">
                    <p id="titleGame">{elecccionDEMaquina}</p>

                    <button onClick={() => limpiarHistorial()}>Limpiar Historial</button>
                </div>
            </div>
        </div>
    )
}

export default Game