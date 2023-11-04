var itemList=document.querySelector('#items')
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement)


//childNodes
//console.log(itemList.childNodes)
//childNodes give linebreak textnotes too is it easy to use children

//console.log(itemList.children)
//itemList.children[3].style.backgroundColor ='yellow';

//firstChild
//console.log(itemList.firstChild)

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello1'

//lastChild
//console.log(itemList.lastChild)

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='Hello4';

//nextSibling
//console.log(itemList.nextSibling)
//nextElementSibling-sibling not present in html
//console.log(itemList.nextElementSibling)

//previousSibling
//console.log(itemList.previousSibling)
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createElement

//create a div

var newDiv = document.createElement('div');
//add class
newDiv.className = 'Hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','Hello Div')
//create text node
var newDivText= document.createTextNode('Hello World')

newDiv.appendChild(newDivText)
var container= document.querySelector('header .container')
var h1= document.querySelector('header h1')

console.log(newDiv)

container.insertBefore(newDiv,h1)



