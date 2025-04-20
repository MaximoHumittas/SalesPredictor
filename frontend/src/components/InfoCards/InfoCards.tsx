import React from 'react';
import './InfoCards.css';

import exito from '../../assets/exito.png';
import capacitation from '../../assets/capacitation.png';
import security from '../../assets/securidad.png';
import callCenter from '../../assets/callCenter.png';

const infos = [
  {
    title: 'Casos de Éxito',
    text: 'Historias reales de clientes felices.',
    image: exito,
  },
  {
    title: 'Soporte 24/7',
    text: 'Siempre estamos para ayudarte.',
    image: callCenter,
  },
  {
    title: 'Capacitación',
    text: 'Aprende a sacarle el máximo provecho.',
    image: capacitation,
  },
  {
    title: 'Seguridad',
    text: 'Tus datos siempre protegidos.',
    image: security,
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
