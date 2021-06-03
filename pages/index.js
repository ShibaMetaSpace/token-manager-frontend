import { useState, useEffect } from 'react'

import LandingHeader from '../components/LandingHeader'
import LandingGenerator from '../components/LandingGenerator'
import LandingTokenType from '../components/LandingTokenType'
import LandingFeatures from '../components/LandingFeatures'
import LandingMultisender from '../components/LandingMultisender'
import LandingFooter from '../components/LandingFooter'

const Home = () => {
  const [chain, setChain] = useState('ethereum')
  const [viewHeight, setViewHeight] = useState(null)
  const [scroll, setScroll] = useState(0) 

  const handleScroll = () => {
    setScroll(window.pageYOffset)
  }

  useEffect(() => {
    setViewHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  
  return (
    <div>
      <LandingHeader scroll={scroll} />
      <LandingGenerator viewHeight={viewHeight} scroll={scroll} />
      <LandingTokenType chain={chain} setChain={setChain} />
      <LandingFeatures chain={chain} viewHeight={viewHeight} scroll={scroll} />
      <LandingMultisender viewHeight={viewHeight} scroll={scroll} />
      <LandingFooter />
    </div>
  )
}

export default Home