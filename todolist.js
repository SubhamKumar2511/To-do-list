const task=document.getElementById("display")
const submit=document.getElementById('submit')
const showtask=document.querySelector(".tasks")

function CreateTask(){
    let addtask=document.createElement("li");
    // addtask.style.fontSize="20px";
    addtask.style.margin="4px 0";
    addtask.style.color="#222";
    addtask.classList.add(".check")
    addtask.innerText=task.value;

    if(task.value!==""){
    showtask.append(addtask);
    let del=document.createElement("button");
    del.innerText="\u00d7";
    addtask.append(del)
    task.value="";
    }
}

showtask.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
    }else {
        e.target.classList.toggle("check")

    }
})

submit.addEventListener("click",CreateTask)