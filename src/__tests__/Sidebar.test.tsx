import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => ({ pathname: '/dashboard' }),
}));

const SidebarWithProviders = () => (
  <AuthProvider>
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  </AuthProvider>
);

describe('Sidebar Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('should render all navigation items', () => {
    render(<SidebarWithProviders />);

    expect(screen.getByTitle('Home')).toBeInTheDocument();
    expect(screen.getByTitle('Projects')).toBeInTheDocument();
    expect(screen.getByTitle('History')).toBeInTheDocument();
    expect(screen.getByTitle('Apps')).toBeInTheDocument();
    expect(screen.getByTitle('Settings')).toBeInTheDocument();
  });

  it('should render app launcher icons', () => {
    render(<SidebarWithProviders />);

    expect(screen.getByTitle('App 1')).toBeInTheDocument();
    expect(screen.getByTitle('App 2')).toBeInTheDocument();
    expect(screen.getByTitle('App 3')).toBeInTheDocument();
  });

  it('should navigate when clicking navigation items', async () => {
    const user = userEvent.setup();
    render(<SidebarWithProviders />);

    const projectsButton = screen.getByTitle('Projects');
    await user.click(projectsButton);

    expect(mockNavigate).toHaveBeenCalledWith('/projects');
  });

  it('should navigate to app detail when clicking app launcher', async () => {
    const user = userEvent.setup();
    render(<SidebarWithProviders />);

    const app1Button = screen.getByTitle('App 1');
    await user.click(app1Button);

    expect(mockNavigate).toHaveBeenCalledWith('/apps/app1');
  });

  it('should render profile button', () => {
    render(<SidebarWithProviders />);

    const profileButton = screen.getByTitle('Profile');
    expect(profileButton).toBeInTheDocument();
  });

  it('should have active state styling for current route', () => {
    render(<SidebarWithProviders />);

    const homeButton = screen.getByTitle('Home');
    expect(homeButton).toHaveClass('bg-blue-500/20', 'text-blue-400');
  });
});
