import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Dashboard Navigation E2E', () => {
  test('should login and navigate through dashboard pages', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByText('Welcome Back')).toBeVisible();

    await page.getByPlaceholder('Enter your username').fill('testuser');
    await page.getByPlaceholder('Enter your password').fill('password123');
    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    await page.getByTitle('Projects').click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();

    await page.getByTitle('History').click();
    await expect(page).toHaveURL(/\/history/);
    await expect(page.getByRole('heading', { name: 'Activity History' })).toBeVisible();

    await page.getByTitle('Apps').click();
    await expect(page).toHaveURL(/\/apps$/);
    await expect(page.getByRole('heading', { name: 'Applications' })).toBeVisible();

    await page.getByTitle('Settings').click();
    await expect(page).toHaveURL(/\/settings/);
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible();

    await page.getByTitle('Profile').click();
    await expect(page).toHaveURL(/\/profile/);
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
  });

  test('should navigate to app detail pages', async ({ page }) => {
    await page.goto('/login');

    await page.getByPlaceholder('Enter your username').fill('testuser');
    await page.getByPlaceholder('Enter your password').fill('password');
    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL(/\/dashboard/);

    await page.getByTitle('App 1').click();
    await expect(page).toHaveURL(/\/apps\/app1/);
    await expect(page.getByRole('heading', { name: 'Application 1' })).toBeVisible();

    await page.getByTitle('App 2').click();
    await expect(page).toHaveURL(/\/apps\/app2/);
    await expect(page.getByRole('heading', { name: 'Application 2' })).toBeVisible();

    await page.getByTitle('App 3').click();
    await expect(page).toHaveURL(/\/apps\/app3/);
    await expect(page.getByRole('heading', { name: 'Application 3' })).toBeVisible();
  });

  test('should redirect unauthenticated users to login', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });

  test('should logout user and redirect to login', async ({ page }) => {
    await page.goto('/login');

    await page.getByPlaceholder('Enter your username').fill('testuser');
    await page.getByPlaceholder('Enter your password').fill('password');
    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL(/\/dashboard/);

    await page.getByTitle('Profile').click();
    await expect(page).toHaveURL(/\/profile/);

    await page.getByRole('button', { name: /sign out/i }).click();
    await expect(page).toHaveURL(/\/login/);
  });

  test('dashboard page should have no accessibility violations', async ({ page }) => {
    await page.goto('/login');

    await page.getByPlaceholder('Enter your username').fill('testuser');
    await page.getByPlaceholder('Enter your password').fill('password');
    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page).toHaveURL(/\/dashboard/);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
