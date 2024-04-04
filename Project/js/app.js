let tasks = document.querySelector(".tasks");
let list = document.createElement("ul");
let inputBtn = document.querySelector(".add");
inputBtn.onclick = addTask;


window.onload = () => {
if(localStorage.length !== 0) {
    for (let i = 0 ; i < localStorage.length; i++) {
        let newEl = document.createElement("li");
        newEl.id = localStorage.key(i);
        newEl.innerHTML = `${localStorage.getItem(localStorage.key(i))} <button class="delete">Delete</button>`;
        newEl.querySelector(".delete").onclick = btnRemove;
        list.appendChild(newEl);
    }
    tasks.appendChild(list);
    visibilityChecker();
}
document.querySelector(".input").focus();
}


function addTask() {
    let inputValue = document.querySelector(".input").value.trim();
    if (inputValue !== ""){
        let newEl = document.createElement("li");
        let id = Math.random();
        newEl.id = id;
        newEl.innerHTML = `${inputValue} <button class="delete">Delete</button>`
        newEl.querySelector(".delete").onclick = btnRemove;
        list.appendChild(newEl);
        localStorage.setItem(id, inputValue);
    }
    document.querySelector(".input").value = '';
    tasks.appendChild(list);
    visibilityChecker();
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

let scroller = document.querySelector(".scroller");

window.onscroll = () => {
    if (scrollX > 200) {
        scroller.classList.toggle("hidden");
        console.log("hi");
    }
}