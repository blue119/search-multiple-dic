# Electron Demo App

A simple Electron application demonstrating the basic structure and features of an Electron app.

## Features

- Modern Electron architecture with context isolation
- Secure IPC communication between main and renderer processes
- Beautiful gradient UI with interactive elements
- Displays system and app information
- Click counter demo

## Project Structure

```
├── package.json          # Project configuration and dependencies
├── main.js              # Main process (Electron backend)
├── preload.js           # Preload script (secure bridge)
├── index.html           # HTML structure
├── styles.css           # Styling
├── renderer.js          # Renderer process (frontend logic)
└── README.md            # This file
```

## Getting Started

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the application:
```bash
npm start
```

Or with logging enabled:
```bash
npm run dev
```

## How It Works

- **main.js**: The main process that creates and manages the application window
- **preload.js**: Provides a secure bridge between main and renderer processes
- **index.html**: The user interface
- **renderer.js**: Frontend JavaScript that runs in the browser context
- **styles.css**: Visual styling for the application

## Security

This app follows Electron security best practices:
- Context isolation enabled
- Node integration disabled in renderer
- Secure IPC communication via preload script

## Learn More

- [Electron Documentation](https://www.electronjs.org/docs)
- [Electron Security](https://www.electronjs.org/docs/tutorial/security)
