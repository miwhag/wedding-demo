/** @format */
import Body from './components/Body';
import './index.css';
import { GuestProvider } from './context/GuestContext';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCPURY-j3rbZ0J7jGgValur0pCrpqVlD6g',
	authDomain: 'wedding-1f6fc.firebaseapp.com',
	projectId: 'wedding-1f6fc',
	storageBucket: 'wedding-1f6fc.appspot.com',
	messagingSenderId: '756814555313',
	appId: '1:756814555313:web:7f4a87fc6a4789bdaf9a90',
	measurementId: 'G-KLNXD190W9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

function App() {
	return (
		<GuestProvider>
			<Body />
		</GuestProvider>
	);
}

export default App;
