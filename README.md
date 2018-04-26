# Overview

Annotator is an Electron app using Firebase for authentication and storage. Create annotated citations (or other records for your db) and push them to Firebase. Configurable for multi-client and offline use.

## Setup and Use
After cloning, initialize a [Firebase](https://firebase.google.com/) project. Define user authentication settings as desired. Retrieve your Firebase project's config for `apiKey`, domain, url and id's. Create `renderer.js` in the root directory of Annotator, add in `config` with your Firebase project's reference:

```javascript
var config = {
  apiKey: "RETRIEVE-FROM-YOUR-FIREBASE-PROJECT",
  serviceAccount: "./service-account.json",
  authDomain: "RETRIEVE-FROM-YOUR-FIREBASE-PROJECT",
  databaseURL: "RETRIEVE-FROM-YOUR-FIREBASE-PROJECT",
  projectId: "RETRIEVE-FROM-YOUR-FIREBASE-PROJECT",
  storageBucket: "",
  messagingSenderId: "RETRIEVE-FROM-YOUR-FIREBASE-PROJECT"
};
firebase.initializeApp(config);
```

```bash
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
