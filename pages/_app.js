import { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/styles.scss'
import theme from '../theme'

const Noop = ({ Component, pageProps, darkMode, setDarkMode }) => <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />

const MyApp = props => {
  const { Component, pageProps } = props
  const [darkMode, setDarkMode] = useState(false)
  const Layout = Component.Layout || Noop

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Drachma Token Manager</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.png" />
      </Head>
      <ThemeProvider theme={darkMode ? theme('dark') : theme('light')}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout Component={Component} pageProps={pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
