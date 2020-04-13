var myInputs = document.querySelectorAll('input');
var register = document.querySelector('#register');
var regForm = document.querySelectorAll('.form')
var button = document.querySelector('button');


register.addEventListener('click', registerAccount);

function registerAccount(event) {

    if (typeof (Storage) !== 'undefined') {
        let users;
        if (sessionStorage.users == null && myInputs[0].value != "" && myInputs[1].value != "" && myInputs[2].value != "" && myInputs[3].value != "" && myInputs[4].value != "") {
            let forminputs = {
                name: myInputs[0].value,
                gender: myInputs[1].value,
                country: myInputs[2].value,
                email: myInputs[3].value,
                password: myInputs[4].value

            }
            users = []
            users.push(forminputs)
            localStorage.setItem('users', JSON.stringify(users))

/*
            displayMessage("Your account has been created");
            console.log(users)

            sessionStorage.name = myInputs[0].value;
            sessionStorage.gender = myInputs[1].value;
            sessionStorage.county = myInputs[2].value;
            sessionStorage.email = myInputs[3].value;
            sessionStorage.password = myInputs[4].value;

            setTimeout(function () {
                location.href = "login.html";
            }, 3000);  */
        } else{

            location.href = "login.html";
    }
    event.preventDefault();
}
};

register.addEventListener('click', Redirect);

function Redirect() {
    location.href = "login.html";;
 };