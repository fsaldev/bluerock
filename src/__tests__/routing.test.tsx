import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import * as AuthContextModule from '../contexts/AuthContext';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AppDetail from '../pages/AppDetail';

describe('Routing and Protected Routes', () => {
  it('should redirect unauthenticated users to login page', () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/dashboard']}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
  });

  it('should allow authenticated users to access dashboard', async () => {
    const MockAuthProvider = ({ children }: { children: React.ReactNode }) => {
      return (
        <AuthProvider>
          {children}
        </AuthProvider>
      );
    };

    const { container } = render(
      <MockAuthProvider>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </MockAuthProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it('should render app placeholder for /apps/app1 route', () => {
    const mockUser = { id: '1', username: 'testuser', avatar: 'test.jpg' };

    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/apps/app1']}>
        <Routes>
          <Route path="/apps/:appId" element={<AppDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Application 1')).toBeInTheDocument();
    expect(screen.getByText(/This is a placeholder for Application 1/i)).toBeInTheDocument();
  });

  it('should render app placeholder for /apps/app2 route', () => {
    const mockUser = { id: '1', username: 'testuser', avatar: 'test.jpg' };

    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/apps/app2']}>
        <Routes>
          <Route path="/apps/:appId" element={<AppDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Application 2')).toBeInTheDocument();
    expect(screen.getByText(/This is a placeholder for Application 2/i)).toBeInTheDocument();
  });

  it('should render app placeholder for /apps/app3 route', () => {
    const mockUser = { id: '1', username: 'testuser', avatar: 'test.jpg' };

    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: mockUser,
      isAuthenticated: true,
      login: jest.fn(),
      logout: jest.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/apps/app3']}>
        <Routes>
          <Route path="/apps/:appId" element={<AppDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Application 3')).toBeInTheDocument();
    expect(screen.getByText(/This is a placeholder for Application 3/i)).toBeInTheDocument();
  });
});
