import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const DashboardWithRouter = () => (
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);

describe('Dashboard Page', () => {
  it('should render dashboard title and description', () => {
    render(<DashboardWithRouter />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Welcome to your monitoring dashboard')).toBeInTheDocument();
  });

  it('should render all 4 stat cards', () => {
    render(<DashboardWithRouter />);

    expect(screen.getByText('Active Sessions')).toBeInTheDocument();
    expect(screen.getByText('Total Projects')).toBeInTheDocument();
    expect(screen.getByText('Team Members')).toBeInTheDocument();
    expect(screen.getByText('Performance')).toBeInTheDocument();
  });

  it('should render stat values correctly', () => {
    render(<DashboardWithRouter />);

    expect(screen.getByText('1,248')).toBeInTheDocument();
    expect(screen.getByText('34')).toBeInTheDocument();
    expect(screen.getByText('18')).toBeInTheDocument();
    expect(screen.getByText('94.2%')).toBeInTheDocument();
  });

  it('should render stat changes with positive indicators', () => {
    render(<DashboardWithRouter />);

    expect(screen.getByText('+12.5%')).toBeInTheDocument();
    expect(screen.getByText('+4')).toBeInTheDocument();
    expect(screen.getByText('+2')).toBeInTheDocument();
    expect(screen.getByText('+2.1%')).toBeInTheDocument();
  });

  it('should render visualization area', () => {
    render(<DashboardWithRouter />);

    expect(screen.getByText('Visualization Area')).toBeInTheDocument();
    expect(screen.getByText('Complex data visualization components will be rendered here')).toBeInTheDocument();
  });

  it('should render stat cards with proper styling', () => {
    render(<DashboardWithRouter />);

    const statCard = screen.getByText('Active Sessions').closest('.bg-\\[\\#0f0f0f\\]');
    expect(statCard).toBeInTheDocument();
  });
});

