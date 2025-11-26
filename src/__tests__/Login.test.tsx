import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Login from '../pages/Login';

const LoginWithProviders = () => (
  <AuthProvider>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </AuthProvider>
);

describe('Login Page', () => {
  it('should render login form with username and password fields', () => {
    render(<LoginWithProviders />);

    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('should display welcome message', () => {
    render(<LoginWithProviders />);

    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByText('Sign in to access your dashboard')).toBeInTheDocument();
  });

  it('should accept input in username and password fields', async () => {
    const user = userEvent.setup();
    render(<LoginWithProviders />);

    const usernameInput = screen.getByPlaceholderText('Enter your username') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Enter your password') as HTMLInputElement;

    await user.type(usernameInput, 'testuser');
    await user.type(passwordInput, 'password123');

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('password123');
  });

  it('should disable submit button while loading', async () => {
    const user = userEvent.setup();
    render(<LoginWithProviders />);

    const usernameInput = screen.getByPlaceholderText('Enter your username');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    await user.type(usernameInput, 'testuser');
    await user.type(passwordInput, 'password');
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });
});
