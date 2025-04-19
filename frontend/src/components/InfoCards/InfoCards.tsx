import React from 'react';
import './InfoCards.css';

const infos = [
  {
    title: 'Casos de Éxito',
    text: 'Historias reales de clientes felices.',
    image: '/images/icono1.png',
  },
  {
    title: 'Soporte 24/7',
    text: 'Siempre estamos para ayudarte.',
    image: '/images/icono2.png',
  },
  {
    title: 'Capacitación',
    text: 'Aprende a sacarle el máximo provecho.',
    image: '/images/icono3.png',
  },
  {
    title: 'Seguridad',
    text: 'Tus datos siempre protegidos.',
    image: '/images/icono4.png',
  },
];

const InfoCards: React.FC = () => {
  return (
    <section className="info-cards">
      {infos.map((info, index) => (
        <div key={index} className="card">
          <img src={info.image} alt={info.title} />
          <h4>{info.title}</h4>
          <p>{info.text}</p>
        </div>
      ))}
    </section>
  );
};

export default InfoCards;
