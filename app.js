function addtodo(){
    var input = document.getElementById("todo-input");
    // console.log(input.value);
    

    var list = document.getElementById("listitems");

    var listElement = document.createElement("li");

    var listText = document.createTextNode(input.value);

    listElement.appendChild(listText);

    // ********************delete button*******************
    var delbtn = document.createElement("button");

    var delbtnText = document.createTextNode("delete");

    delbtn.appendChild(delbtnText);

    delbtn.setAttribute("onclick", "delTodo(this)");

    listElement.appendChild(delbtn);

// ********************Edit button*******************
var Editbtn = document.createElement("button");

var EditbtnText = document.createTextNode("Edit");

Editbtn.appendChild(EditbtnText);

Editbtn.setAttribute("onclick", "editTodo(this)");

listElement.appendChild(Editbtn);









    list.appendChild(listElement);

    console.log(listElement);

    input.value = "";
}


function deletetodo(){
    var list = document.getElementById("listitems");
    list.innerHTML = "";

}


function delTodo(e){
   console.log(e.parentNode.remove());
}

function editTodo(e){
    var currentli= e.parentNode.firstChild.nodeValue;
    var inputField = prompt("enter updated value", currentli);
     
    e.parentNode.firstChild.nodeValue = inputField
}