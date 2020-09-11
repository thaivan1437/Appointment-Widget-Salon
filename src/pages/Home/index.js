import React, { Fragment } from 'react';
// import logo from './logo.svg';

import Navbar from '../../includes/NavBar'
import Footer from '../../includes/Footer'
import Slider from '../../includes/Home/Slider';
import Text from '../../includes/Home/Text';

function Home() {
    return (
        <Fragment >
            <Navbar />
            <Slider />
            <Text />
            <Footer />
        </Fragment>
    );
}

export default Home;
