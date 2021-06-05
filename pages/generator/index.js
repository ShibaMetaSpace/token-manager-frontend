import { useState } from 'react'
import Head from 'next/head'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, StepConnector, Container } from '@material-ui/core'
import { BiNetworkChart, BiDetail, BiLayer, BiCheckShield, BiCheck } from 'react-icons/bi'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import AppLayout from '../../layout/AppLayout'
import GeneratorTokenType from '../../components/GeneratorTokenType'

const Connector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(95deg, #c56cd6 0%, #3425af 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(95deg, #c56cd6 0%, #3425af 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  }
})(StepConnector)

const useStepIconStyle = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient(136deg, #c56cd6 0%, #3425af 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      'linear-gradient(136deg, #c56cd6 0%, #3425af 100%)'
  }
})

const StepIcon = props => {
  const classes = useStepIconStyle()
  const { active, completed, icon } = props

  const icons = {
    1: <BiNetworkChart size={20} />,
    2: <BiDetail size={20} />,
    3: <BiLayer size={20} />,
    4: <BiCheckShield size={20} />,
    5: <BiCheck size={20} />
  }

  return (
    <div className={clsx(classes.root, {
      [classes.active]: active,
      [classes.completed]: completed
    })}>
      {icons[String(icon)]}
    </div>
  )
}

StepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
}

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    marginTop: theme.spacing(4)
  }
}))

const getSteps = () => ['Token Type and Network', 'Token Details', 'Token Features', 'Agreement', 'Confirm']

const Generator = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [network, setNetwork] = useState('')
  const [type, setType] = useState('')
  const [token, setToken] = useState('')
  const steps = getSteps()

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <GeneratorTokenType network={network} type={type} token={token} setNetwork={setNetwork} setType={setType} setToken={setToken} setActiveStep={setActiveStep} />
      case 1:
        return <div>B</div>
      case 2:
        return <div>B</div>
      case 3:
        return <div>B</div>
      case 4:
        return <div>B</div>
      default:
        return <div>Unknown step</div>
    }
  }

  return (
    <div>
      <Head>
        <title>Drachma Token Generator</title>
      </Head>
      <div>
        <Stepper alternativeLabel activeStep={activeStep} connector={<Connector />}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={classes.inputWrapper}>
          <Container  maxWidth="sm">
            {getStepContent(activeStep)}
          </Container>
        </div>
      </div>
    </div>
  )
}

Generator.Layout = AppLayout

export default Generator