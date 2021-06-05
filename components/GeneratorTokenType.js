import { useState } from 'react'
import { 
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { NETWORK_TYPE, ethereum, bsc, heco } from '../data'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1)
  },
  btnWrapper: {
    marginTop: theme.spacing(5)
  },
  nextBtn: {
    backgroundColor: '#3425af',
    color: '#fff',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#c56cd6'
    }
  }
}))

const GeneratorTokenType = props => {
  const { network, type, token, setNetwork, setType, setToken, setActiveStep } = props
  const classes = useStyles()
  const [typeDisabled, setTypeDisabled] = useState(true)
  const [tokenDisabled, setTokenDisabled] = useState(true)

  const handleNetwork = event => {
    setTypeDisabled(false)
    setNetwork(event.target.value)
    setType('')
    setToken('')
  }

  const handleType = event => {
    setTokenDisabled(false)
    setType(event.target.value)
    setToken('')
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel>Network</InputLabel>
            <Select
              value={network}
              onChange={handleNetwork}
            >
              <MenuItem value="ethereum">Ethereum</MenuItem>
              <MenuItem value="bsc">Binance Smart Chain</MenuItem>
              <MenuItem value="heco">Huobi Eco Chain</MenuItem>
            </Select>
            <FormHelperText>Select token generated network</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl} fullWidth disabled={typeDisabled}>
            <InputLabel>Network Type</InputLabel>
            <Select
              value={type}
              onChange={handleType}
            >
              {network !== '' && NETWORK_TYPE[network].map((item, index) => (
                <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Select network type</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth disabled={tokenDisabled}>
            <InputLabel>Token Type</InputLabel>
            <Select
              value={token}
              onChange={e => setToken(e.target.value)}
            >
              {network === 'ethereum' ? ethereum.map((item, index) => (
                <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
              )) : network === 'bsc' ? bsc.map((item, index) => (
                <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
              )) : heco.map((item, index) => (
                <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Select token type</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.btnWrapper}>
            <Button 
              variant="contained" 
              fullWidth 
              size="large" 
              className={classes.nextBtn} 
              onClick={() => setActiveStep(1)}
              disabled={(network !== '' && type !== '' && token !== '') ? false : true}
            >
              Next
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

GeneratorTokenType.propTypes = {
  network: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  setNetwork: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  setActiveStep: PropTypes.func.isRequired
}

export default GeneratorTokenType