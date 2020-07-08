import React from 'react';
import youwinner from './youwinner.jpg'



const Winner =(props) => {
    const winner = props.location.state.winner

    const ganaUser = () => {
        return (
            <div>
                <h1>¡Has Ganado!</h1>
                <img id = "game"src = {youwinner} ></img>
            </div>
        )
    }

    const ganaLaMaquina = () => {
        return (
            <div>
                <h1>¡Has Perdido!</h1>
            </div>
        )
    }

    const ganador = () => {
        console.log(props)
        if (winner =="Maquina") {
            return (ganaLaMaquina())
        }else{
            return(ganaUser())
        }
    }


    return (
        <div>
            <div id = "titleGame">
            {ganador()}
            </div>
        </div>
    )

}

export default Winner;