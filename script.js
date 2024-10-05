// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code goes here
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${email}`,
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/Index.html';
            } else {
                document.getElementById('login-message').textContent = 'Unauthorized';
            }
        })
        .catch(error => console.error('Error:', error));
    });
});

