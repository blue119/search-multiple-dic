// This file runs in the renderer process (browser context)

// Display version information
document.getElementById('node-version').textContent = process.versions.node;
document.getElementById('chrome-version').textContent = process.versions.chrome;
document.getElementById('electron-version').textContent = process.versions.electron;

// Get app version and platform from main process via IPC
window.electronAPI.getAppVersion().then(version => {
    document.getElementById('version').textContent = version;
});

window.electronAPI.getPlatform().then(platform => {
    document.getElementById('platform').textContent = platform;
});

// Interactive demo: Click counter
let clickCount = 0;
const button = document.getElementById('demo-button');
const countDisplay = document.getElementById('click-count');

button.addEventListener('click', () => {
    clickCount++;
    countDisplay.textContent = `Clicks: ${clickCount}`;

    // Add a fun animation effect
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
});

console.log('Electron Demo App Loaded Successfully!');
