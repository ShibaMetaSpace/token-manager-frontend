import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container,
  Typography,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#fff'
  },
  sectionTitle: {
    color: '#5b53a2',
    fontSize: '2em',
    marginBottom: theme.spacing(3)
  },
  sectionText: {
    color: '#353c65',
    marginBottom: theme.spacing(2)
  }
}))

const LandingMultisender = () => {
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <div className={classes.sectionTitle}>
              Token Multi Sender
            </div>
            <Typography
              variant="body2"
              className={classes.sectionText}
            >
              Token Multi Sender is a tool allows you to batch send ERC20, BEP20 and HRC20 tokens.
            </Typography>
            <Typography
              variant="body2"
              className={classes.sectionText}
            >
              Previously in Ethereum or similar network(BSC, HECO, etc...), additional tools were required in order to transfer many ERC20 tokens at once. Many people still do this manually, one transaction at a time. This process is time consuming and prone to an error.
            </Typography>
            <Typography
              variant="body2"
              className={classes.sectionText}
            >
              This Solution allows a user to send thousands of token transfers in a very effecient way by batching them in groups of 145 token transfers per transaction. This automation saves time by automatically generating transactions to MetaMask. Finally, this tool allows a user to maintain security of their account by delegating the trust of their private keys to a secure MetaMask wallet.
            </Typography>
          </Grid>
          <Grid item xs={5} style={{ textAlign: 'center' }}>
            <Image
              src="/static/sender.webp"
              alt="Send Token"
              width={400}
              height={400}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default LandingMultisender