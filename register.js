document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const ageInput = document.getElementById('age');

    function showError(input, show) {
        const errorSpan = document.getElementById(input.id + 'Error');
        if (errorSpan) {
            errorSpan.style.display = show ? 'block' : 'none';
        }
        input.style.borderColor = show ? '#e53e3e' : 'var(--border-color)';
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            if (nameInput.value.trim() === '') {
                showError(nameInput, true);
                isValid = false;
            } else {
                showError(nameInput, false);
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                showError(emailInput, true);
                isValid = false;
            } else {
                showError(emailInput, false);
            }

            if (passwordInput.value.length < 8) {
                showError(passwordInput, true);
                isValid = false;
            } else {
                showError(passwordInput, false);
            }

            if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === '') {
                showError(confirmPasswordInput, true);
                isValid = false;
            } else {
                showError(confirmPasswordInput, false);
            }

            const age = parseInt(ageInput.value);
            if (isNaN(age) || age < 13) {
                showError(ageInput, true);
                isValid = false;
            } else {
                showError(ageInput, false);
            }

            if (isValid) {
                alert('Form submitted successfully! 🚀');
                form.reset();
            }
        });
    }
});