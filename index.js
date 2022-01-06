const input=document.getElementById("input");
const list=document.getElementById("list");
const check_icon="fa-check-circle";
const uncheck_icon="fa-circle-thin";
const strike="strike";
//Adding items to the list
function add(item,id,check,del){if(del){return "";}
    const checked = check ? check_icon : uncheck_icon;
    const striked= check ? strike : "";
    
    const entry= `<li><i class="fa ${checked} " id= "${id}"></i>
 <span class=" ${striked} "> ${item} </span>
 <i class="fa fa-trash" id= "${id}"></i></li>`;

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

function update(node)
{node.classList.toggle(check_icon);
    node.classList.toggle(uncheck_icon);
document.querySelector("span").classList.toggle(strike);
task_list[node.id].check ? false : true;}