import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Sentry from '@sentry/browser';
import { createBrowserHistory } from 'history';

import Home from "./pages/Home";
import PermanentCosmetics from "./pages/PermanentCosmetics";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SalonPicture from "./pages/SalonPicture";
import {config} from '../src/helper/get_config';

if (config.env !== 'local') {
  Sentry.init({
    dsn: config.SENTRY_URL,
    environment: config.env
  })
}
const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(history.location.hash) || [])[1];
if (path) {
  history.replace(path);
}
class App extends React.Component {
  componentDidMount() {
    // const script = document.createElement("script");
    // script.src = `https://widgets.salonmanager.${CONFIGS.domainExtension}/loader.js`;
    // script.setAttribute("data-sm", `${CONFIGS.widgetAppId}`);
    // document.body.appendChild(script);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/permanent-cosmetics' component={PermanentCosmetics} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/photo-gallery' component={SalonPicture} />
        </Switch>
      </Router>
    );
  }
}

export default App;
