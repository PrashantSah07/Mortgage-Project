import Better from './components/Better';
import Footer from './components/Footer';
import HelpSection from './components/HelpSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TestimonialSection from './components/TestimonialSection';

const App = () => {
  return (
    <div className=''>
      <Navbar bgColor={'#004733'} txtColor={'white'} />
      <HeroSection />
      <TestimonialSection />
      <HelpSection />
      <Better />
      <Footer />
    </div>
  )
}

export default App
