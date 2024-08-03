// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
            // Redirect to dashboard
            window.location.href = '/dashboard/index.html'; // Yönlendirme yolunu güncelle
        })
        .catch((error) => {
            console.error('Error signing in:', error.message);
            alert('Error signing in: ' + error.message);
        });
});

// Populate login email if remembered
window.onload = () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('login-email').value = rememberedEmail;
        document.getElementById('remember-me').checked = true;
    }
};
