let input = document.getElementById("taskInput");
let list = document.querySelector(".listContainer");
let addTaskBtn = document.getElementById("addTaskBtn");
let clearAllBtn = document.getElementById("clearAllBtn");
let dltTaskBtn = document.getElementsByTagName("span");

addTaskBtn.addEventListener("click", () => {
    addTask();
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

clearAllBtn.addEventListener("click", () => {
    // Clear all data in localStorage
    localStorage.clear();
    // Clear the list of tasks in the UI
    list.innerHTML = "";
});

list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function addTask() {
    const taskText = input.value.trim(); // Remove leading and trailing spaces
    if ((taskText.length > 0) && (taskText.length < 80)) {
        createTaskElement(taskText);
        saveData();
        input.value = "";
        list.scrollTop = list.scrollHeight;
    } else {
        alert("Task cannot be empty or contain only spaces. Also check the length of string you are providing. It should be less than 80");
    }
}


function createTaskElement(taskText) {
    let li = document.createElement("li");
    li.innerHTML = taskText;

    if (!li.querySelector("span")) {
        let span = document.createElement("span");
        span.textContent = "X"; // Set the content of the span
        li.appendChild(span);
    }

    list.appendChild(li);
}

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function loadData() {
    list.innerHTML = localStorage.getItem("data");
}

loadData();
