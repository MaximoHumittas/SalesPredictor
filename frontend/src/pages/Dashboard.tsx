import React from 'react';
import '../styles/Dashboard.css';
import { SummaryPanel } from '../dashboard/SummaryPanel';
import { SalesChart } from '../dashboard/SalesChart';
import { TopProducts } from '../dashboard/TopProducts';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Panel de Control</h1>
      </header>
      <SummaryPanel />
      <div className="dashboard-row">
        <SalesChart />
        <TopProducts />
      </div>
    </div>
  );
};

export default Dashboard;
