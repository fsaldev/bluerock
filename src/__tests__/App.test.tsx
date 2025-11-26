import { render, screen } from '@testing-library/react';
import App from '../App';
import * as AuthContextModule from '../contexts/AuthContext';

// Mock all page components to avoid complex dependencies
jest.mock('../pages/Login', () => {
  return function MockLogin() {
    return <div>Login Page</div>;
  };
});

jest.mock('../pages/Dashboard', () => {
  return function MockDashboard() {
    return <div>Dashboard Page</div>;
  };
});

jest.mock('../pages/Projects', () => {
  return function MockProjects() {
    return <div>Projects Page</div>;
  };
});

jest.mock('../pages/History', () => {
  return function MockHistory() {
    return <div>History Page</div>;
  };
});

jest.mock('../pages/Apps', () => {
  return function MockApps() {
    return <div>Apps Page</div>;
  };
});

jest.mock('../pages/Settings', () => {
  return function MockSettings() {
    return <div>Settings Page</div>;
  };
});

jest.mock('../pages/Profile', () => {
  return function MockProfile() {
    return <div>Profile Page</div>;
  };
});

jest.mock('../pages/AppDetail', () => {
  return function MockAppDetail() {
    return <div>AppDetail Page</div>;
  };
});

describe('App Component', () => {
  beforeEach(() => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: null,
      isAuthenticated: false,
      login: jest.fn(),
      logout: jest.fn(),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render login page for /login route', () => {
    window.history.pushState({}, 'Test page', '/login');
    render(<App />);

    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('should redirect / to /dashboard', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/');
    render(<App />);

    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
  });

  it('should render dashboard page for /dashboard route when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/dashboard');
    render(<App />);

    expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
  });

  it('should render projects page for /projects route when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/projects');
    render(<App />);

    expect(screen.getByText('Projects Page')).toBeInTheDocument();
  });

  it('should render history page for /history route when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/history');
    render(<App />);

    expect(screen.getByText('History Page')).toBeInTheDocument();
  });

  it('should render apps page for /apps route when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/apps');
    render(<App />);

    expect(screen.getByText('Apps Page')).toBeInTheDocument();
  });

  it('should render app detail page for /apps/:appId route when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/apps/app1');
    render(<App />);

    expect(screen.getByText('AppDetail Page')).toBeInTheDocument();
  });

  it('should render settings page for /settings route when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/settings');
    render(<App />);

    expect(screen.getByText('Settings Page')).toBeInTheDocument();
  });

  it('should render profile page for /profile route when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    window.history.pushState({}, 'Test page', '/profile');
    render(<App />);

    expect(screen.getByText('Profile Page')).toBeInTheDocument();
  });
});

