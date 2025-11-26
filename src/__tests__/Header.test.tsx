import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

const HeaderWithRouter = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

describe('Header Component', () => {
  it('should render search input', () => {
    render(<HeaderWithRouter />);

    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });

  it('should render all saved view buttons', () => {
    render(<HeaderWithRouter />);

    expect(screen.getByText('Default View')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Monitoring')).toBeInTheDocument();
  });

  it('should have active state for Default View button', () => {
    render(<HeaderWithRouter />);

    const defaultViewButton = screen.getByText('Default View');
    expect(defaultViewButton).toHaveClass('bg-blue-500/20', 'text-blue-400', 'border', 'border-blue-500/30');
  });

  it('should have inactive state for other view buttons', () => {
    render(<HeaderWithRouter />);

    const analyticsButton = screen.getByText('Analytics');
    expect(analyticsButton).toHaveClass('bg-[#1a1a1a]', 'text-gray-400', 'border', 'border-gray-700');
  });

  it('should render Bookmarks button', () => {
    render(<HeaderWithRouter />);

    const bookmarksButton = screen.getByTitle('Bookmarks');
    expect(bookmarksButton).toBeInTheDocument();
  });

  it('should render Notifications button', () => {
    render(<HeaderWithRouter />);

    const notificationsButton = screen.getByTitle('Notifications');
    expect(notificationsButton).toBeInTheDocument();
  });

  it('should render Filter button', () => {
    render(<HeaderWithRouter />);

    const filterButton = screen.getByTitle('Filter');
    expect(filterButton).toBeInTheDocument();
  });

  it('should allow typing in search input', async () => {
    const user = userEvent.setup();
    render(<HeaderWithRouter />);

    const searchInput = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    await user.type(searchInput, 'test search');

    expect(searchInput.value).toBe('test search');
  });

  it('should have clickable view buttons', async () => {
    const user = userEvent.setup();
    render(<HeaderWithRouter />);

    const analyticsButton = screen.getByText('Analytics');
    await user.click(analyticsButton);

    expect(analyticsButton).toBeInTheDocument();
  });

  it('should have clickable action buttons', async () => {
    const user = userEvent.setup();
    render(<HeaderWithRouter />);

    const bookmarksButton = screen.getByTitle('Bookmarks');
    await user.click(bookmarksButton);

    expect(bookmarksButton).toBeInTheDocument();
  });

  it('should render header with proper styling', () => {
    render(<HeaderWithRouter />);

    const header = screen.getByPlaceholderText('Search...').closest('header');
    expect(header).toHaveClass('h-16', 'bg-[#0f0f0f]', 'border-b', 'border-gray-800');
  });
});

