import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container,
  Typography,
  Grid
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
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

const LandingGenerator = () => {
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <div className={classes.sectionTitle}>
              EVM Token Generator
            </div>
            <Typography
              variant="body2"
              className={classes.sectionText}
            >
              In modern times, the blockchain technology is being used in abundance just because of ethereum token development(include BSC, HECO). We want our business clients to benefit the maximum from the ethereum tokens.
            </Typography>
            <Typography
              variant="body2"
              className={classes.sectionText}
            >
              We produce tokens in the most favourable business environment. Startups and other business firms can seek professional help from our ERC20, BEP20, HRC20 token development experts. The experts are proficient and they can handle the creation of tokens very well.
            </Typography>
            <Typography
              variant="body2"
              className={classes.sectionText}
            >
              We help you easily mint tokens that can be used by Ethereum, BSC and HECO according to your purpose through automated programs.
            </Typography>
          </Grid>
          <Grid item xs={5} style={{ textAlign: 'center' }}>
            <Image
              src="/static/erc.png"
              alt="Ethereum Token"
              width={400}
              height={400}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default LandingGenerator