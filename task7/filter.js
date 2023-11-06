const form= document.getElementById('addForm')
const itemList=document.getElementById('items')
const filter=document.getElementById('filter')

//form submit event
form.addEventListener('submit',addItem);
//delete event
itemList.addEventListener('click',removeItem)
//filter event
filter.addEventListener('keyup',filterItems)

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

function filterItems(e){
    //convert to lowerCase
    let text= e.target.value.toLowerCase()
    //get li
    let items=itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='flex';
        } else{
            item.style.display='none'
        }
    })

    }
