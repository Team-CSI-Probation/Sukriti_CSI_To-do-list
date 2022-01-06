const input=document.getElementById("input");
const list=document.getElementById("list");
const check_icon="fa-check-circle";
const uncheck_icon="fa-circle-thin";
const strike="strike";
//Adding items to the list
function add(item,id,check,del){if(del){return "";}
    const checked = check ? check_icon : uncheck_icon;
    const striked= check ? strike : "";
    
    const entry= `<li><i class="fa ${checked} " id= "${id}" role="done" ></i>
 <span class=" ${striked} "> ${item} </span>
 <i class="fa fa-trash" id= "${id}" role="trash"></i></li>`;

    list.insertAdjacentHTML("beforeEnd", entry);

}

document.querySelector("button").addEventListener("click", function ()
{const item= input.value;
    if (item)
    {add(item,id,false,false);
        task_list.push({
task: item,
id: 0,
check:false,
delete:false});
    }
    else
    {alert("Enter a valid task.");}
    id++;}

);

let task_list=[];
let id=0;
//Completing the task
function update(node)
{node.classList.toggle(check_icon);
    node.classList.toggle(uncheck_icon);
document.querySelector("span").classList.toggle(strike);
task_list[node.id].check ? false : true;}


//Deleting the task
function trash(node)
{node.parentNode.parentNode.removeChild(node.parentNode);
task_list[node.id].delete= true;}

list.addEventListener("click", function (event){
let node=event.target;
const role=node.attributes.role.value;
if(role=="done")
{update(node);}
else
{trash(node);}


})