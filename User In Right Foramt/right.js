const myform=document.querySelector("#my-form")
const nameinput=document.querySelector("#name")
const emailinput=document.querySelector("#email")
const msg=document.querySelector(".msg")

myform.addEventListener("submit",onsubmit)

function onsubmit(e){
    e.preventDefault()
    if(nameinput.value=="" || emailinput.value=="")
    {
        msg.innerHTML="please enter all fields"
        setTimeout(()=>msg.remove(),3000)
    }
    else{

        let newobj={
            name:nameinput.value,
            email:emailinput.value
        }
        let locstr=JSON.stringify(newobj)
        localStorage.setItem('newobj',locstr)
        let getitm=JSON.parse(localStorage.getItem('newobj'))
        console.log(getitm)
    
            
    }
    }
