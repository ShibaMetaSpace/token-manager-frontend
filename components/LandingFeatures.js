import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container,
  Grid,
  Paper
} from '@material-ui/core'
import {
  BiDetail,
  BiLayerMinus,
  BiLayerPlus,
  BiPauseCircle,
  BiUserCircle,
  BiGroup,
  BiVerticalCenter,
  BiHive,
  BiReset,
  BiCopyright
} from 'react-icons/bi'

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  sectionTitle: {
    color: '#5b53a2',
    fontSize: '2em',
    marginBottom: theme.spacing(3)
  },
  featureTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  featureItem: {
    padding: theme.spacing(2)
  },
  featureIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#3492ca',
    color: '#fff',
    marginRight: theme.spacing(1)
  },
  featureTitleText: {
    color: '#5b53a2',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  featureText: {
    color: '#888',
    fontSize: '1em'
  }
}))

const LandingFeatures = props => {
  const { chain } = props
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <Container maxWidth="lg">
        <div className={classes.sectionTitle} style={{ textAlign: 'center' }}>
          Features
        </div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper className={classes.featureItem}>
              <div className={classes.featureTitle}>
                <div className={classes.featureIcon}>
                  <BiDetail size={25} />
                </div>
                <div className={classes.featureTitleText}>Detailed</div>
              </div>
              <div className={classes.featureText}>Your Token will be fully compliant with the {chain === 'ethereum' ? 'ERC20' : chain === 'bsc' ? 'BEP20' : 'HRC20'} definition and compatible with any {chain === 'ethereum' ? 'ERC20' : chain === 'bsc' ? 'BEP20' : 'HRC20'} wallet all around the world. It will have a name, a symbol and a decimals amount.</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.featureItem}>
              <div className={classes.featureTitle}>
                <div className={classes.featureIcon}>
                  <BiLayerMinus size={25} />
                </div>
                <div className={classes.featureTitleText}>Burnable</div>
              </div>
              <div className={classes.featureText}>Your Token can be burnt. It means that you can choose to reduce the circulating supply by destroying some of your tokens.</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.featureItem}>
              <div className={classes.featureTitle}>
                <div className={classes.featureIcon}>
                  <BiLayerPlus size={25} />
                </div>
                <div className={classes.featureTitleText}>Mintable</div>
              </div>
              <div className={classes.featureText}>You will be able to generate tokens by minting them. Only token owner will be able to mint. You can also disable minting if you don’t want to generate tokens anymore.</div>
            </Paper>
          </Grid>
          {chain === 'ethereum' && (
            <Grid item xs={4}>
              <Paper className={classes.featureItem}>
                <div className={classes.featureTitle}>
                  <div className={classes.featureIcon}>
                    <BiPauseCircle size={25} />
                  </div>
                  <div className={classes.featureTitleText}>Pausable</div>
                </div>
                <div className={classes.featureText}>Your Token transfer can be paused. Useful to prevent trades until a period or freezing all token transfers.</div>
              </Paper>
            </Grid>
          )}
          <Grid item xs={4}>
            <Paper className={classes.featureItem}>
              <div className={classes.featureTitle}>
                <div className={classes.featureIcon}>
                  <BiUserCircle size={25} />
                </div>
                <div className={classes.featureTitleText}>Ownable Access</div>
              </div>
              <div className={classes.featureText}>Your Token will have an Owner. Token owner will be able to mint new tokens or to call the finish minting function.</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.featureItem}>
              <div className={classes.featureTitle}>
                <div className={classes.featureIcon}>
                  <BiGroup size={25} />
                </div>
                <div className={classes.featureTitleText}>Role Based Access</div>
              </div>
              <div className={classes.featureText}>Your Token will have Roles. You can add or remove ADMIN or MINTER role to addresses. Your token will be Ownable too.</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.featureItem}>
              <div className={classes.featureTitle}>
                <div className={classes.featureIcon}>
                  <BiVerticalCenter size={25} />
                </div>
                <div className={classes.featureTitleText}>Capped</div>
              </div>
              <div className={classes.featureText}>You won't be able to generate more tokens than the defined token cap. This ensure people that you will not generate more tokens than declared.</div>
            </Paper>
          </Grid>
          {chain === 'ethereum' ? (
            <Grid item xs={4}>
              <Paper className={classes.featureItem}>
                <div className={classes.featureTitle}>
                  <div className={classes.featureIcon}>
                    <BiHive size={25} />
                  </div>
                  <div className={classes.featureTitleText}>ERC1363 Payable Token</div>
                </div>
                <div className={classes.featureText}>The ERC1363 is an ERC20 compatible Token that can make a callback on the receiver contract to notify token transfers or token approvals.</div>
              </Paper>
            </Grid>
          ) : (
            <Grid item xs={4}>
              <Paper className={classes.featureItem}>
                <div className={classes.featureTitle}>
                  <div className={classes.featureIcon}>
                    <BiHive size={25} />
                  </div>
                  <div className={classes.featureTitleText}>Operable Token (ERC1363)</div>
                </div>
                <div className={classes.featureText}>The Operable Token is a {chain === 'bsc' ? 'BEP20' : 'HRC20'} compatible Token that can make a callback on the receiver contract to notify token transfers or token approvals.</div>
              </Paper>
            </Grid>
          )}
          <Grid item xs={4}>
            <Paper className={classes.featureItem}>
              <div className={classes.featureTitle}>
                <div className={classes.featureIcon}>
                  <BiReset size={25} />
                </div>
                <div className={classes.featureTitleText}>Token Recover</div>
              </div>
              <div className={classes.featureText}>There are lots of tokens lost forever into Smart Contracts. It allows the contract owner to recover any {chain === 'ethereum' ? 'ERC20' : chain === 'bsc' ? 'BEP20' : 'HRC20'} token sent into the contract for error.</div>
            </Paper>
          </Grid>
          {chain === 'ethereum' ? (
            <Grid item xs={12}>
              <Paper className={classes.featureItem}>
                <div className={classes.featureTitle}>
                  <div className={classes.featureIcon}>
                    <BiCopyright size={25} />
                  </div>
                  <div className={classes.featureTitleText}>Copyright</div>
                </div>
                <div className={classes.featureText}>Deploying SimpleERC20 for FREE, a link pointing to this page will be added to your contract. Your Token will be fully compliant with the ERC20 Standard and you can use it without issues. It is only a little credit to advertise ERC20 Token Generator. You can remove it by choosing an advanced Token type.</div>
              </Paper>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Paper className={classes.featureItem}>
                <div className={classes.featureTitle}>
                  <div className={classes.featureIcon}>
                    <BiCopyright size={25} />
                  </div>
                  <div className={classes.featureTitleText}>Copyright</div>
                </div>
                <div className={classes.featureText}>Deploying Hello{chain === 'bsc' ? 'BEP20' : 'HRC20'} for FREE or Simple{chain === 'bsc' ? 'BEP20' : 'HRC20'}, a link pointing to this page will be added to your contract. Your Token will be fully compliant with the {chain === 'bsc' ? 'BEP20' : 'HRC20'} Standard and you can use it without issues. It is only a little credit to advertise {chain === 'bsc' ? 'BEP20' : 'HRC20'} Token Generator. You can remove it by choosing an advanced Token type.</div>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}

LandingFeatures.propTypes = {
  chain: PropTypes.string.isRequired
}

export default LandingFeatures