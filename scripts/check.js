const fs = require('fs');
const files = ['App.jsx', 'app.json', 'index.js', 'assets/icon.png', 'assets/splash.png'];
const missing = files.filter(f => !fs.existsSync(f));
if (missing.length) { console.error('Missing:', missing.join(', ')); process.exit(1); }
console.log('Project files present. Run npx expo-doctor for SDK compatibility.');
