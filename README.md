# LifeConstellation — Smartphone Apps Assessment 2, App 2

An original offline-first React Native / Expo mobile memory journal. Each memory becomes a star; linked memories create constellation lines.

## Getting started

Requirements: Node.js, npm, Expo Go on iPhone.

```powershell
npm install
npx expo install --fix
npx expo install expo-splash-screen
npx expo-doctor
npx expo start --tunnel --clear
```

Scan the QR code using Expo Go. Use `npx expo start --lan --clear` when iPhone and PC share Wi-Fi if tunnel has connection problems.

## Features

- Four tabs: Sky, Memories, Timeline, Guide
- Local memory create / read / edit / delete with confirmation
- Date and title validation; categories; descriptions
- Favourites, category filters, text search
- Interactive SVG star constellation and reciprocal links
- Chronological timeline
- Welcome modal and built-in usage/privacy instructions
- AsyncStorage persistence; no account, server, or network needed after installation
- Custom app icon and splash assets

## Privacy and data safety

Data remains on the device. No cloud sync or backup is provided. Deleting the app or clearing app data can permanently remove memories. Three sample memories are added only on first launch and can be deleted.

## Functional test checklist

1. First launch onboarding opens and closes.
2. Four navigation tabs work.
3. Create a memory with valid title/date/category.
4. Reject blank title and invalid date.
5. Edit a memory and verify changes.
6. Link two memories; see a connecting line.
7. Open a star to see memory details.
8. Search and category filter work.
9. Toggle a favourite.
10. Timeline shows date ordering.
11. Delete memory and verify linked references are removed.
12. Restart Expo Go; verify saved memories persist.
13. Guide and introduction replay work.
14. Verify screen layout on physical iPhone.

## Notes

Run `npx expo-doctor` after installing packages. This project has been assembled as source code; physical-device tests and Expo Doctor must be completed in the user's environment. The splash screen and app icon need a native build for accurate verification; Expo Go may not display them as a standalone app would.

Video recording is intentionally deferred until both assessment apps and their written deliverables are complete.
