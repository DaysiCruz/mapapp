document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    if (username === 'prueba' && password === '12345') {
        window.location.href = 'map.html';
    } else {
        errorElement.textContent = 'Credenciales incorrectas';
    }
});
