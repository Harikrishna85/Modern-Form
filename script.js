// Function to validate full name
function validateName() {
    const name = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    if (name.value.length < 5) {
        nameError.textContent = 'Name must be at least 5 characters long.';
        name.classList.add('invalid');
        name.classList.remove('valid');
        return false;
    } else {
        nameError.textContent = '';
        name.classList.add('valid');
        name.classList.remove('invalid');
        return true;
    }
}

// Function to validate email
function validateEmail() {
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Enter a valid email address.';
        email.classList.add('invalid');
        email.classList.remove('valid');
        return false;
    } else {
        emailError.textContent = '';
        email.classList.add('valid');
        email.classList.remove('invalid');
        return true;
    }
}

// Function to validate phone number
function validatePhone() {
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    if (phone.value === '1234567890' || phone.value.length !== 10 || isNaN(phone.value)) {
        phoneError.textContent = 'Enter a valid 10-digit phone number.';
        phone.classList.add('invalid');
        phone.classList.remove('valid');
        return false;
    } else {
        phoneError.textContent = '';
        phone.classList.add('valid');
        phone.classList.remove('invalid');
        return true;
    }
}

// Function to validate password and confirm password
function validatePassword() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const name = document.getElementById('fullName').value.toLowerCase();

    if (password.value.length < 8 || password.value === 'password' || password.value.toLowerCase() === name) {
        passwordError.textContent = 'Password must be at least 8 characters and not be "password" or the name.';
        password.classList.add('invalid');
        password.classList.remove('valid');
        return false;
    } else {
        passwordError.textContent = '';
        password.classList.add('valid');
        password.classList.remove('invalid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPassword.classList.add('invalid');
        confirmPassword.classList.remove('valid');
        return false;
    } else {
        confirmPasswordError.textContent = '';
        confirmPassword.classList.add('valid');
        confirmPassword.classList.remove('invalid');
    }

    return true;
}

function validateCheckbox() {
    const termsCheckbox = document.getElementById('termsCheckbox');
    if (!termsCheckbox.checked) {
        alert('Please accept the Terms of Use and Privacy Policy.');
        return false;
    }
    return true;
}


// Add event listeners to the form fields
document.getElementById('fullName').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('phone').addEventListener('input', validatePhone);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirmPassword').addEventListener('input', validatePassword);

// Function to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const passwordValid = validatePassword();
    const termsCheckboxValid = validateCheckbox();

    if (nameValid && emailValid && phoneValid && passwordValid && termsCheckboxValid) {
        alert('Form submitted successfully!');
    } else {
        alert('Please correct the errors in the form.');
    }
});





document.addEventListener('DOMContentLoaded', (event) => {
    const password = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', () => {
        // Toggle the type attribute of the password input
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        // Toggle the icon class
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
});