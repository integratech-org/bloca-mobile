# bloca-mobile

Mobile app for BLOCA, built with Expo + React Native.

## Tech stack

- Expo SDK 57
- React Native 0.86 + React 19
- Expo Router
- HeroUI Native
- TypeScript

## Prerequisites

- Bun 1.x
- Expo development environment for your target platform:
  - Android Studio (Android)
  - Xcode (iOS, macOS only)

## Getting started

```bash
# install dependencies
bun install

# start Expo dev server
bun run start
```

Then run on a platform:

```bash
bun run android
bun run ios
bun run web
```

## Available scripts

- `bun run start` — start Expo development server
- `bun run android` — open Android target
- `bun run ios` — open iOS target
- `bun run web` — run web target
- `bun run lint` — run ESLint
- `bun run lint:fix` — run ESLint and auto-fix
- `bun run ts-check` — run TypeScript checks
- `bun run prettier:check` — verify formatting
- `bun run prettier:fix` / `bun run format` — format codebase

## Project structure

```txt
src/
  app/         # Expo Router routes and layouts
  components/  # reusable mobile UI components
  global.css   # global utility classes (Uniwind)
```

## Notes

- App entry is `expo-router/entry`.
- Root providers are configured in `src/app/_layout.tsx`.
