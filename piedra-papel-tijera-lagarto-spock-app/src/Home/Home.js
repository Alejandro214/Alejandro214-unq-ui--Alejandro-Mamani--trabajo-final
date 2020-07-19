import React, { useState, useEffect } from 'react';



const Home = (props) => {
    const [userName,setUsername] = useState(props.userName ? props.userName : '')
    const [error,setError]        = useState(false)


    const handleUserName = (e) => {
        setUsername(e.target.value)
    }

    const play = () => {
        console.log(userName.length)
        if(userName.length >1){
        props.history.push('/game',{nameUser: userName})
        }else{
            setError(true)
        }

    }
  

    return(
        <div id = 'titleGame'>
            <h1>Bienvenidos a Piedra, Papel, Tijera, Lagarto o Spock</h1>
            <h2>Por favor ingrese su nombre</h2>
            <div>  
            <input type="text" value={userName} name='userName' placeholder='Name' onChange={handleUserName} />      
              </div>
              <div className="boton-jugar" >
          <button type='button' onClick={play}>Play</button>
        </div>
        <div className = "error">
           {error &&
                     <label className = "mesajeError">Oh, debe ingresar un nombre :C</label>

           }
           </div>
        
        </div>
    )
}


export default Home