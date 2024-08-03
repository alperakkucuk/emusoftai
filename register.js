// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkC7nqYjAiU8eDfgHF9UoIlEpTZr3SXMc",
    authDomain: "mikroauth-48466.firebaseapp.com",
    projectId: "mikroauth-48466",
    storageBucket: "mikroauth-48466.appspot.com",
    messagingSenderId: "94496869016",
    appId: "1:94496869016:web:759c386b7e5c70e3a2deed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Register function
document.getElementById('register-button').addEventListener('click', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Redirect or handle successful registration
            window.location.href = 'login.html'; // Update with your desired redirect
        })
        .catch((error) => {
            console.error('Error registering:', error.message);
            alert('Error registering: ' + error.message);
        });
});
