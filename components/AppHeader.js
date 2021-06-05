import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 999,
    background: '#fff',
    boxShadow: '0px 6px 5px 1px rgba(110, 25, 194, 0.24)'
  },
  navInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    '& a': {
      textDecoration: 'none'
    }
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    color: '#222'
  },
  menu: {
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '& li': {
        display: 'inline-block',
        marginLeft: theme.spacing(3),
        '& a': {
          color: '#222',
          textDecoration: 'none',
          transition: 'all .3s ease',
          '&:hover': {
            color: '#6e19c2'
          }
        }
      }
    }
  },
  activeLink: {
    color: '#6e19c2',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  }
}))

const AppHeader = props => {
  const { darkMode, setDarkMode } = props 
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.nav}>
      <Container maxWidth="lg">
        <div className={classes.navInner}>
          <Link href="/">
            <a>
              <div className={classes.logo}>
                <Image
                  src="/static/logo-black.png"
                  alt="Drachma Network"
                  width={30}
                  height={30}
                />
                <div className={classes.logoText}>
                  Drachma Network
                </div>
              </div>
            </a>
          </Link>
          <div className={classes.menu}>
            <ul>
              <li>
                {router.pathname === '/generator' ? (
                  <div className={classes.activeLink}>Token Generator</div>
                ) : (
                  <Link href="/generator">
                    <a>Token Generator</a> 
                  </Link>
                )}
              </li>
              <li>
                {router.pathname === '/sender' ? (
                  <div className={classes.activeLink}>Multi Sender</div>
                ) : (
                  <Link href="/sender">
                    <a>Multi Sender</a> 
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

AppHeader.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
}


export default AppHeader