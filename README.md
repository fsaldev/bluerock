# React Dashboard Application Skeleton

A modern, dark-themed React dashboard application skeleton built with TypeScript, Vite, and Tailwind CSS. This project provides a solid foundation for building data-intensive monitoring and visualization applications.

## Features

- 🔐 **Authentication Flow** - Mock authentication with protected routes
- 🎨 **Dark Theme** - Modern dark UI with custom color scheme
- 📱 **Responsive Layout** - Fixed sidebar navigation with flexible content area
- 🧭 **Routing** - React Router v6+ with protected route guards
- 🧪 **Testing** - Comprehensive test suite with Jest, React Testing Library, and Playwright
- ♿ **Accessibility** - Built with accessibility in mind, validated with axe-core

## Tech Stack

- **Framework:** React 18.3+
- **Build Tool:** Vite 5.4+
- **Language:** TypeScript 5.5+
- **Styling:** Tailwind CSS 3.4+
- **Routing:** React Router v7+
- **Icons:** Lucide React
- **Testing:**
  - Jest + React Testing Library (Unit & Integration)
  - Playwright (E2E)
  - jest-axe & @axe-core/playwright (Accessibility)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
project/
├── src/
│   ├── __tests__/          # Unit and integration tests
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx      # Top header with search and actions
│   │   └── Sidebar.tsx     # Left navigation sidebar
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx # Authentication state management
│   ├── layouts/            # Layout components
│   │   └── DashboardLayout.tsx # Main dashboard layout wrapper
│   ├── pages/              # Page components
│   │   ├── Login.tsx       # Login/landing page
│   │   ├── Dashboard.tsx   # Home dashboard
│   │   ├── Projects.tsx    # Projects page
│   │   ├── History.tsx     # Activity history
│   │   ├── Apps.tsx        # Applications grid
│   │   ├── AppDetail.tsx   # Individual app detail pages
│   │   ├── Settings.tsx    # Settings page
│   │   └── Profile.tsx     # User profile page
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── e2e/                    # End-to-end tests
│   └── navigation.spec.ts  # E2E navigation and accessibility tests
├── coverage/               # Test coverage reports
└── public/                 # Static assets

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:e2e:ui` - Run E2E tests with Playwright UI
- `npm run test:ci` - Run complete CI test suite (lint + typecheck + unit tests + E2E)

## Authentication

The application uses a **mock authentication system** for this skeleton phase. You can log in with any username and password combination. The authentication state is managed via React Context API and persists during the session.

### Mock Login Credentials
- **Username:** Any value
- **Password:** Any value

## Navigation

The application features a fixed left sidebar with the following navigation options:

- **Home** - Dashboard overview
- **Projects** - Project management
- **History** - Activity timeline
- **Apps** - Application grid view
- **App Launchers** - Quick access to app1, app2, app3
- **Settings** - Application preferences
- **Profile** - User profile (accessible via avatar at bottom of sidebar)

## Testing

This project includes a comprehensive testing strategy. See [TESTING.md](./TESTING.md) for detailed information about:

- Running tests locally
- Writing new tests
- Test coverage goals
- CI/CD integration
- Accessibility testing

### Quick Test Commands

```bash
# Run all unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run complete CI suite
npm run test:ci
```

## Edge Case
 If any validation errors occur—such as ‘ts-jest not found’ or issues related to the Jest package—we need to ensure that the Jest version being used is compatible.

## Development Guidelines

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/Sidebar.tsx` if needed
4. Create unit tests in `src/__tests__/`
5. Add E2E tests in `e2e/` if applicable

### Styling

The project uses Tailwind CSS with a custom dark theme. Key color values:
- Background: `#1a1a1a`, `#0f0f0f`
- Borders: `gray-800`, `gray-700`
- Accent: `blue-500`, `blue-600`
- Text: `white`, `gray-200`, `gray-400`

### TypeScript

The project is fully typed with TypeScript. Run `npm run typecheck` to verify type safety.

## CI/CD

The project includes a GitHub Actions workflow (`.github/workflows/test.yml`) that runs on pull requests and pushes to main. It executes:

1. Linting (ESLint)
2. Type checking (TypeScript)
3. Unit tests with coverage
4. End-to-end tests (Playwright)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

[Add your license here]

## Contributing

[Add contributing guidelines here]

