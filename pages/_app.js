import React from 'react'
import App from 'next/app'
import Head from 'next/head'


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
