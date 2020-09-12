import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { SENTRY_URL } from '../src/env'

import * as Sentry from '@sentry/browser'

// import developmentExtension from '../src/environments/development'
// import productionExtension from '../src/environments/production'

// const CONFIGS = process.env.PUBLIC_NEXT_ENV === 'development' ? developmentExtension : productionExtension

Sentry.init({
  dsn: SENTRY_URL
})

if (module.hot) {
  module.hot.addStatusHandler(status => {
    if (typeof window !== "undefined" && status === "ready") {
      window.__webpack_reload_css__ = true;
    }
  });
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <div>
      <Head>
        <title>Belmont Beauty Salon</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta property="og:image" content={'/invite/bannerShare.png'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://belmontbeautysalon.com/`} />
        <meta property="og:title" content={`Belmont Beauty Salon`} />
        <meta property="og:description" content='Belmont Beauty Salon' />
        <meta name="keywords" content="Salon,Beauty" />
        <meta name="author" content="Salon Manager" />
        {/* <script src={`https://widgets.salonmanager.${CONFIGS.domainExtension}/loader.js`} data-sm={CONFIGS.widgetAppId}></script> */}
      </Head>
      <Component {...pageProps} />
    </div>
  }
}

export default MyApp
