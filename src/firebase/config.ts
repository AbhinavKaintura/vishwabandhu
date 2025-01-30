// firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config object
  apiKey: "AIzaSyAfVGu1bfYD0hCRYLxrvzXXak3rBQh4Kjo",
  authDomain: "vishwa-test-9a48c.firebaseapp.com",
  projectId: "vishwa-test-9a48c",
  storageBucket: "vishwa-test-9a48c.firebasestorage.app",
  messagingSenderId: "616542630330",
  appId: "1:616542630330:web:9dfe3c4348cfc375642d83"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);