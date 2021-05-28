import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    color: '#fff'
  },
  footerWrapper: {
    overflow: 'hidden'
  },
  footer: {
    backgroundColor: '#3c1c94',
    paddingTop: 90,
    paddingBottom: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '300px',
      height: '800px',
      bottom: 0,
      transform: 'rotate(-60deg)',
      transformOrigin: 'bottom right',
      background: 'linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,.05) 40%,rgba(255,255,255,.05) 100%)',
      left: '50%',
      marginLeft: '-125px'
    },
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '300px',
      height: '3600px',
      bottom: 0,
      transform: 'rotate(60deg)',
      transformOrigin: 'bottom right',
      background: 'linear-gradient(to top,rgba(255,255,255,0) 0,rgba(255,255,255,.05) 10%,rgba(255,255,255,.05) 100%)',
      right: '50%',
      marginRight: '-125px'
    }
  },
  footerInner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerLeft: {
    width: '30%'
  },
  introText: {
    marginTop: theme.spacing(2),
    color: '#af9cff',
    fontSize: '0.8rem'
  },
  menuText: {
    fontWeight: 'bold',
    color: '#fff'
  },
  menuItem: {
    padding: 0,
    listStyle: 'none',
    '& li': {
      color: '#af9cff',
      fontSize: '0.8rem',
      lineHeight: 2
    }
  },
  publish: {
    marginTop: theme.spacing(3),
    color: '#af9cff',
    fontSize: '0.8rem',
    '& span': {
      color: '#fff',
      fontWeight: 'bold'
    }
  }
}))

const LandingFooter = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footer}>
        <Container maxWidth="lg">
          <div className={classes.footerInner}>
            <div className={classes.footerLeft}>
              <div className={classes.logo}>
                <Image
                  src="/static/logo-white.png"
                  alt="Drachma Network"
                  width={30}
                  height={30}
                />
                <div className={classes.logoText}>
                  Drachma Network
                </div>
              </div>
              <div className={classes.introText}>
                Drachma Network is a blockchain development project by Funit Labs blockchain team. From blockchain-related tools to applications, we will introduce a variety of products in the future.
              </div>
            </div>
            <div>
              <div className={classes.menuText}>Menu</div>
              <div>
                <ul className={classes.menuItem}>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Disclaimer</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.publish}>
            Powered by <span>Funit Labs</span>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default LandingFooter