import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';

import Home from "./pages/Home"
import ParmentCosmetics from "./pages/ParmentCosmetics"

const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
if (path) {
  history.replace(path);
}

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/parment-cosmetics' component={ParmentCosmetics} />
    </Switch>
  </Router>
        );
      }
      
  export default App;
