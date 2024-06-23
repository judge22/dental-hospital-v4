document.addEventListener("DOMContentLoaded", function () {
    const inputElements = document.getElementsByClassName('myInput');

    // Loop through all elements with the class 'myInput'
    Array.from(inputElements).forEach(function(inputElement) {
        inputElement.addEventListener('input', function () {
            const formOutline = this.closest('.form-outline');
            if (this.value.trim() !== '') {
                formOutline.classList.add('has-text');
            } else {
                formOutline.classList.remove('has-text');
            }
        });
    });
});
