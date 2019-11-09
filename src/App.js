import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.min.css';


import Navbar from './includes/NavBar'
import Footer from './includes/Footer'
import Slider from './includes/Home/Slider';
import Text from './includes/Home/Text';

function App() {
  return (
    <Fragment >

      <Navbar />
      <Slider />
      <Text />
      <Footer />
      </Fragment>
        );
      }
      
  export default App;
