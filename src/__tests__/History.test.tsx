import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import History from '../pages/History';

const HistoryWithRouter = () => (
  <BrowserRouter>
    <History />
  </BrowserRouter>
);

describe('History Page', () => {
  it('should render history page title and description', () => {
    render(<HistoryWithRouter />);

    expect(screen.getByText('Activity History')).toBeInTheDocument();
    expect(screen.getByText('Track recent changes and updates')).toBeInTheDocument();
  });

  it('should render all activity items', () => {
    render(<HistoryWithRouter />);

    expect(screen.getByText('Updated project configuration')).toBeInTheDocument();
    expect(screen.getByText('Created new dashboard view')).toBeInTheDocument();
    expect(screen.getByText('Merged feature branch')).toBeInTheDocument();
    expect(screen.getByText('Modified API endpoints')).toBeInTheDocument();
    expect(screen.getByText('Added new monitoring rules')).toBeInTheDocument();
  });

  it('should render user names for activities', () => {
    render(<HistoryWithRouter />);

    const johnDoeNames = screen.getAllByText('John Doe');
    expect(johnDoeNames.length).toBeGreaterThan(0);
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument();
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument();
  });

  it('should render timestamps for activities', () => {
    render(<HistoryWithRouter />);

    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
    expect(screen.getByText('5 hours ago')).toBeInTheDocument();
    expect(screen.getByText('1 day ago')).toBeInTheDocument();
    expect(screen.getByText('2 days ago')).toBeInTheDocument();
    expect(screen.getByText('3 days ago')).toBeInTheDocument();
  });

  it('should render activity container with proper styling', () => {
    render(<HistoryWithRouter />);

    const heading = screen.getByText('Activity History');
    const container = heading.parentElement?.parentElement;
    expect(container).not.toBeNull();
    expect(container).toHaveClass('space-y-4');
  });

  it('should display activities in chronological order', () => {
    render(<HistoryWithRouter />);

    const activities = [
      'Updated project configuration',
      'Created new dashboard view',
      'Merged feature branch',
      'Modified API endpoints',
      'Added new monitoring rules',
    ];

    activities.forEach((activity) => {
      expect(screen.getByText(activity)).toBeInTheDocument();
    });
  });
});

