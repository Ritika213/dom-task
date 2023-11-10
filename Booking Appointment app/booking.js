//browser have the window object and the window object is the parent object of the browser ,since window is very top level,so dont 
//actually have to window. anything in window,localStorage thats why to store in browser that the part of the window object,dom 
//document object model ,documnet is what we use to select things from the document.
//single element select
console.log(document.getElementById('my-form'))

console.log(document.querySelector('.container'))
//querySElector is much newer than getElementById, for long time people use jquery which is javascript library that is made it easy
// to selec other thing id so things like classes tags himself pretty much anything and querySelector work just lijke jquery of the 
//most part in terms of slecting a single element so we select anything like we look here class is container,its a single element
//selector so if there is more than h1 it only got the select the first one.

//multiple elemewnt selector which is more than one thing,i want to select all these list items
console.log(document.querySelectorAll('.item'))
//somethings gives us nodeList similer to an array we can array we can foreach stuff like that
console.log(document.getElementsByClassName('item'))
//not dot item becuase it passes a class,it gives something similer not nodelist its htmlCollection now the diffrence,htmlCollection
//you cant use array methode manual converted to array, if you wanna run away array method on it,but again i wouldnt use this
//stick to querySelector.
console.log(document.getElementsByTagName('li'))
//how we select things from dom
const items = document.querySelectorAll('.item')
items.forEach((item)=> console.log(item))
//lets grab useiterface here
const ul = document.querySelectorAll('.items')
 ul.remove();
 ul= document.querySelector('.items')
//ul.remove()
//ul.lastElementChild.remove()
//we also added content
ul.firstElementChild.textContent='hello';
//im taking ul which i grab from dom i choose in firstChildElement which is first li and change it textContent to hello
//we change anything what we want from js now we grab second one we ul and we can do children which i belive it nodeList
//select by index second one 
ul.children[1].innerText='sky';
ul.lastElementChild.innerHTML = '<h1>hello</h1>'
//if you want html dynamically you can do it with innerHTML,yopu can manupilate thing in useriterface anytime
//look at the event object,thee is bunch of stuff on it mouse stuff like that,look at target it give us actuall value
//console.log(e.target)
//addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void
//Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the 
//event is dispatched.The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method 
//behaves exactly as if the value was specified as options's capture.When set to true, options's capture prevents callback from being invoked 
//when the event's eventPhase attribute value is
//it take two things first things is event,second thing i wann click i take is function run when this event happen,when the btn is click,im 
//actaull using arrow function you can put in regular function,when use in event it takes event parrameter use e here,click then it has to submit 
//to the file either if you have submit button, you have from submit you have to stop prevent the default behavior,so use preventDefault you call 
//this method,now if i click it doesnt flase and go away it means from is no linger actually is submitting,

const btn = document.querySelector('.btn')
//btn.addEventListener('click',(e)=>{
   // btn.addEventListener('mouseover',(e)=>{
        btn.addEventListener('mouseout',(e)=>{   
   e.preventDefault()
  console.log(e)
  console.log(e.target.className)
  document.querySelector('#my-form').style.backgroundColor='#ccc'
  document.querySelector('body').classList.add('bg-dark')
  //first it change it formbackground,change bodyBackground dark in the textWhite,it useless but it shows userinterface intractive
  document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
   
})
//it actually give the  input class which is btn

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
        const li= document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)
        //clear data 
        nameInput.value='';
        emailInput.value='';
    }

}
