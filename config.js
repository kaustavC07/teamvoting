import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://team-voting-app-dc266-default-rtdb.firebaseio.com"
      })
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();