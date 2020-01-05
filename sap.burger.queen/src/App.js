import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Atendimento from './pages/Atendimento';
import Cozinha from './pages/Cozinha';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="nav">
       <Nav/>
        <Switch>
          <Route path="/cozinha" component={Cozinha}/>
          <Route path="/atendimento" component={Atendimento}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
