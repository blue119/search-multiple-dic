# Multi Dictionary Search

An Electron app that searches a word across four dictionary sites at once.

## Features

- One search bar updates all dictionary views
- Four side-by-side webview tiles for quick comparison
- Cropped views for targeted content on select sites
- Secure Electron setup with context isolation

## Supported Dictionaries

- Urban Dictionary
- Cambridge Dictionary
- Merriam-Webster
- Collins Dictionary

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

### Packaging (Linux)

Build a single-file AppImage:
```bash
npm install
npm run dist
```

The output is in `dist/`.

## How It Works

- **main.js**: Creates the Electron window and configures permissions
- **preload.js**: Provides a secure IPC bridge for renderer access
- **index.html**: Search UI and webview layout
- **renderer.js**: Search handling and webview updates
- **styles.css**: UI styling for the search bar and grid layout

## Security

This app follows Electron security best practices:
- Context isolation enabled
- Node integration disabled in renderer
- Secure IPC communication via preload script

## Learn More

- [Electron Documentation](https://www.electronjs.org/docs)
- [Electron Security](https://www.electronjs.org/docs/tutorial/security)
