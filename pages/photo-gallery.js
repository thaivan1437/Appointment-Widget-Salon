import React from 'react'
import SalonPicture from '../src/pages/SalonPicture'
// import { auth } from '../../src/commons/auth'

const SalonPicturePage = (props) => (
  <SalonPicture {...props}/>
)

SalonPicturePage.getInitialProps = (ctx) => ({ query: ctx.query })


export default SalonPicturePage
