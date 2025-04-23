import React from 'react';
import { Card } from '../components/Card/Card';

const products = [
  { name: 'Samsung J7', Ventas: 350 },
  { name: 'Hp Victus 14"', Ventas: 220 },
  { name: 'Sony WH-CH720N', Ventas: 180 },
  { name: 'Apple MacBook Pro', Ventas: 150 },
  { name: 'Sony PlayStation 5', Ventas: 400 },
  { name: 'Nintendo Switch', Ventas: 320 },
  { name: 'Dell XPS 13', Ventas: 210 },
  { name: 'iPhone 13', Ventas: 500 },
  { name: 'Bose QuietComfort 35', Ventas: 160 },
  { name: 'Google Pixel 6', Ventas: 170 },
];

export const TopProducts: React.FC = () => {
  return (
    <Card className="top-products-card">
      <h3 style={{ marginBottom: '1rem', color: '#2563eb' }}>Top Productos en Venta</h3>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong> — {p.Ventas} Ventas
          </li>
        ))}
      </ul>
    </Card>
  );
};
