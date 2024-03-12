let taskArea = document.querySelector(".taskArea")
let addBtn = document.querySelector("#btnAdd")
let inputText = document.querySelector("#inputText")

let taskText = document.querySelector(".taskArea .task")

addBtn.addEventListener("click", function(btn){

    btn.preventDefault();

    inputValue = inputText.value;

    if (inputValue !== "") {

        taskText.style.display = "block"
    
        let newElement = document.createElement("li");
    
        newElement.classList.add("liActive")
        newElement.classList.add("task")
        newElement.textContent = inputValue;
    
        taskText.appendChild(newElement);
    
        inputText.value = "";
}


})