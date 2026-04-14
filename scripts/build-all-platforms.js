#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== Cross-Platform Portfolio Build Script ===\n');

// Platform configurations
const platforms = {
  web: {
    name: 'Web (Next.js)',
    buildCommand: 'npm run build',
    outputDir: 'out',
    deployCommand: 'npm run start'
  },
  android: {
    name: 'Android (React Native)',
    buildCommand: 'cd ../portfolio-mobile && npx expo build:android',
    outputDir: '../portfolio-mobile/dist',
    deployCommand: 'cd ../portfolio-mobile && npx expo start --android'
  },
  ios: {
    name: 'iOS (React Native)',
    buildCommand: 'cd ../portfolio-mobile && npx expo build:ios',
    outputDir: '../portfolio-mobile/dist',
    deployCommand: 'cd ../portfolio-mobile && npx expo start --ios'
  },
  windows: {
    name: 'Windows Desktop (Electron)',
    buildCommand: 'npm run build:windows',
    outputDir: 'dist-windows',
    deployCommand: 'npm run start:windows'
  }
};

// Execute command with error handling
function executeCommand(command, description) {
  console.log(`\n${description}...`);
  try {
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });
    console.log(`\n${description} completed successfully!`);
    return true;
  } catch (error) {
    console.error(`\n${description} failed:`, error.message);
    return false;
  }
}

// Build specific platform
function buildPlatform(platformKey) {
  const platform = platforms[platformKey];
  if (!platform) {
    console.error(`Platform '${platformKey}' not supported!`);
    return false;
  }

  console.log(`\n=== Building ${platform.name} ===`);
  
  // Create output directory if it doesn't exist
  if (platform.outputDir && !fs.existsSync(platform.outputDir)) {
    fs.mkdirSync(platform.outputDir, { recursive: true });
  }

  // Execute build command
  const success = executeCommand(platform.buildCommand, `Building ${platform.name}`);
  
  if (success) {
    console.log(`\n${platform.name} build completed successfully!`);
    console.log(`Output directory: ${platform.outputDir || 'default'}`);
  }
  
  return success;
}

// Build all platforms
function buildAll() {
  console.log('\n=== Building All Platforms ===');
  
  const results = {};
  
  for (const [key, platform] of Object.entries(platforms)) {
    console.log(`\n--- ${platform.name} ---`);
    results[key] = buildPlatform(key);
  }
  
  console.log('\n=== Build Summary ===');
  for (const [key, success] of Object.entries(results)) {
    const status = success ? 'SUCCESS' : 'FAILED';
    console.log(`${platforms[key].name}: ${status}`);
  }
  
  const successCount = Object.values(results).filter(Boolean).length;
  const totalCount = Object.keys(results).length;
  
  console.log(`\nBuild Summary: ${successCount}/${totalCount} platforms built successfully`);
  
  if (successCount === totalCount) {
    console.log('\nAll platforms built successfully! Ready for deployment.');
  } else {
    console.log('\nSome platforms failed to build. Check the logs above for details.');
  }
}

// Deploy specific platform
function deployPlatform(platformKey) {
  const platform = platforms[platformKey];
  if (!platform) {
    console.error(`Platform '${platformKey}' not supported!`);
    return false;
  }

  console.log(`\n=== Deploying ${platform.name} ===`);
  
  // Execute deploy command
  const success = executeCommand(platform.deployCommand, `Deploying ${platform.name}`);
  
  if (success) {
    console.log(`\n${platform.name} deployed successfully!`);
  }
  
  return success;
}

// Create Windows desktop app package
function createWindowsPackage() {
  console.log('\n=== Creating Windows Desktop Package ===');
  
  // Check if Electron is installed
  try {
    require('electron');
  } catch (error) {
    console.log('Installing Electron for Windows desktop app...');
    executeCommand('npm install electron electron-builder --save-dev', 'Installing Electron dependencies');
  }
  
  // Create electron main process file
  const electronMain = `
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, 'assets/icon.png'),
    show: false,
  });

  const startUrl = isDev 
    ? 'http://localhost:3000' 
    : \`file://\${path.join(__dirname, '../out/index.html')}\`;
  
  mainWindow.loadURL(startUrl);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
`;

  // Write electron main file
  if (!fs.existsSync('public/electron.js')) {
    fs.writeFileSync('public/electron.js', electronMain);
    console.log('Created electron main process file');
  }

  // Update package.json with electron scripts
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.main = 'public/electron.js';
  packageJson.scripts = {
    ...packageJson.scripts,
    'electron': 'electron .',
    'electron-dev': 'NODE_ENV=development electron .',
    'build:windows': 'npm run build && electron-builder --win',
    'start:windows': 'npm run electron-dev'
  };
  
  packageJson.build = {
    appId: 'com.sevenzo.portfolio',
    productName: 'Sevenzo Portfolio',
    directories: {
      output: 'dist-windows'
    },
    files: [
      'out/**/*',
      'public/electron.js',
      'node_modules/**/*'
    ],
    win: {
      target: 'nsis',
      icon: 'assets/icon.ico'
    }
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Updated package.json with Electron configuration');
  
  return true;
}

// Main execution
const args = process.argv.slice(2);
const command = args[0];
const platform = args[1];

switch (command) {
  case 'build':
    if (platform) {
      if (platform === 'windows') {
        createWindowsPackage();
      }
      buildPlatform(platform);
    } else {
      buildAll();
    }
    break;
    
  case 'deploy':
    if (platform) {
      deployPlatform(platform);
    } else {
      console.error('Please specify a platform to deploy: web, android, ios, windows');
    }
    break;
    
  case 'package-windows':
    createWindowsPackage();
    break;
    
  case 'help':
    console.log(`
Usage: node build-all-platforms.js [command] [platform]

Commands:
  build [platform]     Build specified platform or all platforms
  deploy [platform]    Deploy specified platform
  package-windows     Create Windows desktop package
  help                 Show this help message

Platforms:
  web                  Next.js web application
  android              Android mobile app
  ios                  iOS mobile app
  windows              Windows desktop app

Examples:
  node build-all-platforms.js build              # Build all platforms
  node build-all-platforms.js build web          # Build web only
  node build-all-platforms.js deploy web         # Deploy web app
  node build-all-platforms.js package-windows    # Create Windows package
`);
    break;
    
  default:
    console.error('Unknown command. Use "help" for available commands.');
}
