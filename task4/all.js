// Select the 2nd item with class 'list-group-item' using querySelector
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

// Select all elements with class 'list-group-item' using querySelectorAll
var items = document.querySelectorAll('.list-group-item');

// Make the 3rd item (index 2) invisible
items[2].style.display = 'none';



//Using QuerySelectorALL change the font color to green for 2nd item in the item list
//Choose all the odd elements and make their background green using QuerySelectorALL


let items = document.querySelectorAll(".list-group-item")
console.log(items)
items[1].style.color = "green"
for (let i = 0; i < items.length; i++) {
    if (i % 2 == 0) {
        items[i].style.backgroundColor = "green"
    }
}

