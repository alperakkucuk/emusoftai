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

// Forgot password function
document.getElementById('forgot-button').addEventListener('click', () => {
    const email = document.getElementById('forgot-email').value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset email sent!');
        })
        .catch((error) => {
            console.error('Error sending password reset email:', error.message);
            alert('Error sending password reset email: ' + error.message);
        });
});
Sonuç