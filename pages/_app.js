import * as React from 'react'
import NextApp from 'next/app'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import '../styles/globals.css'
import Head from 'next/head'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="favicon" href="/favicon.png" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <script defer data-domain="scrapyard.hackclub.com" src="https://plausible.io/js/script.outbound-links.js"></script>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
