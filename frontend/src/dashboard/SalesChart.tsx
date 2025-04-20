import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Enero', sales: 4000 },
  { month: 'Febrero', sales: 4200 },
  { month: 'Marzo', sales: 4600 },
  { month: 'Abril', sales: 3900 },
  { month: 'Mayo', sales: 4800 },
];

export const SalesChart: React.FC = () => {
  return (
    <div className="chart-card">
      <h3>Tendencia de ventas mensuales</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
