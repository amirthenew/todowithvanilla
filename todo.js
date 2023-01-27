//todo list with vanilla js
let inputField = document.querySelector('.inputField')
let addButton = document.querySelector('.addBtn')
let list = document.querySelector('.list')



const tasks = []


addButton.addEventListener('click',taskMaker)

inputField.addEventListener('keypress',(e)=>{
    if (e.key==='Enter') {addButton.click()}})


function taskMaker (){

    let taskBar = document.createElement('span')
    list.appendChild(taskBar)
    const task = inputField.value
    tasks.push(task)
    taskBar.innerHTML = task + `<img style='width:10px' src="./img/done.png" alt="">`
    inputField.value =''

}

function taskDone (){
console.log(target.value);
}