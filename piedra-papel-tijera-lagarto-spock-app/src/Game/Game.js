import React, { useState, useEffect } from 'react';

const Game = (props) => {
    const userName = props.location.state.nameUser
    


    return(
        
        <div id = "TitleGame">
            {console.log(userName)}
            <h2>Selec {userName}</h2>
        {console.log(props)}
        </div>
    )
}

export default Game