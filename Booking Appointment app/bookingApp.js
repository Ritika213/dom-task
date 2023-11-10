
const myForm = document.querySelector('#my-form')
//id -myform
const nameInput = document.querySelector('#name')
//namefield so input has id
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
//msg class is empty div
const userList = document.querySelector('#users')
//elect id of users which is also is empty ul added items use as ul
// grabing the stuff from dom,submit on the the form myform addeventlistener to listen submit

myForm.addEventListener('submit',onSubmit)
function onSubmit(e){
    e.preventDefault()
    
    //after submit it give me this actual element i want to value set to variable like this now when i submit the name it give me value
    if(nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error')
        msg.innerHTML='please enter all';
        setTimeout(()=>msg.remove(),3000)
    } else{
        localStorage.setItem("name", nameInput.value);
        localStorage.setItem("email", emailInput.value);
    }

}