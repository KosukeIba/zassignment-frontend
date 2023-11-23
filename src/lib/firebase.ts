import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import { 
  PUBLIC_GOOGLE_apiKey, 
  PUBLIC_GOOGLE_projectId, 
  PUBLIC_GOOGLE_authDomain, 
  PUBLIC_GOOGLE_storageBucket, 
  PUBLIC_GOOGLE_messagingSenderId, 
  PUBLIC_GOOGLE_appId, 
  PUBLIC_GOOGLE_measurementId } from '$env/static/public';
import { browser } from "$app/environment";

const firebaseConfig = {
  apiKey: PUBLIC_GOOGLE_apiKey,
  authDomain: PUBLIC_GOOGLE_authDomain,
  projectId: PUBLIC_GOOGLE_projectId,
  storageBucket: PUBLIC_GOOGLE_storageBucket,
  messagingSenderId: PUBLIC_GOOGLE_messagingSenderId,
  appId: PUBLIC_GOOGLE_appId,
  measurementId: PUBLIC_GOOGLE_measurementId
}

export let db: Firestore;
export let app: FirebaseApp;
export let auth: Auth;

export const initializeFirebase = () => {
  console.log('initialize firebase from firebase.ts')
  console.log(app)
  if (!browser) {
   throw new Error("Can't use the Firebase client on the server.");
  }
  if (!app) {
   app = initializeApp(firebaseConfig);
   auth = getAuth(app);
   console.log('firebase app is created')
  }
};