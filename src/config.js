import Firebase from 'firebase';
let config = {
	apiKey: "AIzaSyBiKI_QV3VNsJxmvKIBzY9mLtXOwbABE9s",
    authDomain: "my-project-1541460250729.firebaseapp.com",
    databaseURL: "https://my-project-1541460250729.firebaseio.com",
    projectId: "my-project-1541460250729",
    storageBucket: "my-project-1541460250729.appspot.com",
    messagingSenderId: "916394593443",
    appId: "1:916394593443:web:40e3f37e3c078c6fd04316"
};
let app = Firebase.initializeApp(config);
export const db = app.database();