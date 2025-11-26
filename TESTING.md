# Testing Strategy

This document outlines the testing approach for the React Dashboard Application skeleton and provides guidance for running tests locally and in CI environments.

## Overview

The testing strategy covers four main areas:
1. **Unit Testing** - Component and context testing with Jest and React Testing Library
2. **Integration Testing** - Routing and navigation behavior
3. **End-to-End Testing** - Full user flows with Playwright
4. **Accessibility Testing** - A11y validation with axe-core

## Test Coverage Goals

### Current Baseline
- **Statements Coverage**: 53% (threshold: 40%)
- **Branches Coverage**: 31% (threshold: 30%)
- **Functions Coverage**: 50% (threshold: 40%)
- **Lines Coverage**: 51% (threshold: 40%)

The skeleton application has solid test coverage for core authentication, routing, and navigation functionality. Coverage is intentionally lower for placeholder pages that will be implemented later.

### Future Growth
As the application grows and complex data visualization components are added, we recommend:
- Increasing coverage targets to 60-70% for statements/lines
- Adding visual regression tests for data visualizations
- Expanding E2E tests to cover critical user workflows
- Adding performance tests for data-heavy operations

## Testing Stack

- **Jest** - Unit test runner
- **React Testing Library** - Component testing utilities
- **Playwright** - End-to-end browser automation
- **jest-axe** - Accessibility testing in unit tests
- **@axe-core/playwright** - Accessibility testing in E2E tests

## Running Tests Locally

### Unit Tests

Run all unit tests:
```bash
npm test
```

Run tests in watch mode (recommended for development):
```bash
npm run test:watch
```

Run tests with coverage report:
```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory. Open `coverage/lcov-report/index.html` in a browser to view detailed coverage.

### End-to-End Tests

Install Playwright browsers (first time only):
```bash
npx playwright install
```

Run E2E tests:
```bash
npm run test:e2e
```

Run E2E tests with UI mode (recommended for development):
```bash
npm run test:e2e:ui
```

### Type Checking

Run TypeScript type checking:
```bash
npm run typecheck
```

### Linting

Run ESLint:
```bash
npm run lint
```

### CI Test Suite

Run the complete CI test suite (lint, typecheck, unit tests, and E2E tests):
```bash
npm run test:ci
```

**Note**: E2E tests require the dev server to be available. The Playwright config will automatically start the dev server when running `test:e2e` or `test:ci`.

## Test Organization

```
project/
├── src/
│   ├── __tests__/
│   │   ├── setup.ts              # Jest setup and configuration
│   │   ├── AuthContext.test.tsx  # Auth context unit tests
│   │   ├── Login.test.tsx        # Login page component tests
│   │   ├── Sidebar.test.tsx      # Sidebar navigation tests
│   │   └── routing.test.tsx      # Route protection and navigation tests
│   └── ...
├── e2e/
│   └── navigation.spec.ts        # End-to-end navigation and accessibility tests
├── jest.config.cjs               # Jest configuration
└── playwright.config.ts          # Playwright configuration
```

## Writing Tests

### Unit Tests

Unit tests should focus on individual components and their behavior in isolation. Use mocked contexts and props as needed.

**Example - Testing a Component:**

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('should render with correct text', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interaction', async () => {
    const user = userEvent.setup();
    const mockHandler = jest.fn();

    render(<MyComponent onClick={mockHandler} />);

    await user.click(screen.getByRole('button'));
    expect(mockHandler).toHaveBeenCalled();
  });
});
```

**Example - Testing with Context:**

```typescript
import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

describe('useAuth', () => {
  it('should authenticate user', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <AuthProvider>{children}</AuthProvider>
    });

    await act(async () => {
      await result.current.login('user', 'pass');
    });

    expect(result.current.isAuthenticated).toBe(true);
  });
});
```

### Integration Tests

Integration tests validate that multiple components work together correctly, especially routing and navigation.

**Example - Testing Protected Routes:**

```typescript
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

describe('Protected Routes', () => {
  it('should redirect unauthenticated users', () => {
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
  });
});
```

### End-to-End Tests

E2E tests validate complete user workflows from the browser perspective.

**Example - Testing Navigation Flow:**

```typescript
import { test, expect } from '@playwright/test';

test('user can navigate dashboard', async ({ page }) => {
  await page.goto('/login');

  await page.getByPlaceholder('Enter your username').fill('testuser');
  await page.getByPlaceholder('Enter your password').fill('password');
  await page.getByRole('button', { name: /sign in/i }).click();

  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByText('Dashboard')).toBeVisible();
});
```

### Accessibility Tests

Accessibility tests ensure the application is usable by everyone, including users with disabilities.

**Example - E2E Accessibility Test:**

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('dashboard has no accessibility violations', async ({ page }) => {
  await page.goto('/dashboard');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```

## Adding Tests for New Pages

When adding a new page to the application, follow these steps:

1. **Create a unit test** in `src/__tests__/` for the page component:
   - Test that the page renders correctly
   - Test any interactive elements (buttons, forms, etc.)
   - Test any data loading or error states

2. **Add routing tests** in `src/__tests__/routing.test.tsx`:
   - Test that the route is accessible when authenticated
   - Test that the route redirects when not authenticated (if protected)

3. **Update E2E tests** in `e2e/navigation.spec.ts`:
   - Add navigation test to verify users can reach the new page
   - Add basic interaction tests if applicable

4. **Run tests locally** to ensure they pass:
   ```bash
   npm test
   npm run test:e2e:ui
   ```

## Continuous Integration

### GitHub Actions Workflow

Create `.github/workflows/test.yml`:

```yaml
name: Test Suite

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run typecheck

      - name: Run unit tests with coverage
        run: npm run test:coverage

      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload test coverage
        uses: codecov/codecov-action@v3
        if: always()
        with:
          files: ./coverage/lcov.info

      - name: Upload Playwright report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

### Environment Variables for CI

For CI environments, you may want to gate certain tests or behaviors:

- `CI=true` - Automatically set by most CI providers
- `SKIP_E2E=true` - Skip E2E tests (if needed for faster PR checks)

Update the test:ci script if needed:

```json
{
  "scripts": {
    "test:ci": "npm run lint && npm run typecheck && npm run test:coverage && if [ \"$SKIP_E2E\" != \"true\" ]; then npm run test:e2e; fi"
  }
}
```

## Test Maintenance

### When Tests Fail

1. **Read the error message carefully** - It usually indicates exactly what went wrong
2. **Run the test locally** to reproduce the issue
3. **Use debug mode** for E2E tests: `npm run test:e2e:ui`
4. **Check for timing issues** - Add appropriate `waitFor` or `expect().toBeVisible()` calls
5. **Update snapshots** if component output has intentionally changed

### Best Practices

- Keep tests focused and test one thing at a time
- Use descriptive test names that explain what is being tested
- Avoid testing implementation details - focus on user-facing behavior
- Mock external dependencies and API calls
- Run tests before committing code
- Maintain test coverage as new features are added

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Axe Accessibility Testing](https://github.com/dequelabs/axe-core)
