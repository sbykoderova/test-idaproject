// Validation

const form = document.querySelector('.form');
const formInput = document.querySelectorAll('input');
const formButton = document.querySelector('.form__button');

form.onsubmit = function () {
    formInput.forEach(input => {
        if (input.value == '') {
            input.classList.add('error');
            formButton.classList.remove('validation');
        } else {
            input.classList.remove('error');
            formButton.classList.add('validation');
        }
    });

    return false;
};