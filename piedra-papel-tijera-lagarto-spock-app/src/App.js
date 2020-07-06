import React from 'react';
import Home from './Home/Home'
import './Home/Home.css'
import './App.css'
import Game from './Game/Game'
import './Game/Game.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  return (

    <Router>
      <Switch>
        <Route path ="/game" component = {Game}/>
        <Route path="/" component={Home} />
      </Switch>
    </Router>

  );
}

export default App;