# Setup Guide — Bloca Mobile App (`bloca-mobile`)

Follow these instructions to set up, run, and develop the `bloca-mobile`
application locally.

## Prerequisites

- **Node.js**: Version 18.x or higher (Node 20+ recommended)
- **Package Manager**: `npm` or `bun`
- **Mobile Environment**: Expo Go app on your physical device, or iOS Simulator
  / Android Emulator.

## Installation

1. Navigate to the project directory:

   ```bash
   cd bloca-mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

## Development

Start the Expo development server:

```bash
npx expo start
# or
npm start
```

## Running on Specific Platforms

- **Android Emulator:**
  ```bash
  npx expo start --android
  ```
- **iOS Simulator:**
  ```bash
  npx expo start --ios
  ```
- **Web Preview:**
  ```bash
  npx expo start --web
  ```

## Code Quality & Linting

- **Type Checking:**
  ```bash
  npm run ts-check
  ```
- **Linting:**
  ```bash
  npm run lint
  ```
- **Formatting (Prettier):**
  ```bash
  npm run prettier:check
  npm run prettier:write
  ```
