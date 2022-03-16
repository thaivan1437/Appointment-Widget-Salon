import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as Sentry from '@sentry/react';
import {config} from '../src/helper/get_config';

process.on('unhandledRejection', err => {
  Sentry.captureException(err)
})

process.on('uncaughtException', err => {
  Sentry.captureException(err)
})

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link
          rel="stylesheet"
          href="/lib/css/bootstrap.min.css"
        />

        <link
          rel="stylesheet"
          href="/lib/css/image-gallery.css"
        />
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href='/styles.css' />
          <link
            rel="stylesheet"
            href="/lib/css/horizontal.css"
          />
          { config.env === 'production'
            && <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135985682-1" />
              <script dangerouslySetInnerHTML={{ __html: `
                window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)} gtag(\'js\',new Date()); gtag(\'config\',\'UA-135985682-1\');
              ` }}
              />
            </>
          }

        </Head>
        <body id="no-scroll">
          <Main />
          <NextScript />
          <script src={`https://widget-git-feature-update-widget-appointment-thaivan1437.vercel.app/1.0.0/loader.js`} data-sm={config.locationID} defer></script>
          {/* <script src={`https://widget-git-feature-update-widget-appointment-thaivan1437.vercel.app/1.0.0/vendors~widgets.js`} data-sm={config.locationID} defer></script> */}
          <script dangerouslySetInnerHTML ={{ __html:`
            var myIframe = document.querySelector('.myIframe');
            console.log('myIframe', myIframe)
            // myIframe.contentWindow.postMessage('hello', '*');
            window.addEventListener('message', function(event) {
              if (event.data && event.data.data && event.data.data.showModal) {
                document.getElementById("no-scroll").style.cssText = "overflow: hidden !important";
              } else {
                document.getElementById("no-scroll").style.cssText = "";
              }
            });`}} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
