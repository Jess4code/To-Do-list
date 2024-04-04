let list = document.createElement("ul");
let tasks = document.querySelector(".tasks");

function addTask() {
    let inputValue = document.querySelector(".input").value.trim();
    if (inputValue !== ""){
        let newEl = document.createElement("li");
        let id = Date.now();
        newEl.id = id;
        newEl.innerHTML = `${inputValue} <button class="delete">Delete</button>`
        newEl.querySelector(".delete").onclick = btnRemove;
        list.appendChild(newEl);
        localStorage.setItem(id, inputValue);
    }
    document.querySelector(".input").value = '';
    tasks.appendChild(list);
    visibilityChecker();
    document.querySelector(".input").focus();
};

function btnRemove(el) {
    el.currentTarget.parentElement.remove();
    localStorage.removeItem(`${el.currentTarget.parentElement.id}`);
    visibilityChecker();
}

function visibilityChecker () {
let lis = document.querySelectorAll("li");
if (lis.length === 0) {
    tasks.classList.add("hidden");
} else {
    tasks.classList.remove("hidden");
}};

export {addTask, btnRemove, visibilityChecker, list, tasks}

//first use for Moduel