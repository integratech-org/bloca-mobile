<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/integratech-org/bloca-mobile">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">BLOCA Mobile</h3>

  <p align="center">
    Mobile Application for BLOCA Machine Operators
    <br />
    Feedstock Submission • Batch Tracking • Remote Machine Control • Real-time Monitoring
    <br />
    <a href="https://github.com/integratech-org/bloca-mobile"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/integratech-org/bloca-mobile/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/integratech-org/bloca-mobile/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#related-projects">Related Projects</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![BLOCA Mobile Banner][product-banner]](https://github.com/integratech-org/bloca-mobile)

**BLOCA Mobile** is the operator-facing mobile application for the BLOCA machine
production system. Built with Expo and React Native, it runs on both iOS and
Android devices, providing machine operators with tools to submit feedstock
batches, monitor real-time production progress, review quality predictions, and
remotely control the machine via WebSocket commands (e.g., emergency stop,
reset).

The app features an intuitive interface with bottom sheet modals, animated
charts powered by Victory Native and Skia, and offline-first data storage with
AsyncStorage. Operators can track batch history, view compressive strength
predictions and surface quality classifications, and receive push notifications
for critical events. The app communicates with BLOCA API for data operations and
BLOCA Edge for real-time machine control.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React Native][ReactNative.dev]][ReactNative-url]
- [![Expo][Expo.dev]][Expo-url]
- [![TypeScript][TypeScript.org]][TypeScript-url]
- [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
- [![Zustand][Zustand.dev]][Zustand-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is a cross-platform mobile application built with Expo. You can run it on
iOS Simulator, Android Emulator, or physical devices.

### Prerequisites

- **Software:**
  - Node.js 20 or higher
  - [Bun](https://bun.sh/) package manager (recommended) or npm
  - Expo CLI
  - For iOS development: Xcode 15+ (macOS only)
  - For Android development: Android Studio with Android SDK 31+

- **Mobile Device (optional):**
  - Install [Expo Go](https://expo.dev/go) app for testing on physical devices

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/integratech-org/bloca-mobile.git
   cd bloca-mobile
   ```

2. Install dependencies

   ```sh
   bun install
   ```

3. Create environment configuration

   ```sh
   cp .env.example .env
   # Edit .env with your specific configuration:
   # - EXPO_PUBLIC_API_URL: BLOCA API base URL
   # - EXPO_PUBLIC_WS_URL: WebSocket endpoint for real-time updates
   ```

4. Install pre-commit hooks (for development)
   ```sh
   bun postinstall
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### Start Development Server

Run the Expo development server:

```sh
bun start
```

From the development menu, you can:

- Press `i` to open in iOS Simulator
- Press `a` to open in Android Emulator
- Scan QR code with Expo Go app for physical device testing

### Platform-Specific Builds

Run on iOS:

```sh
bun ios
```

Run on Android:

```sh
bun android
```

Run on Web (experimental):

```sh
bun web
```

### Development Builds

Create a development build with custom native code:

```sh
# iOS
eas build --profile development --platform ios

# Android
eas build --profile development --platform android
```

### Production Builds

Build for app store submission:

```sh
# iOS
eas build --profile production --platform ios

# Android
eas build --profile production --platform android
```

### Common Operations

```sh
# Run linting
bun lint

# Fix linting issues
bun lint:fix

# Run TypeScript type checking
bun ts-check

# Format code with Prettier
bun format

# Check code formatting
bun prettier:check
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## Features

### Batch Management

- **Feedstock Submission**: Create new production batches by specifying LDPE and
  sand quantities
- **Batch Tracking**: Monitor active batch progress with real-time status
  updates
- **History View**: Browse completed batches with search, filter, and sorting
- **Batch Details**: Detailed view showing process parameters, ML predictions,
  and block images

### Real-Time Monitoring

- **Live Telemetry**: Real-time charts displaying temperature, pressure, and
  other sensor data during active batches
- **WebSocket Connection**: Persistent connection to BLOCA Edge for instant
  updates
- **Production Progress**: Visual indicators showing current phase (dosing,
  heating, compression, cooling, inspection)
- **Quality Predictions**: Display of compressive strength (MPa) and surface
  defect classification as soon as predictions are available

### Remote Machine Control

- **Emergency Stop**: Immediate machine halt via WebSocket command
- **Machine Reset**: Restart the production cycle after an error or manual stop
- **Status Monitoring**: Real-time machine state indicator (Idle, Running,
  Error, Maintenance)

### Data Visualization

- **Victory Native Charts**: Smooth, animated line charts for telemetry data
- **Skia Rendering**: Hardware-accelerated graphics for responsive UI
- **Interactive Graphs**: Pinch-to-zoom and pan gestures on time-series data
- **Statistical Summaries**: Average, min, max, and standard deviation
  calculations

### User Experience

- **Bottom Sheet Modals**: Native-feeling drawer UI with gesture support via
  Gorhom Bottom Sheet
- **Dark Mode**: System-aware dark/light theme switching
- **Offline Support**: Local data caching with AsyncStorage for offline access
  to recent batches
- **Push Notifications**: Critical alerts for batch completion, quality issues,
  and machine errors
- **Responsive Layout**: Adaptive UI for phones and tablets

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- RELATED PROJECTS -->

## Related Projects

BLOCA Mobile is part of the **BLOCA (Batch-Level Optimization through Compaction
Analytics)** ecosystem:

- **[bloca-api](https://github.com/integratech-org/bloca-api)** - Cloud REST API
  backend for batch data and user authentication
- **[bloca-edge](https://github.com/integratech-org/bloca-edge)** - IoT edge hub
  that this app connects to for real-time machine control
- **[bloca-ml](https://github.com/integratech-org/bloca-ml)** - Machine learning
  service providing the predictions displayed in the app
- **[bloca-admin](https://github.com/integratech-org/bloca-admin)** - Web admin
  dashboard for system oversight and advanced analytics
- **[bloca-firmware](https://github.com/integratech-org/bloca-firmware)** -
  ESP32 firmware collecting the process data shown in the app
- **[IntegraTech Organization](https://github.com/integratech-org)** - View all
  BLOCA projects and documentation

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

IntegraTech -
[Facebook](https://www.facebook.com/profile.php?id=61592806334500) -
integratech1@outlook.com

Project Link:
[https://github.com/integratech-org/bloca-mobile](https://github.com/integratech-org/bloca-mobile)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]:
  https://img.shields.io/github/contributors/integratech-org/bloca-mobile.svg?style=for-the-badge
[contributors-url]:
  https://github.com/integratech-org/bloca-mobile/graphs/contributors
[forks-shield]:
  https://img.shields.io/github/forks/integratech-org/bloca-mobile.svg?style=for-the-badge
[forks-url]: https://github.com/integratech-org/bloca-mobile/network/members
[stars-shield]:
  https://img.shields.io/github/stars/integratech-org/bloca-mobile.svg?style=for-the-badge
[stars-url]: https://github.com/integratech-org/bloca-mobile/stargazers
[issues-shield]:
  https://img.shields.io/github/issues/integratech-org/bloca-mobile.svg?style=for-the-badge
[issues-url]: https://github.com/integratech-org/bloca-mobile/issues
[product-banner]: images/banner.png

<!-- Technology Badges -->

[ReactNative.dev]:
  https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[Expo.dev]:
  https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[TypeScript.org]:
  https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS.com]:
  https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Zustand.dev]:
  https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white
[Zustand-url]: https://zustand-demo.pmnd.rs/
