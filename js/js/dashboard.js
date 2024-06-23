document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    sidebarToggle.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("collapsed");
    });
});

// change hidden password to visible password
try {
document.addEventListener('DOMContentLoaded', function () {
    const passwordIcons = document.querySelectorAll('.password__icon');
    const passwordInputs = document.querySelectorAll('.auth__password');

    passwordIcons.forEach((icon, index) => {
        try{
        icon.addEventListener('click', function () {
            const passwordInput = passwordInputs[index];
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });} catch(error) {
            console.log({errors : error}); 
        }
    });
});
} catch (error) {
    console.log({errors : error}); 
}
//=========================

//add active class to role in select 
try{
document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("select-role");
    selectElement.addEventListener("change", function () {
        var selectedRole = this.value;
        var cardInputs = document.querySelectorAll(".card-inputs");
        cardInputs.forEach(function (cardInput) {
            cardInput.classList.remove("active");
        });
        document.querySelector("." + selectedRole).classList.add("active");
    });
});
} catch(error) {
    console.log({errors : error}); 
}