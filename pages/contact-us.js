import React from 'react'
import Contact from '../src/pages/Contact'
// import { auth } from '../../src/commons/auth'

const ContactPage = (props) => (
  <Contact {...props}/>
)

ContactPage.getInitialProps = (ctx) => ({ query: ctx.query })


export default ContactPage
