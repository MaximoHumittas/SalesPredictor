// Home.tsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeatureCards from '../components/FeatureCards/FeatureCards';
import InfoCards from '../components/InfoCards/InfoCards';
import Footer from '../components/Footer/Footer';

import  '../index.css';

const Home: React.FC = () => {
  return (
    <div>
        <HeroSection/>
        <div className='hero-title'>
          <h2 className='title'>Descubra lo que los productos de SalesPredictor pueden hacer por usted</h2>

        </div>
        
        <FeatureCards/>
        <div className='hero-title'>
          <h2 className='title' > ¿Qué novedades tenemos en SalesPredictor?</h2>

        </div>

        <InfoCards/>
        <Footer/>
    </div>
  )
};

export default Home;
