document.getElementById('login-submit').addEventListener('click', function () {
    //get email
    const email = document.getElementById('user-email');
    const userEmail = email.value;
    //get password
    const password = document.getElementById('user-password');
    const userPassword = password.value;
    //check email and password
    if (userEmail == 'polok@gmail.com' && userPassword == "POLOK121298") {
        window.location.href = "banking.html";
    }
});
