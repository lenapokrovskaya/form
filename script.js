const inputPassword = document.getElementById('your-password');
const inputEmail = document.getElementById("your-mail");
const labelPassword = document.querySelector('.form__label-password');

const elem = document.createElement('div');
elem.id = 'notify';
elem.style.display = 'none';
labelPassword.appendChild(elem);

inputPassword.addEventListener('invalid', function(event) {
    event.preventDefault();
    if (!event.target.validity.valid) {
        elem.textContent = 'Неверный пароль';
        elem.className = 'error-password';
        elem.style.display = 'block';

        inputPassword.className = 'invalid';
    }
});

inputPassword.addEventListener('input', function(event) {
    if ('block' === elem.style.display) {
        inputPassword.className = '';
        elem.style.display = 'none';
    }
});

inputEmail.addEventListener('invalid', function(event) {
    if (!event.target.validity.valid) {
        inputEmail.className = 'invalid';
    }
});

inputEmail.addEventListener('input', function(event) {
    if (event.target.validity.valid) {
        inputEmail.className = '';
    }
});