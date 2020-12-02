//Production version

import Firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

// seed the database -> comment this after one use to prevent duplicate entries.
//import { seedDatabase } from '../seed'; 
//config
const config ={
    apiKey: "AIzaSyBpVzUN43iyypq4Hi4HsCXppSFCmSAVoKM",
    authDomain: "netflix-clone-3j5n-e0beb.firebaseapp.com",
    databaseURL: "https://netflix-clone-3j5n-e0beb.firebaseio.com",
    projectId: "netflix-clone-3j5n-e0beb",
    storageBucket: "netflix-clone-3j5n-e0beb.appspot.com",
    messagingSenderId: "346717611287",
    appId: "1:346717611287:web:68d817f2e20e2ec74f8352",
    //measurementId: "G-S9KBDYB3R2"
};

const firebase = Firebase.initializeApp(config);
//seedDatabase(firebase);
export { firebase };