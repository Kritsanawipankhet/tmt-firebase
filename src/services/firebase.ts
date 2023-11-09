import firebaseApp from 'firebase-admin';
import serviceAccount from "./tmt-f8186-firebase-adminsdk-k2g4z-d4f14aa44c.json";

const firebaseConfig = {
    credential: firebaseApp.credential.cert(serviceAccount as firebaseApp.ServiceAccount)
  }

export default firebaseApp.initializeApp(firebaseConfig);
