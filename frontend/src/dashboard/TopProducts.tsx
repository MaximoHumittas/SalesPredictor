import React from 'react';
import { Card } from '../components/Card/Card';

const products = [
  { name: 'Samsung J7', Ventas: 350 },
  { name: 'Hp victus 14"', Ventas: 220 },
  { name: 'Sony WH-CH720N', Ventas: 180 },
];

export const TopProducts: React.FC = () => {
  return (
    <Card className="top-products-card">
      <h3>Top Selling Products</h3>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} — {p.Ventas} Ventas
          </li>
        ))}
      </ul>
    </Card>
  );
};
