// script.js
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const welcomeModal = document.getElementById('welcomeModal');
const closeModal = document.getElementById('closeModal');

loginForm.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        event.preventDefault(); // Evita el envío del formulario
        errorMessage.style.display = 'block'; // Muestra el mensaje de error
    } else {
        errorMessage.style.display = 'none'; // Oculta el mensaje de error si todo está bien
    }
});

window.onload = function() {
    welcomeModal.style.display = 'flex'; // Muestra el modal

    closeModal.onclick = function() {
        welcomeModal.style.display = 'none'; // Cierra el modal al hacer clic en la "x"
    };

    window.onclick = function(event) {
        if (event.target === welcomeModal) {
            welcomeModal.style.display = 'none'; // Cierra el modal si se hace clic fuera del contenido
        }
    };
};