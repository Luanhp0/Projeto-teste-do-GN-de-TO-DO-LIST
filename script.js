
const localStorageName = 'to-do-list-LP'

function validateNewTask(){
    let value = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists = value.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask(){
    let input = document.getElementById('input-new-task')
    input.style.border = ''
    //validation
    if(!input.value){
        input.style.border = '1px solid red'
        alert('Digite algo para inserir em sua lista')
    }else if(validateNewTask()){
        alert('Ja existe uma task com esta descrição')
    }
    else{
        //increment to localStorage
        let value = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        value.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(value))
        showValues()
    }
    input.value = ''
}


function showValues(){
    let value = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < value.length; i++)
    {
        list.innerHTML += `<li>${value[i]["name"]}<button id='btn' onclick='removeItem("${value[i]["name"]}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
      </svg></button></li>`;
    }
}
function removeItem(data){
    let value = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let index = value.findIndex(x => x.name == data);
    value.splice(index,1)
    localStorage.setItem(localStorageName,JSON.stringify(value))
    showValues()
}

showValues()