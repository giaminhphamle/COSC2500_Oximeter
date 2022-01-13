import firebase from 'firebase/compat/app';

const firebaseConfig = {
	apiKey: "AIzaSyBB0-EBIFG1sRKKVJjiLNpBXoaGp3MEyxU",
	authDomain: "cosc2500-oximeter.firebaseapp.com",
	projectId: "cosc2500-oximeter",
	storageBucket: "cosc2500-oximeter.appspot.com",
	messagingSenderId: "148146302747",
	appId: "1:148146302747:web:e2847c7a43f17a20adedbe",
	measurementId: "G-5L6GGBME35",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
