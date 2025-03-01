const input = document.getElementById('input-box');
const list = document.getElementById('task');

function addTask(){
    if(input.value ===''){
        alert('you must write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "x"
        li.appendChild(span);
        
    }
    input.value = "";
    saveData();
}

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('check');
        saveData();
        
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    
},false);
function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem('data');
}
showTask();
