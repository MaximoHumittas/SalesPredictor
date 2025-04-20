import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export { Button };
