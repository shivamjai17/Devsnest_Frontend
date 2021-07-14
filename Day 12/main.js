let addToDoButton= document.getElementById("add");
let toDoContainer= document.getElementById("addcontainer");
let inp = document.getElementById("in");
let clear=document.getElementById("delete");
addToDoButton.addEventListener('click',myFun);
inp.addEventListener('keyup',myFun());
function myFun(){
    var paragraph= document.createElement('p');
    paragraph.innerText= inp.value;
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    inp.value = " ";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    });
    clear.addEventListener("click",function(){
        paragraph.remove();
    });
    
};