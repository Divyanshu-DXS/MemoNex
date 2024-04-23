const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function displayNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
displayNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let textBox = document.createElement("p");
    let delImg = document.createElement("img");
    textBox.className="input-box";
    textBox.setAttribute("contenteditable","true");
    delImg.src="images/delete.png";
    notesContainer.appendChild(textBox).appendChild(delImg);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(notes=>{
            notes.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
