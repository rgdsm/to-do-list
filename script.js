let taskArea = document.querySelector(".taskArea")
let addBtn = document.querySelector("#btnAdd")
let inputText = document.querySelector("#inputText")

let taskText = document.querySelector(".task")

addBtn.addEventListener("click", function(btn){

    btn.preventDefault()

    inputValue = inputText.value;

    taskArea.style.display = "flex"
    
    let newElement = document.createElement("div");
    newElement.textContent = inputValue;

    taskArea.appendChild(newElement);

    inputText.value = "";
})
