import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { SENTRY_URL } from '../src/env'

import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: SENTRY_URL
})

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <div>
      <Head>
        <title>Belmont Beauty Salon</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  }
}

export default MyApp
