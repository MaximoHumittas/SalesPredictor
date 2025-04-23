// src/pages/About.tsx
import React from 'react';
import InfoCards from '../components/InfoCards/InfoCards';
import FeatureCards from '../components/FeatureCards/FeatureCards';
import { Card } from '../components/Card/Card';
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="intro-section">
        <Card className="intro-card">
          <h1>Acerca de Nosotros</h1>
          <p>
            En Sales Predictor, ayudamos a las empresas a predecir su futuro comercial con precisión y confianza.
            Utilizamos herramientas avanzadas de análisis de datos e inteligencia artificial para que tomes decisiones estratégicas basadas en información real.
          </p>
        </Card>
      </section>

      <section className="info-section">
        <h2>Nuestros Compromisos</h2>
        <InfoCards />
      </section>

      <section className="features-section">
        <h2>¿Qué Ofrecemos?</h2>
        <FeatureCards />
      </section>

      <section className="closing-section">
        <Card className="closing-card">
          <h2>¿Listo para predecir tu éxito?</h2>
          <p>
            Únete a cientos de empresas que ya optimizan su futuro con Sales Predictor. Tu crecimiento es nuestra misión.
          </p>
        </Card>
      </section>
    </div>
  );
};

export default About;
