import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Apps from '../pages/Apps';

const AppsWithRouter = () => (
  <BrowserRouter>
    <Apps />
  </BrowserRouter>
);

describe('Apps Page', () => {
  it('should render apps page title and description', () => {
    render(<AppsWithRouter />);

    expect(screen.getByText('Applications')).toBeInTheDocument();
    expect(screen.getByText('Access your integrated applications')).toBeInTheDocument();
  });

  it('should render all 6 applications', () => {
    render(<AppsWithRouter />);

    expect(screen.getByText('Application 1')).toBeInTheDocument();
    expect(screen.getByText('Application 2')).toBeInTheDocument();
    expect(screen.getByText('Application 3')).toBeInTheDocument();
    expect(screen.getByText('Application 4')).toBeInTheDocument();
    expect(screen.getByText('Application 5')).toBeInTheDocument();
    expect(screen.getByText('Application 6')).toBeInTheDocument();
  });

  it('should render application descriptions', () => {
    render(<AppsWithRouter />);

    expect(screen.getByText('Data visualization and analytics')).toBeInTheDocument();
    expect(screen.getByText('Real-time monitoring tools')).toBeInTheDocument();
    expect(screen.getByText('Workflow automation system')).toBeInTheDocument();
    expect(screen.getByText('Data processing pipeline')).toBeInTheDocument();
    expect(screen.getByText('Team collaboration hub')).toBeInTheDocument();
    expect(screen.getByText('Security management')).toBeInTheDocument();
  });

  it('should render Launch App buttons for all applications', () => {
    render(<AppsWithRouter />);

    const launchButtons = screen.getAllByText('Launch App');
    expect(launchButtons).toHaveLength(6);
  });

  it('should have clickable Launch App buttons', async () => {
    const user = userEvent.setup();
    render(<AppsWithRouter />);

    const launchButtons = screen.getAllByText('Launch App');
    expect(launchButtons[0]).toBeInTheDocument();
    
    await user.click(launchButtons[0]);
    // Button should be clickable (no error thrown)
    expect(launchButtons[0]).toBeInTheDocument();
  });

  it('should render app cards with proper structure', () => {
    render(<AppsWithRouter />);

    const app1 = screen.getByText('Application 1').closest('div');
    expect(app1).toHaveClass('bg-[#0f0f0f]', 'border', 'border-gray-800', 'rounded-lg');
  });
});

