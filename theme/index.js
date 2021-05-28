import { createMuiTheme } from '@material-ui/core/styles'
import common from './common'
import dark from './dark'
import light from './light'

const theme = name => {
  const colorTheme = name === 'dark' ? dark : light
  
  return createMuiTheme({
    ...common,
    ...colorTheme
  })
}

export default theme