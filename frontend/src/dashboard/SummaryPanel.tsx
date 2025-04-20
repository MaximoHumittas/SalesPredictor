import React from 'react';
import { Card } from '../components/Card/Card';

export const SummaryPanel: React.FC = () => {
  return (
    <div className="summary-panel">
      <Card><h3>Ingresos totales</h3><p>$120,000</p></Card>
      <Card><h3>Ventas Mensuales</h3><p>1,245</p></Card>
      <Card><h3>Productos activos</h3><p>57</p></Card>
    </div>
  );
};
