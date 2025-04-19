// Home.tsx
import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import FeatureCards from '../components/FeatureCards/FeatureCards';
import InfoCards from '../components/InfoCards/InfoCards';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div>
        <HeroSection/>
        <FeatureCards/>
        <p>home</p>
        <InfoCards/>
        <Footer/>
    </div>
  )
};

export default Home;
