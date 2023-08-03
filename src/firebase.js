import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBv4mzt1xeAGHqxBBuV6ellqb3bI1N5geI",
  authDomain: "netflix-clone-bd051.firebaseapp.com",
  projectId: "netflix-clone-bd051",
  storageBucket: "netflix-clone-bd051.appspot.com",
  messagingSenderId: "624291902302",
  appId: "1:624291902302:web:6ad366025c5d7a93ffd5cf"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth};
export default db;