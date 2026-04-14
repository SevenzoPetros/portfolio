# Sevenzo Petros Kudakwashe - Cross-Platform Portfolio

A professional portfolio application built with modern web and mobile technologies, deployed across **Web**, **Android**, **iOS**, and **Windows Desktop** platforms.

## Platform Overview

### Web (Next.js)
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with advanced animations
- **Features**: PWA support, SEO optimization, responsive design
- **Deployment**: Vercel, static export support

### Mobile (React Native + Expo)
- **Framework**: React Native with Expo CLI
- **Platforms**: Android & iOS
- **Features**: Native animations, gesture handling, offline support
- **Deployment**: App Store, Google Play Store

### Windows Desktop (Electron)
- **Framework**: Electron with Next.js backend
- **Features**: Native menus, auto-updater, offline mode
- **Deployment**: NSIS installer with desktop shortcuts

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Web Development
```bash
# Clone repository
git clone https://github.com/sevenzo/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Mobile Development
```bash
# Navigate to mobile project
cd portfolio-mobile

# Install dependencies
npm install

# Start Expo development server
npx expo start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Build for production
npx expo build:android
npx expo build:ios
```

### Windows Desktop Development
```bash
# Install Electron dependencies
npm install electron electron-builder concurrently wait-on --save-dev

# Start development with Electron
npm run electron-dev

# Build Windows installer
npm run build:windows

# Run built application
npm run start:windows
```

## Cross-Platform Build System

### Automated Building
```bash
# Build all platforms
npm run build:all

# Build specific platform
node scripts/build-all-platforms.js build web
node scripts/build-all-platforms.js build android
node scripts/build-all-platforms.js build ios
node scripts/build-all-platforms.js build windows
```

### Deployment
```bash
# Deploy all platforms
npm run deploy:all

# Deploy specific platform
node scripts/build-all-platforms.js deploy web
node scripts/build-all-platforms.js deploy android
node scripts/build-all-platforms.js deploy ios
node scripts/build-all-platforms.js deploy windows
```

## Platform-Specific Features

### Web Features
- **Advanced Animations**: 3D transforms, parallax scrolling, morphing effects
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Performance**: Code splitting, image optimization, caching
- **Responsive**: Mobile-first design with breakpoints
- **PWA**: Offline support, install prompts, service workers

### Mobile Features
- **Native Performance**: 60fps animations, smooth scrolling
- **Gesture Handling**: Swipe navigation, pinch-to-zoom
- **Device Integration**: Camera, contacts, notifications
- **Offline Support**: Cached assets, offline mode
- **App Store Ready**: Proper icons, splash screens, metadata

### Windows Desktop Features
- **Native Integration**: System tray, file associations
- **Auto-Updater**: Background updates, user notifications
- **Window Management**: Minimize to tray, multi-monitor support
- **Security**: Code signing, sandboxed execution
- **Distribution**: MSI installer, desktop shortcuts

## Development Workflow

### 1. Setup Development Environment
```bash
# Install all dependencies across platforms
npm run setup:all

# Start development servers for all platforms
npm run dev:all
```

### 2. Make Changes
- Web changes in `portfolio/` directory
- Mobile changes in `portfolio-mobile/` directory
- Shared components in `shared/` directory

### 3. Test Across Platforms
```bash
# Run tests
npm run test

# Test on all platforms
npm run test:all-platforms
```

### 4. Build and Deploy
```bash
# Build and deploy all platforms
npm run deploy:all
```

## Configuration

### Environment Variables
Create `.env.local` for web:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

Create `app.json` for mobile:
```json
{
  "expo": {
    "name": "Sevenzo Portfolio",
    "slug": "sevenzo-portfolio",
    "version": "1.0.0"
  }
}
```

### Platform Configuration Files
- `next.config.js` - Web platform configuration
- `app.json` - Mobile platform configuration  
- `electron.js` - Windows desktop configuration
- `package.json` - Cross-platform scripts and dependencies

## Deployment

### Web Deployment
```bash
# Deploy to Vercel
npm run deploy:vercel

# Deploy to Netlify
npm run deploy:netlify

# Static export
npm run build:static
```

### Mobile Deployment
```bash
# Build Android APK
npx expo build:android

# Build iOS IPA
npx expo build:ios

# Submit to stores
npx expo submit:android
npx expo submit:ios
```

### Windows Deployment
```bash
# Build installer
npm run build:windows

# Create portable version
npm run build:portable

# Generate updater
npm run build:updater
```

## CI/CD Pipeline

### GitHub Actions
- **Automatic builds** on push to main branch
- **Multi-platform testing** across environments
- **Artifact management** for all platforms
- **Release automation** with version tagging
- **Deployment to stores** and distribution channels

### Build Pipeline Stages
1. **Code Quality**: Linting, type checking, tests
2. **Platform Builds**: Web, Android, iOS, Windows
3. **Testing**: Unit tests, integration tests, E2E tests
4. **Security**: Vulnerability scanning, code analysis
5. **Deployment**: Store submission, web deployment, desktop distribution

## Performance Optimization

### Web Optimization
- **Code Splitting**: Route-based and component-based
- **Image Optimization**: WebP, lazy loading, responsive images
- **Caching**: Service workers, browser caching, CDN
- **Bundle Analysis**: webpack-bundle-analyzer, size limits

### Mobile Optimization
- **Bundle Size**: Tree shaking, dead code elimination
- **Runtime Performance**: Hermes engine, native modules
- **Memory Management**: Leak detection, optimization
- **Battery Usage**: Background tasks, efficient animations

### Windows Optimization
- **Startup Time**: Lazy loading, async initialization
- **Memory Usage**: Efficient resource management
- **Disk Space**: Minimal dependencies, compression
- **Update Size**: Differential updates, delta patches

## Troubleshooting

### Common Issues
- **Build failures**: Check Node.js version, clear cache
- **Mobile crashes**: Verify dependencies, check logs
- **Windows installer**: Code signing, certificate issues
- **Web deployment**: Environment variables, build configuration

### Debug Tools
- **Web**: Chrome DevTools, React DevTools
- **Mobile**: Expo DevTools, Flipper, device logs
- **Windows**: Electron DevTools, Windows Event Viewer

### Support Channels
- **Documentation**: Project README, API docs
- **Community**: GitHub discussions, Discord
- **Issues**: GitHub issues with platform labels
- **Email**: kudakwashesevenzo1@gmail.com

## Contributing

### Development Guidelines
- Follow platform-specific best practices
- Maintain cross-platform compatibility
- Write tests for new features
- Document changes and updates

### Code Standards
- ESLint configuration for each platform
- TypeScript strict mode
- Prettier formatting
- Conventional commits

### Pull Request Process
1. Fork repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Code review and merge

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Developer**: Sevenzo Petros Kudakwashe
- **Email**: kudakwashesevenzo1@gmail.com
- **Phone**: +263 780 068 789
- **Website**: https://sevenzo-portfolio.com
- **GitHub**: https://github.com/sevenzo/portfolio

---

**Built with passion for cross-platform development and modern web technologies.**
