var li=document.getElementsByTagName('li');
li[1].textContent='Hello2';
for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}
li[2].style.backgroundColor='green';