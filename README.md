# Bloca Mobile App (`bloca-mobile`)

Part of the **BLOCA** ecosystem — an IoT-monitored plastic-to-brick compactor
with machine learning-based grading.

`bloca-mobile` is the cross-platform mobile application built for field
operators, technicians, and managers to monitor compactor status, receive push
alerts on compaction cycles, and review brick grading reports on the go.

## Features

- **Real-Time Alerts & Notifications:** Immediate push notifications for
  compactor maintenance, cycle completion, or error states.
- **Mobile Telemetry Viewer:** Compact dashboard for checking live sensor
  metrics from remote compaction units.
- **Cross-Platform:** Built with Expo and React Native for iOS, Android, and
  Web.

## Tech Stack

- **Framework:** React Native 0.86 & Expo (v57)
- **Routing:** Expo Router (`expo-router`)
- **Styling:** Tailwind CSS (`tailwindcss`, `uniwind`, `tailwind-variants`)
- **UI Components:** Heroui Native & Expo UI primitives
- **Quality Control:** ESLint, Prettier, TypeScript, and Husky pre-commit hooks

## Project Structure

```text
bloca-mobile/
├── app/               # Expo Router file-based screens and layouts
├── assets/            # App icons and splash screens
├── components/        # Reusable mobile UI components
├── hooks/             # Custom React hooks
├── scripts/           # Setup and utility scripts
├── package.json
└── tsconfig.json
```

## Related Repositories

- [`bloca-admin`](https://github.com/integratech-org/bloca-admin) - Admin web
  dashboard
- [`bloca-api`](https://github.com/integratech-org/bloca-api) - Backend REST API
  service
