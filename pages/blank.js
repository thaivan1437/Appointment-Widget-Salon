import React from 'react'
import Blank from '../src/pages/blank'

const BlankPage = (props) => (
  <Blank {...props}/>
)

BlankPage.getInitialProps = (ctx) => ({ query: ctx.query })


export default BlankPage
