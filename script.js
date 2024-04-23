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

// Select the toggle switch input element
const themeToggle = document.getElementById('theme-toggle');

// Add event listener for change event
themeToggle.addEventListener('change', function() {
  // Check if the toggle switch is checked
  if (this.checked) {
    // If checked, set dark theme
    console.log("clicked");
    setDarkTheme();
  } else {
    console.log("clicked now");
    // If unchecked, set light theme
    setLightTheme();
  }
});

let container = document.querySelector(".container");
// Function to set dark theme
function setDarkTheme() {
  container.style.background="radial-gradient(circle, #1b1e23, #131416)";
  container.style.color="#fff";
  createBtn.style.background="linear-gradient(135deg, #2d9ee0, #1f4b99)";
}

// Function to set light theme
function setLightTheme() {
    // Set light theme background gradient
    container.style.background = "radial-gradient(circle, #e6e6e6, #ffffff)";// Set background color to light
    container.style.color = '#333'; // Set text color to dark
    createBtn.style.background = "linear-gradient(135deg, #555555, #000000)";

}

