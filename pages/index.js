import { useState } from 'react'

import LandingHeader from '../components/LandingHeader'
import LandingGenerator from '../components/LandingGenerator'
import LandingTokenType from '../components/LandingTokenType'
import LandingFeatures from '../components/LandingFeatures'
import LandingMultisender from '../components/LandingMultisender'
import LandingFooter from '../components/LandingFooter'

const Home = () => {
  const [chain, setChain] = useState('ethereum')
  
  return (
    <div>
      <LandingHeader />
      <LandingGenerator />
      <LandingTokenType chain={chain} setChain={setChain} />
      <LandingFeatures chain={chain} />
      <LandingMultisender />
      <LandingFooter />
    </div>
  )
}

export default Home