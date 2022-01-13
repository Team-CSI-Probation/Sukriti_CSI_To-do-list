const input=document.getElementById("input");
const list=document.getElementById("list");
const check_icon="fa-check-circle";
const uncheck_icon="fa-circle-thin";
const strike="strike";
const clear=document.querySelector(".clear");

let task_list=[];
let id=0;

let data=localStorage.getItem("key");
if (data)
{task_list=JSON.parse(data);
    id=task_list.length;
    loadList(task_list);
}

function loadList(array)
{array.forEach(function (element){
    if(element.del== false)
    add(element.task, element.id, element.check, element.del);
    
}); }

clear.addEventListener("click",function (){

    localStorage.clear();
    location.reload();
});

//Adding items to the list
function add(item,id,check,del){if(del){return "";}
    const checked = check ? check_icon : uncheck_icon;
    const striked= check ? strike : "";
    
    const entry= `<li><i class="fa ${checked} " id= "${id}" role="done" ></i>
 <span class=" ${striked} "> ${item}</span>
   <i class="fa fa-trash" id= "${id}" role="trash"></i></li>`;

    list.insertAdjacentHTML("beforeEnd", entry);

}
//onclick
document.querySelector(".btn-dark").addEventListener("click", function ()
{const item= input.value;
    if (item)
    {add(item,id,false,false);
        task_list.push({
task: item,
id: id++,
check:false,
del:false});
localStorage.setItem("key", JSON.stringify(task_list));

    }
    else
    {alert("Enter a valid task.");}
    
    input.value="";
    }

);
//on pressing Enter key
document.addEventListener("keydown", function (event){if(event.key=="Enter")
{const item= input.value;
    if (item)
    {add(item,id,false,false);
        task_list.push({
task: item,
id: id++,
check:false,
del:false});
localStorage.setItem("key", JSON.stringify(task_list));

    }
    else
    {alert("Enter a valid task.");}
    
    input.value="";
    }
}
);
list.addEventListener("click", function (event){
    let node=event.target;
    const role=node.attributes.role.value;
    if(role=="done")
    {update(node);}
    else
    {trash(node);}
    localStorage.setItem("key", JSON.stringify(task_list));
    
    })
    
//Completing the task
function update(node)
{node.classList.toggle(check_icon);
    node.classList.toggle(uncheck_icon);
node.parentNode.querySelector("span").classList.toggle(strike);
task_list[node.id].check =task_list[node.id].check ? false : true;}


//Deleting the task
function trash(node)
{node.parentNode.parentNode.removeChild(node.parentNode);
task_list[node.id].del= true;}


