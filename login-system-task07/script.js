// script.js
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    // Registration
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Store user data in local storage
            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username]) {
                alert('User already exists!');
            } else {
                users[username] = { password: password };
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful!');
                window.location.href = 'login.html';
            }
        });
    }

    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username] && users[username].password === password) {
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'secure.html';
            } else {
                alert('Invalid username or password!');
            }
        });
    }

    // Secure Page
    if (welcomeMessage) {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            welcomeMessage.textContent = `Welcome, ${loggedInUser}!`;
        } else {
            alert('Please log in to access this page.');
            window.location.href = 'login.html';
        }

        // Logout
        document.getElementById('logoutButton').addEventListener('click', function () {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'login.html';
        });
    }
});
