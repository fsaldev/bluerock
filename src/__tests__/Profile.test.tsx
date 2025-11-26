import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Profile from '../pages/Profile';
import * as AuthContextModule from '../contexts/AuthContext';

const mockNavigate = jest.fn();
const mockLogout = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const ProfileWithProviders = () => (
  <AuthProvider>
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  </AuthProvider>
);

describe('Profile Page', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockLogout.mockClear();
  });

  it('should render profile page title and description', async () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Manage your account information')).toBeInTheDocument();
  });

  it('should render user information when authenticated', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    expect(screen.getByText('testuser')).toBeInTheDocument();
  });

  it('should render profile form fields', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Member Since')).toBeInTheDocument();
    
    // Verify inputs exist
    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('should render Change Avatar button', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    expect(screen.getByText('Change Avatar')).toBeInTheDocument();
  });

  it('should render Save Changes button', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    expect(screen.getByText('Save Changes')).toBeInTheDocument();
  });

  it('should render Sign Out button', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    expect(screen.getByText('Sign Out')).toBeInTheDocument();
  });

  it('should handle logout when Sign Out is clicked', async () => {
    const user = userEvent.setup();
    
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    const signOutButton = screen.getByText('Sign Out');
    await user.click(signOutButton);

    expect(mockLogout).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  it('should display username in profile header', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    expect(screen.getByText('testuser')).toBeInTheDocument();
  });

  it('should display default avatar when no avatar is provided', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: undefined },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    // Should show first letter of username
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('should display avatar image when avatar is provided', () => {
    jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue({
      user: { id: '1', username: 'testuser', avatar: 'test.jpg' },
      isAuthenticated: true,
      login: jest.fn(),
      logout: mockLogout,
    });

    render(<ProfileWithProviders />);

    const avatarImage = screen.getByAltText('Profile');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'test.jpg');
  });
});

