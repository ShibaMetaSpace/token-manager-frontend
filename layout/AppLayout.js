import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import PropTypes from 'prop-types'

import AppHeader from '../components/AppHeader'

const useStyles = makeStyles({
  appWrapper: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  appContent: {
    marginTop: 100
  }
})

const AppLayout = props => {
  const { Component, pageProps, darkMode, setDarkMode } = props
  const classes = useStyles()

  return (
    <div className={classes.appWrapper}>
      <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={classes.appContent}>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
}

export default AppLayout