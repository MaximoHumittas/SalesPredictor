import React from 'react';
import './HeroSection.css';
import HeroImage from '../../assets/HeroImage.webp'
const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Impulsa tu negocio con nuestra plataforma</h1>
        <p>Soluciones personalizadas para cada cliente. Tecnología, innovación y crecimiento.</p>
        <button>Ver más</button>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Ilustración hero" />
      </div>
    </section>
  );
};

export default HeroSection;
