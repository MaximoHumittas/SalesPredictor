import React from 'react';
import './FeatureCards.css';

const features = [
  { title: 'CRM Inteligente', text: 'Conecta con tus clientes como nunca antes.' },
  { title: 'Automatización', text: 'Ahorra tiempo automatizando tus procesos.' },
  { title: 'Reportes Avanzados', text: 'Toma decisiones con datos reales.' },
  { title: 'Integraciones', text: 'Conecta con tus herramientas favoritas.' },
];

const FeatureCards: React.FC = () => {
  return (
    <section className="feature-cards">
      {features.map((f, i) => (
        <div key={i} className="card">
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureCards;
