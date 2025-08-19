// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDO7uBc4IAP5ByNvq1lrUmqUEplHeHZL68",
  authDomain: "fir-chat-86a99.firebaseapp.com",
  projectId: "fir-chat-86a99",
  storageBucket: "fir-chat-86a99.firebasestorage.app",
  messagingSenderId: "375089785404",
  appId: "1:375089785404:web:5049dd3d04e1a51f863139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);
export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');

