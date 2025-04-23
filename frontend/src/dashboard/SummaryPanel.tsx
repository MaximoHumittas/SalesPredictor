import React from 'react';
import { Card } from '../components/Card/Card';

export const SummaryPanel: React.FC = () => {
  return (
    <div className="summary-panel">
      <Card><h3>Ingresos totales</h3><p>$1145,000</p></Card>
      <Card><h3>Ventas Mensuales</h3><p>3,228</p></Card>
      <Card><h3>Productos activos</h3><p>64</p></Card>
    </div>
  );
};
