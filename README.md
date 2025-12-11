# DSP Frontend (React)

This repository contains the React frontend used as the starting point for a migration from a Java-based UI to React. It is a small SPA built with Create React App, TypeScript for select files, Tailwind CSS for styling, and Axios for backend calls.

**Quick goals:** migrate UI responsibilities from the Java stack to a modern React codebase, centralize API calls, and prepare for a staged migration.

**Tech stack:** React, TypeScript (partial), Tailwind CSS, Axios, React Router.

**How to run**
- **Requirements:** Node.js (14+), npm
- **Install:** `npm install`
- **Start (dev):** `npm start` — opens at http://localhost:3000
- **Build (prod):** `npm run build`
- **Tests:** `npm test`

**Project structure (high level)**
- **Config & tools**: [package.json](package.json), [tailwind.config.js](tailwind.config.js), [postcss.config.js](postcss.config.js)
- **Public root**: [public/index.html](public/index.html)
- **App entry**: [src/index.tsx](src/index.tsx)
- **Router & auth guard**: [src/App.tsx](src/App.tsx)
- **Styles**: [src/index.css](src/index.css), [src/App.css](src/App.css)
- **Main components**: [src/components](src/components) — `Login`, `Inicio`, `Header`, `Footer`, `Dashboard`, `DashboardCard`, `SVG` icons

**Important implementation notes**
- The login flow is implemented in [src/components/Login.tsx](src/components/Login.tsx). It calls a backend at `http://10.1.1.38:8080/api/auth/login` and stores `token`, `user`, and `roles` in `localStorage` on success.
- `PrivateRoute` in [src/App.tsx](src/App.tsx) checks for a stored token and redirects unauthenticated users to the login page.
- Visual styling is done with Tailwind CSS classes throughout the components; a small custom CSS set is in [src/index.css](src/index.css).

**Immediate refactor suggestions for migration**
- **Externalize backend URL**: move hardcoded API URL in `Login.tsx` to an environment variable (e.g. `REACT_APP_API_URL`) to allow local/dev/prod targets.
- **Centralize API client**: create an `api.ts` that configures Axios (baseURL, interceptors for auth header, error handling, refresh token flow).
- **Auth context**: replace `localStorage` checks with a React context (`AuthProvider`) so all components can access auth state and roles.
- **TypeScript conversion**: most components are `.jsx`. Convert to `.tsx` and add stricter types (props, API responses). `Login.tsx` already uses TypeScript.
- **Routing & permissions**: extend `PrivateRoute` to check `roles`/permissions and provide graceful fallback pages.
- **Unit / E2E tests**: add focused tests for auth flows and critical components; consider Cypress for E2E when backend is stable.

**Security & deployment notes**
- Tokens are currently stored in `localStorage` — acceptable for many apps but consider HttpOnly cookies for improved XSS protection if the backend supports it.
- Ensure CORS is correctly configured on the backend since the frontend calls `http://10.1.1.38:8080`.
