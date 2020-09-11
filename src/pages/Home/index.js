import React, { Fragment, useEffect } from 'react';
// import logo from './logo.svg';
import * as Sentry from '@sentry/browser'

import Navbar from '../../includes/NavBar'
import Footer from '../../includes/Footer'
import Slider from '../../includes/Home/Slider';
import Text from '../../includes/Home/Text';

function Home() {
    useEffect(() => {
        try{
            Sentry.captureException(new Error('test sentry'))
        } catch (e) {

        }
    }, [])
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
