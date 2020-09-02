import React from 'react'
import HomePageComponent from '../src/pages/Home'
// import { auth } from '../../src/commons/auth'

const HomePage = (props) => (
  <HomePageComponent {...props}/>
)

HomePage.getInitialProps = (ctx) => ({ query: ctx.query })


export default HomePage
