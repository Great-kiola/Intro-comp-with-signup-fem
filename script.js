let fNameInput = document.getElementById('fName');
let lNameInput = document.getElementById('lName');
let eAddressInput = document.getElementById('eAddress');
let pswrdInput = document.querySelector('#Pswrd');
let submit = document.getElementById('submit');


submit.addEventListener('click', handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    if (!fNameInput.value){
        fNameInput.classList.add('error');
    } else {
        fNameInput.classList.remove('error');
    }
    
    if (!lNameInput.value){
        lNameInput.classList.add('error');
    } else {
        lNameInput.classList.remove('error');
    } 

    if (!eAddressInput.value){
        eAddressInput.classList.add('error');
    } else {
        eAddressInput.classList.remove('error');
    } 

    if (!pswrdInput.value){
        pswrdInput.classList.add('error');
    } else {
        pswrdInput.classList.remove('error');
    } 
}