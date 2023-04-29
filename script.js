let fNameInput = document.getElementById('fName');
let lNameInput = document.getElementById('lName');
let eAddressInput = document.getElementById('eAddress');
let pswrdInput = document.querySelector('#Pswrd');
let submit = document.getElementById('submit');
let eError = document.getElementById('eError');
let errorMsg = document.querySelector('.errorMsg');
let errorMsg2 = document.querySelector('.errorMsg2');
let errorMsg3 = document.querySelector('.errorMsg3');


submit.addEventListener('click', handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    if (!fNameInput.value){
        errorMsg.style.display = 'block';
        fNameInput.classList.add('error');
    } else {
        fNameInput.classList.remove('error');
    }
    
    if (!lNameInput.value){
        errorMsg2.style.display = 'block';
        lNameInput.classList.add('error');
    } else {
        lNameInput.classList.remove('error');
    }

    if (!pswrdInput.value){
        errorMsg3.style.display = 'block';
        pswrdInput.classList.add('error');
    } else {
        pswrdInput.classList.remove('error');
    }
    
    // Email Validation.
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(eAddressInput.value.match(validRegex)){
        return true;
    }else {
        eAddressInput.classList.add('error');
        eError.style.display = 'block';
    }


    if (!eAddressInput.value){
        eAddressInput.classList.add('error');
    } else {
        eAddressInput.classList.remove('error');
    } 
}