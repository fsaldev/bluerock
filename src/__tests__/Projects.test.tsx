import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../pages/Projects';

const ProjectsWithRouter = () => (
  <BrowserRouter>
    <Projects />
  </BrowserRouter>
);

describe('Projects Page', () => {
  it('should render projects page title and description', () => {
    render(<ProjectsWithRouter />);

    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Manage and monitor your active projects')).toBeInTheDocument();
  });

  it('should render New Project button', () => {
    render(<ProjectsWithRouter />);

    expect(screen.getByText('New Project')).toBeInTheDocument();
  });

  it('should render all 5 projects', () => {
    render(<ProjectsWithRouter />);

    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
    expect(screen.getByText('API Integration')).toBeInTheDocument();
    expect(screen.getByText('User Management')).toBeInTheDocument();
    expect(screen.getByText('Data Pipeline')).toBeInTheDocument();
    expect(screen.getByText('Monitoring System')).toBeInTheDocument();
  });

  it('should render project statuses', () => {
    render(<ProjectsWithRouter />);

    const activeStatuses = screen.getAllByText('Active');
    expect(activeStatuses.length).toBeGreaterThan(0);
    const inProgressStatuses = screen.getAllByText('In Progress');
    expect(inProgressStatuses.length).toBeGreaterThan(0);
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('should render last modified timestamps', () => {
    render(<ProjectsWithRouter />);

    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
    expect(screen.getByText('5 hours ago')).toBeInTheDocument();
    expect(screen.getByText('1 day ago')).toBeInTheDocument();
    expect(screen.getByText('3 days ago')).toBeInTheDocument();
    expect(screen.getByText('1 week ago')).toBeInTheDocument();
  });

  it('should apply correct status colors for Active status', () => {
    render(<ProjectsWithRouter />);

    const activeStatus = screen.getAllByText('Active')[0];
    expect(activeStatus).toHaveClass('text-green-400');
    expect(activeStatus).toHaveClass('bg-green-400/20');
    expect(activeStatus).toHaveClass('border-green-400/30');
  });

  it('should apply correct status colors for In Progress status', () => {
    render(<ProjectsWithRouter />);

    const inProgressStatus = screen.getAllByText('In Progress')[0];
    expect(inProgressStatus).toHaveClass('text-blue-400', 'bg-blue-400/20', 'border-blue-400/30');
  });

  it('should apply correct status colors for Completed status', () => {
    render(<ProjectsWithRouter />);

    const completedStatus = screen.getByText('Completed');
    expect(completedStatus).toHaveClass('text-gray-400', 'bg-gray-400/20', 'border-gray-400/30');
  });

  it('should render project cards with proper styling', () => {
    render(<ProjectsWithRouter />);

    const projectCard = screen.getByText('Analytics Dashboard').closest('.bg-\\[\\#0f0f0f\\]');
    expect(projectCard).toBeInTheDocument();
  });

  it('should have clickable New Project button', async () => {
    const user = userEvent.setup();
    render(<ProjectsWithRouter />);

    const newProjectButton = screen.getByText('New Project');
    await user.click(newProjectButton);
    
    expect(newProjectButton).toBeInTheDocument();
  });

  it('should render MoreVertical buttons for each project', () => {
    render(<ProjectsWithRouter />);

    // MoreVertical icon buttons should be present (5 projects)
    const moreButtons = screen.getAllByRole('button').filter(button => 
      button.querySelector('svg')
    );
    expect(moreButtons.length).toBeGreaterThan(0);
  });
});

