document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    if (password.length >= 6) {
        window.location.href = 'map.html';
    } else {
        errorElement.textContent = 'Password must be at least 6 characters';
    }
});
