import React, { useState, useEffect } from 'react';



const Home = (props) => {
    const [userName,setUsername] = useState(props.userName ? props.userName : '')


    const handleUserName = (e) => {
        setUsername(e.target.value)
    }

    const play = () => {
        console.log(userName)
        props.history.push('/game',{nameUser: userName})

    }
  

    return(
        <div id = 'titleGame'>
            <h1>Bienvenidos a Piedra, Papel, Tijera, Lagarto o Spock</h1>
            <div>  
            <input type="text" value={userName} name='userName' placeholder='Name' onChange={handleUserName} />      
              </div>
              <div className="boton-jugar" >
          <button type='button' onClick={play}>Play</button>
        </div>
        
        </div>
    )
}


export default Home