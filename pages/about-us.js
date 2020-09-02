import React from 'react'
import AboutUs from '../src/pages/AboutUs'
// import { auth } from '../../src/commons/auth'

const AboutUsPage = (props) => (
  <AboutUs {...props}/>
)

AboutUsPage.getInitialProps = (ctx) => ({ query: ctx.query })


export default AboutUsPage
