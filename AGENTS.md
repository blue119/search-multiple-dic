# Repository Guidelines

## Project Structure & Module Organization
- `main.js`: Electron main process (window creation, app lifecycle, IPC handlers).
- `preload.js`: Safe bridge between main and renderer (context isolation enabled).
- `renderer.js`: Frontend logic for the search bar and webview updates.
- `index.html` and `styles.css`: UI markup and styling for the search bar and 4 webview tiles.
- `README.md`: High-level overview and run instructions.
- `package.json`: Scripts and Electron dependency.

There are no dedicated test or build directories in this repo.

## Build, Test, and Development Commands
- `npm install`: Install Electron dependency.
- `npm start`: Run the app with Electron.
- `npm run dev`: Run the app with logging enabled.

No build or test scripts are defined beyond the runtime commands above.

## Coding Style & Naming Conventions
- Indentation: 2 spaces in JavaScript and JSON (match existing files).
- Use CommonJS (`require`) in Node/Electron scripts.
- Prefer clear, descriptive names for IPC channels (e.g., `get-app-version`).
- No linting or formatting tools are configured; keep changes consistent with current style.

## Testing Guidelines
- No testing framework is configured.
- If you add tests, document the framework and add a script entry in `package.json`.

## Feature Overview
- The app provides a search bar to look up word definitions.
- Results load in four webviews, each pointing to a different dictionary site.

## Commit & Pull Request Guidelines
- Recent commit messages use the imperative mood: `Add ...`, `Enable ...`, `Fix ...`.
- Keep commits focused on a single change.
- PRs should include a short description of behavior changes and, for UI updates, a screenshot of the app window.

## Security & Configuration Tips
- Maintain Electron security best practices already in place: `contextIsolation: true` and `nodeIntegration: false` in `main.js`.
- When adding new webviews or IPC channels, validate inputs and keep permission requests minimal.
