import { addTask, btnRemove, visibilityChecker, list, tasks } from "./vendor.js";
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

let scroller = document.querySelector(".scroller");

window.onscroll = () => {
    if (scrollY > 300) {
        scroller.classList.remove("hidden");
    } else {
        scroller.classList.add("hidden");
    }
}

scroller.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}