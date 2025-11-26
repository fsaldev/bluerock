# Frontend Skeleton Implementation Brief

## 1. Project Overview

**Objective:** Create a "bare bones" React application skeleton that establishes the core architectural layout, routing, and theming for a data-intensive dashboard application.

**Context:** The application is a complex monitoring and visualization tool (referencing the provided "Dark Mode" dashboard design). This phase focuses solely on the structural framework, not the complex data visualization components.

## 2. Technical Stack Requirements

- **Framework:** React (latest stable version).
- **Build Tool:** Vite (preferred) or Create React App.
- **Language:** TypeScript.
- **Component Library:** Ant Design (antd).
- **Styling:** Tailwind CSS (preferred for rapid layout) or Styled Components.
- **Routing:** React Router v6+.
- **State Management:** Context API (sufficient for this skeleton phase).

## 3. Scope of Work

### 3.1. Project Initialization

- Initialize a new React + TypeScript repository.
- Configure basic linting (ESLint) and formatting (Prettier).
- Set up a standard folder structure (e.g., `/src/components`, `/src/pages`, `/src/layouts`, `/src/assets`).

### 3.2. Authentication & Routing Structure

Implement a basic authentication flow (mocked logic is acceptable for this phase).

- **Public Route:**
  - **Login/Landing Page:** A clean, centered login form (Username/Password) that redirects to the Dashboard upon "success".
- **Protected Routes:**
  - All dashboard pages must be wrapped in a layout that requires authentication.
  - Redirect unauthenticated users to the Login page.

### 3.3. Core Layout (The "App Shell")

The authenticated view must implement the "Dashboard Layout" visible in the design reference:

- **Dark Theme:** The application should default to a dark color scheme (backgrounds: `#1a1a1a`, `#0f0f0f`, etc.).
- **Left Sidebar (Navigation Rail):**
  - Fixed width, full height.
  - **Top:** App Logo/Icon (Blue Cube placeholder).
  - **Middle (Navigation Links):**
    - Home (House icon)
    - Projects/Files (Folder icon)
    - History/Activity (Clock icon)
    - Apps/Grid (Grid icon)
    - A few placeholder app launch icons (square "app" icons) that route to future app pages (for example: `/apps/app1`, `/apps/app2`). These should be simple, extensible route placeholders so new apps can be added without layout changes.
    - Settings (Gear icon)
  - **Bottom:** User Avatar (Circular profile image).
- **Top Header:**
  - Search Bar (spanning significant width).
  - "Saved Views" placeholder buttons/tabs.
  - Action icons on the right.
- **Main Content Area:**
  - Scrollable area that renders the active route's component.

### 3.4. Page Stubs

Create minimal placeholder components for the following routes to demonstrate navigation:

1.  **Home/Dashboard:** (The default view).
2.  **Projects:** Placeholder list or grid.
3.  **History:** Placeholder timeline or list.
4.  **Apps/Grid:** Placeholder content.
5.  **Settings:** A basic form layout for application preferences.
6.  **User Profile:** A basic view showing user details (accessible via the bottom avatar).

### 3.5. UI/UX Details

- **Active State:** The sidebar icon for the current route must be visually distinct (highlighted/colored).
- **Hover Effects:** Interactive elements (buttons, links) should have subtle hover states appropriate for a dark theme.
- **Responsiveness:** The layout should handle basic window resizing gracefully (e.g., sidebar remains fixed, content area shrinks).

## 4. Deliverables

1.  **Source Code:** A clean, compilable Git repository.
2.  **README.md:** Instructions on how to install dependencies (`npm install`) and run the development server (`npm run dev`).
3.  **Demo:** A working local build demonstrating the login flow and navigation between the sidebar links.
4.  **Test Strategy & Basic Tests:** A short test strategy document and a small set of example tests (unit + one end-to-end route/navigation test) demonstrating how the contractor intends to validate the skeleton. Include instructions for running tests locally and in CI.

## 5. Out of Scope (For this phase)

- Backend integration (use mock data).
- Complex node-graph visualizations (the central diagram in the reference image).
- Real authentication logic (JWT/OAuth).

## 6. Testing & QA

The contractor should provide a concise test strategy and include example test artifacts that validate the skeleton and routing behavior. The strategy should cover the following points:

- **Unit Testing:** Use Jest + React Testing Library to cover critical UI pieces (e.g., Sidebar navigation, Login form behavior, and route guards). Provide at least 3 example unit tests demonstrating component testing and mocked context/state.
- **Integration / Routing Tests:** Provide tests that assert protected routes redirect unauthenticated users to the Login page and that the placeholder app routes (e.g., `/apps/app1`, `/apps/app2`) render expected placeholders when navigated to.
- **End-to-End (E2E) Smoke Test:** Add one simple E2E test using Cypress or Playwright that runs the dev server, performs a mocked login, and navigates between the sidebar items to ensure the shell renders and routes correctly.
- **Type Checking & Linting:** Ensure TypeScript `tsc --noEmit` is included as a check, and enforce ESLint rules. Provide an npm script for `npm run test:ci` that runs lint, type-check, unit tests, and the E2E smoke test (E2E may be gated behind an environment variable in CI).
- **Accessibility (A11y) Smoke:** Include at least one accessibility check using `jest-axe` or axe-core in the E2E run for a key page (Home/Dashboard).
- **Test Coverage Goal:** Recommend a baseline coverage target for this skeleton (for example: 60% statements coverage) and explain what types of tests will be added later as the app grows.

**Deliverable Expectations:**

- A short `TESTING.md` (or a section in `README.md`) that documents the test approach, commands to run tests locally, and guidance for adding tests for new pages.
- Example test files under `/src/__tests__` and E2E config under `/e2e` (if applicable).
- CI snippets or guidance (e.g., GitHub Actions workflow example) showing how to run the test script on pull requests.

These items should be minimal but sufficient to show the contractor follows a repeatable testing methodology and leaves a clear pattern that future feature work will follow.
