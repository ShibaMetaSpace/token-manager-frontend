import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container,
  Paper,
  Radio,
  FormControlLabel,
  RadioGroup,
  List,
  ListItem
} from '@material-ui/core'
import Slider from 'react-slick'
import clsx from 'clsx'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

import { ethereum, bsc, heco } from '../data'

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
  typeWrapper: {
    padding: theme.spacing(1)
  },
  typePaper: {
    padding: theme.spacing(2)
  },
  typeTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: theme.spacing(2)
  },
  priceText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    '& span': {
      fontSize: 14,
      fontWeight: 'normal'
    }
  },
  chainSelector: {
    marginBottom: theme.spacing(2)
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    fontSize: 14
  },
  badge: {
    fontSize: 12,
    padding: '4px 12px',
    backgroundColor: '#999',
    color: '#fff',
    fontWeight: 700,
    borderRadius: 12
  },
  green: {
    backgroundColor: '#4caf50'
  },
  yellow: {
    backgroundColor: '#ffc107',
    color: '#222'
  },
  blue: {
    backgroundColor: '#2196f3'
  },
  red: {
    backgroundColor: '#e91e63'
  },
  notice: {
    marginTop: theme.spacing(6),
    color: '#e91e63',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}))

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
}

const LandingTokenType = props => {
  const { chain, setChain } = props
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <Container maxWidth="lg">
        <div className={classes.sectionTitle} style={{ textAlign: 'center' }}>
          Generable Token Types
        </div>
        <div className={classes.chainSelector}>
          <RadioGroup
            value={chain}
            onChange={e => setChain(e.target.value)} 
            row 
          >
            <FormControlLabel
              value="ethereum"
              control={<Radio color="primary" />}
              label="Ethereum"
              labelPlacement="end"
            />
            <FormControlLabel
              value="bsc"
              control={<Radio color="primary" />}
              label="Binance Smart Chain"
              labelPlacement="end"
            />
            <FormControlLabel
              value="heco"
              control={<Radio color="primary" />}
              label="Huobi Eco Chain"
              labelPlacement="end"
            />
          </RadioGroup>
        </div>
        <div>
          <Slider {...settings}>
            {chain === 'ethereum' && ethereum.map((item, idx) => (
              <div className={classes.typeWrapper} key={idx}>
                <Paper className={classes.typePaper}>
                  <div className={classes.typeTitle}>{item.name}</div>
                  <div className={classes.priceText}>{item.price} <span>ETH</span></div>
                  <List>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        ERC20 Compliant
                      </div>
                      {item.compliant ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Verified Source Code
                      </div>
                      {item.verified ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Detailed
                      </div>
                      {item.detailed ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Customizable Decimals
                      </div>
                      {item.decimal ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Remove Copyright
                      </div>
                      {item.copyright ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Supply Type
                      </div>
                      <div className={clsx(classes.badge, item.supply === 'Fixed' ? classes.yellow : item.supply === 'Capped' ? classes.green : classes.blue )}>
                        {item.supply}
                      </div>
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Access Type
                      </div>
                      <div className={clsx(classes.badge, item.access === 'None' ? classes.yellow : item.access === 'Role Based' ? classes.green : classes.blue )}>
                        {item.access}
                      </div>
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Transfer Type
                      </div>
                      <div className={clsx(classes.badge, item.transfer === 'Pausable' ? classes.yellow : classes.green )}>
                        {item.transfer}
                      </div>
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Burnable
                      </div>
                      {item.burnable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Mintable
                      </div>
                      {item.mintable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Payable(ERC1363)
                      </div>
                      {item.payable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Token Recover
                      </div>
                      {item.recover ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                  </List>
                </Paper>
              </div>
            ))}
            {chain === 'bsc' && bsc.map((item, idx) => (
              <div className={classes.typeWrapper} key={idx}>
                <Paper className={classes.typePaper}>
                  <div className={classes.typeTitle}>{item.name}</div>
                  <div className={classes.priceText}>{item.price} <span>BNB</span></div>
                  <List>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        BEP20 Compliant
                      </div>
                      {item.compliant ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Verified Source Code
                      </div>
                      {item.verified ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Detailed
                      </div>
                      {item.detailed ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Customizable Decimals
                      </div>
                      {item.decimal ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Remove Copyright
                      </div>
                      {item.copyright ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Supply Type
                      </div>
                      <div className={clsx(classes.badge, item.supply === 'Fixed' ? classes.yellow : item.supply === 'Capped' ? classes.green : item.supply === '100k' ? classes.red : classes.blue )}>
                        {item.supply}
                      </div>
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Access Type
                      </div>
                      <div className={clsx(classes.badge, item.access === 'None' ? classes.yellow : item.access === 'Role Based' ? classes.green : classes.blue )}>
                        {item.access}
                      </div>
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Burnable
                      </div>
                      {item.burnable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Mintable
                      </div>
                      {item.mintable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Operable(ERC1363)
                      </div>
                      {item.payable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Token Recover
                      </div>
                      {item.recover ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                  </List>
                </Paper>
              </div>
            ))}
            {chain === 'heco' && heco.map((item, idx) => (
              <div className={classes.typeWrapper} key={idx}>
                <Paper className={classes.typePaper}>
                  <div className={classes.typeTitle}>{item.name}</div>
                  <div className={classes.priceText}>{item.price} <span>HT</span></div>
                  <List>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        HRC20 Compliant
                      </div>
                      {item.compliant ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Verified Source Code
                      </div>
                      {item.verified ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Detailed
                      </div>
                      {item.detailed ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Customizable Decimals
                      </div>
                      {item.decimal ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Remove Copyright
                      </div>
                      {item.copyright ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Supply Type
                      </div>
                      <div className={clsx(classes.badge, item.supply === 'Fixed' ? classes.yellow : item.supply === 'Capped' ? classes.green : item.supply === '100k' ? classes.red : classes.blue )}>
                        {item.supply}
                      </div>
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Access Type
                      </div>
                      <div className={clsx(classes.badge, item.access === 'None' ? classes.yellow : item.access === 'Role Based' ? classes.green : classes.blue )}>
                        {item.access}
                      </div>
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Burnable
                      </div>
                      {item.burnable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Mintable
                      </div>
                      {item.mintable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Operable(ERC1363)
                      </div>
                      {item.payable ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                    <ListItem className={classes.itemWrapper}>
                      <div classes={classes.itemText}>
                        Token Recover
                      </div>
                      {item.recover ? <AiFillCheckCircle size={18} color="#4caf50" /> : <AiFillCloseCircle size={18} color="#e91e63" />}
                    </ListItem>
                  </List>
                </Paper>
              </div>
            ))}
          </Slider>
          <div className={classes.notice}>
            <sup>*</sup>GAS fee will be added to final amount
          </div>
        </div>
      </Container>
    </div>
  )
}

LandingTokenType.propTypes = {
  chain: PropTypes.string.isRequired,
  setChain: PropTypes.func.isRequired
}

export default LandingTokenType