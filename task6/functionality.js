const form= document.getElementById('addForm')
const itemList=document.getElementById('items')

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem)

function addItem(e){
    e.preventDefault();
     //get inputValue

     let newItem= document.getElementById('item').value;

     //create new li element

     let li= document.createElement('li');
     //add class
     li.className = 'list-group-item';

     //add text Node with inputValue

     li.appendChild(document.createTextNode(newItem));

     //create del botton
      let delbtn= document.createElement('button');

      //add class to delete button
      delbtn.className= 'btn btn-danger btn-sm float-right delete';
      //append text node
      delbtn.appendChild(document.createTextNode('X'))
      //append btn to li
       li.appendChild(delbtn)

       //append li to list
     itemList.appendChild(li);
}

//remove item 

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            let li= e.target.parentElement;
            itemList.removeChild(li)
        }
    }
    
}

