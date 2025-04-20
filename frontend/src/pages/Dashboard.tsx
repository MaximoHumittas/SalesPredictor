import React from 'react';
import '../styles/Dashboard.css';
import { SummaryPanel } from '../dashboard/SummaryPanel';
import { SalesChart } from '../dashboard/SalesChart';
import { TopProducts } from '../dashboard/TopProducts';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h1>Panel de control</h1>
      <SummaryPanel />
      <div className="dashboard-row">
        <SalesChart />
        <TopProducts />
      </div>
    </div>
  );
};

export default Dashboard;
