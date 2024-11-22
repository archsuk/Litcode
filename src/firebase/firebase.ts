import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBK3oe5TtAcQbB4pwWbwRaVYkRD-a03ZIc",
	authDomain: "leetcode-yt-3cc91.firebaseapp.com",
	projectId: "leetcode-yt-3cc91",
	storageBucket: "leetcode-yt-3cc91.firebasestorage.app",
	messagingSenderId: "664404402683",
	appId: "1:664404402683:web:5b35069a5ae6e101e52b5e",
	measurementId: "G-9822494PTV"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
