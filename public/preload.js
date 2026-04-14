const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // App information
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getPlatform: () => ipcRenderer.invoke('get-platform'),
  
  // System operations
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  
  // Development helpers
  openDevTools: () => ipcRenderer.invoke('open-dev-tools'),
  
  // Events
  onUpdateAvailable: (callback) => ipcRenderer.on('update-available', callback),
  onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', callback),
  
  // Remove all listeners
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
});

// Disable certain features for security
window.addEventListener('DOMContentLoaded', () => {
  // Disable right-click context menu in production
  if (process.env.NODE_ENV !== 'development') {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  
  // Disable text selection in certain areas
  const disableSelection = (element) => {
    element.style.userSelect = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.mozUserSelect = 'none';
    element.style.msUserSelect = 'none';
  };
  
  // Apply to navigation and buttons
  const navElements = document.querySelectorAll('nav, button, .btn');
  navElements.forEach(disableSelection);
});

// Handle window close events
window.addEventListener('beforeunload', (e) => {
  // Allow the window to close normally
  // This can be used for cleanup if needed
});
