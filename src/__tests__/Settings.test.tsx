import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Settings from '../pages/Settings';

const SettingsWithRouter = () => (
  <BrowserRouter>
    <Settings />
  </BrowserRouter>
);

describe('Settings Page', () => {
  it('should render settings page title and description', () => {
    render(<SettingsWithRouter />);

    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Configure your application preferences')).toBeInTheDocument();
  });

  it('should render Notifications section', () => {
    render(<SettingsWithRouter />);

    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Email notifications')).toBeInTheDocument();
    expect(screen.getByText('Push notifications')).toBeInTheDocument();
    expect(screen.getByText('Activity alerts')).toBeInTheDocument();
  });

  it('should render Security section', () => {
    render(<SettingsWithRouter />);

    expect(screen.getByText('Security')).toBeInTheDocument();
    expect(screen.getByText('Two-factor authentication')).toBeInTheDocument();
    expect(screen.getByText('Session timeout')).toBeInTheDocument();
    expect(screen.getByText('Login notifications')).toBeInTheDocument();
  });

  it('should render Appearance section', () => {
    render(<SettingsWithRouter />);

    expect(screen.getByText('Appearance')).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
    expect(screen.getByText('Font size')).toBeInTheDocument();
  });

  it('should render Regional section', () => {
    render(<SettingsWithRouter />);

    expect(screen.getByText('Regional')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Timezone')).toBeInTheDocument();
  });

  it('should render checkboxes with correct default states', () => {
    render(<SettingsWithRouter />);

    const emailNotifications = screen.getByLabelText('Email notifications');
    const activityAlerts = screen.getByLabelText('Activity alerts');
    const sessionTimeout = screen.getByLabelText('Session timeout');
    const loginNotifications = screen.getByLabelText('Login notifications');

    expect(emailNotifications).toBeChecked();
    expect(activityAlerts).toBeChecked();
    expect(sessionTimeout).toBeChecked();
    expect(loginNotifications).toBeChecked();
  });

  it('should have unchecked checkboxes for push notifications and 2FA', () => {
    render(<SettingsWithRouter />);

    const pushNotifications = screen.getByLabelText('Push notifications');
    const twoFactor = screen.getByLabelText('Two-factor authentication');

    expect(pushNotifications).not.toBeChecked();
    expect(twoFactor).not.toBeChecked();
  });

  it('should allow toggling checkboxes', async () => {
    const user = userEvent.setup();
    render(<SettingsWithRouter />);

    const pushNotifications = screen.getByLabelText('Push notifications');
    expect(pushNotifications).not.toBeChecked();

    await user.click(pushNotifications);
    expect(pushNotifications).toBeChecked();
  });

  it('should render Theme select with options', () => {
    render(<SettingsWithRouter />);

    const themeSelects = screen.getAllByRole('combobox');
    const themeSelect = themeSelects.find(select => 
      select.closest('div')?.querySelector('label')?.textContent === 'Theme'
    );
    expect(themeSelect).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('should render Font size select with options', () => {
    render(<SettingsWithRouter />);

    const themeSelects = screen.getAllByRole('combobox');
    const fontSizeSelect = themeSelects.find(select => 
      select.closest('div')?.querySelector('label')?.textContent === 'Font size'
    );
    expect(fontSizeSelect).toBeInTheDocument();
  });

  it('should render Language select with options', () => {
    render(<SettingsWithRouter />);

    const themeSelects = screen.getAllByRole('combobox');
    const languageSelect = themeSelects.find(select => 
      select.closest('div')?.querySelector('label')?.textContent === 'Language'
    );
    expect(languageSelect).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('should render Timezone select with options', () => {
    render(<SettingsWithRouter />);

    const themeSelects = screen.getAllByRole('combobox');
    const timezoneSelect = themeSelects.find(select => 
      select.closest('div')?.querySelector('label')?.textContent === 'Timezone'
    );
    expect(timezoneSelect).toBeInTheDocument();
    expect(screen.getByText('UTC')).toBeInTheDocument();
  });

  it('should render Save Changes button', () => {
    render(<SettingsWithRouter />);

    expect(screen.getByText('Save Changes')).toBeInTheDocument();
  });

  it('should render Reset to Default button', () => {
    render(<SettingsWithRouter />);

    expect(screen.getByText('Reset to Default')).toBeInTheDocument();
  });

  it('should allow selecting different theme options', async () => {
    const user = userEvent.setup();
    render(<SettingsWithRouter />);

    const themeSelects = screen.getAllByRole('combobox');
    const themeSelect = themeSelects.find(select => 
      select.closest('div')?.querySelector('label')?.textContent === 'Theme'
    ) as HTMLSelectElement;
    
    expect(themeSelect).toBeInTheDocument();
    await user.selectOptions(themeSelect, 'Light');
    
    expect(themeSelect.value).toBe('Light');
  });

  it('should render all settings sections with proper styling', () => {
    render(<SettingsWithRouter />);

    const sections = [
      screen.getByText('Notifications').closest('.bg-\\[\\#0f0f0f\\]'),
      screen.getByText('Security').closest('.bg-\\[\\#0f0f0f\\]'),
      screen.getByText('Appearance').closest('.bg-\\[\\#0f0f0f\\]'),
      screen.getByText('Regional').closest('.bg-\\[\\#0f0f0f\\]'),
    ];

    sections.forEach((section) => {
      expect(section).toBeInTheDocument();
    });
  });
});

