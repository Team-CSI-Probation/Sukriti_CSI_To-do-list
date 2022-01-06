const input=document.getElementById("input").value;
const list=document.getElementById("list");
//document.querySelector("button").addEventListener("click", add);
function add(item){const entry= `<li><i class="fa fa-circle"></i> ${item} <i class="fa fa-trash"></i></li>`;

    list.insertAdjacentHTML("beforeEnd", entry);

}

