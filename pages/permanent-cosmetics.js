import React from 'react'
import PermanentCosmetics from '../src/pages/PermanentCosmetics'
// import { auth } from '../../src/commons/auth'

const PermanentCosmeticsPage = (props) => (
  <PermanentCosmetics {...props}/>
)

PermanentCosmeticsPage.getInitialProps = (ctx) => ({ query: ctx.query })


export default PermanentCosmeticsPage
