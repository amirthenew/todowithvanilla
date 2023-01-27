//todo list with vanilla js
let inputField = document.querySelector('.inputField')
let addButton = document.querySelector('.addBtn')
let list = document.querySelector('.list')
let clearBtn = document.querySelector('.clearBtn')



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
    taskBar.innerHTML =  task+`<img class='tickbutton' style='width:10px' src="./img/done.png" alt="">`
    inputField.value =''

}



list.addEventListener('click',taskDone)

function taskDone (e){
console.log(e.target.parentNode);

e.target.parentNode.innerHTML
console.log(e.target.parentNode.childNodes[0]);

  e.target.parentNode.classList.toggle('doneclass')  
}

function clear (){
    list.innerHTML=''
}