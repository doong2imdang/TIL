import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGPGTCGL2HCmW7kXRyXI5MyOS9KeoQ_9Q",
  authDomain: "nwitter-reloaded-5c949.firebaseapp.com",
  projectId: "nwitter-reloaded-5c949",
  storageBucket: "nwitter-reloaded-5c949.appspot.com",
  messagingSenderId: "800198033355",
  appId: "1:800198033355:web:793a04b2a0e40b04fbc04e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
