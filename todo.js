//todo list with vanilla js
let inputField = document.querySelector('.inputField')
let addButton = document.querySelector('.addBtn')
let list = document.querySelector('.list')
let clearBtn = document.querySelector('.clearBtn')
let badge = document.querySelector('.badge')



let tasks = []


addButton.addEventListener('click',taskMaker)
clearBtn.addEventListener('click',clear)
inputField.addEventListener('keypress',(e)=>{
    if (e.key==='Enter') {addButton.click()}})


function taskMaker (){

    let taskBar = document.createElement('span')
    list.appendChild(taskBar)
    const task = inputField.value
    tasks.push(task)
    taskBar.innerHTML =  task+`<img class='tickbutton' style='width:10px' src="./img/done.png" alt=""> 
    <img class='removebutton' style='width:10px' src="./img/remove.png" alt="">`
    badge.innerHTML = tasks.length
    inputField.value =''

}



list.addEventListener('click',taskDone)



function taskDone (e){

    console.log(e.target.parentNode);

let itemSelected = e.target.parentNode
   
    if (e.target.classList.contains('removebutton')){
        e.target.parentNode.innerText = ''
        console.log(e.target.parentNode)
    }
    else if(e.target.classList.contains('tickbutton')){
        console.log(list);
        itemSelected.classList.toggle('doneclass')
        console.log(e);
       
    }

        

}






function clear (){
    list.innerHTML=''
}