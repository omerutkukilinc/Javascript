const form = document.querySelector('#form');
const username = document.getElementById('username');
const email = document.getElementById( 'email' );
const password = document.getElementById( 'password' );
const repassword = document.getElementById( 'repassword' );
const errorText = document.getElementById("error");

function error(input) {
    input.className='form-control is-invalid'
    errorText.innerHTML='please fill out all fields correctly';
}
function success(input){
    input.className='form-control is-valid';
}
function emailValidator(input){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(input.value)) {
        success(input);
    }
    else{
        error(input);
    }
}
function passwordValidator(input1,input2){
    if(input1===input2){
        success(input1)
    }
    else{
        error(input1)
    }
}
function Require(input){
    if(input.value===""){
        error(input);
    }else{
        success(input);
    }
}
form.addEventListener('submit',function(e) {
     e.preventDefault()
    Require([username,email,password,repassword])
    emailValidator(email)
    passwordValidator(password,repassword)
})
