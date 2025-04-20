import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`custom-card ${className}`}>
      {children}
    </div>
  );
};

export { Card };
