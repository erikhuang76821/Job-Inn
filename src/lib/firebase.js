import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, addDoc, query, where, onSnapshot,
    orderBy, updateDoc, doc, deleteDoc, serverTimestamp,
    arrayUnion, arrayRemove, runTransaction, getDoc, setDoc,
    getDocs, limit, writeBatch
} from 'firebase/firestore';
import {
    getAuth, signInAnonymously, onAuthStateChanged
} from 'firebase/auth';

// Firebase Configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const appId = import.meta.env.VITE_APP_ID || 'job-inn';

// --- Collection References ---
// Firestore Structure:
//   companies/{companyId}             ← 企業資訊
//   salary_entries/{entryId}          ← 薪資情報
//   discussions/{companyId}/messages/{messageId}  ← 討論串 (即時)
//   lottery_posts/{companyId}/posts/{postId}      ← 開獎貼文
//   lottery_posts/{companyId}/posts/{postId}/replies/{replyId} ← 開獎回覆

const COLLECTIONS = {
    companies: 'companies',
    salaryEntries: 'salary_entries',
    discussions: 'discussions',
    messages: 'messages',      // subcollection under discussions
    lotteryPosts: 'lottery_posts',
    posts: 'posts',            // subcollection under lottery_posts
    replies: 'replies',        // subcollection under posts
};

export {
    db, auth, appId, COLLECTIONS,
    collection, addDoc, query, where, onSnapshot,
    orderBy, updateDoc, doc, deleteDoc, serverTimestamp,
    arrayUnion, arrayRemove, runTransaction, getDoc, setDoc,
    getDocs, limit, writeBatch,
    signInAnonymously, onAuthStateChanged,
};
