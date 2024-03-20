import MainHeader from '../components/MainHeader'
import HeroSection from '../components/HeroSection'
import Intro from '../components/Intro'
import KeyFeatures from '../components/KeyFeatures'
import Testimonials from '../components/Testimonials'
import '../styles/landing.css'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <MainHeader />
      <HeroSection />
      <Intro />
      <KeyFeatures />
      <Testimonials />
    </div>
  )
}

export default LandingPage
