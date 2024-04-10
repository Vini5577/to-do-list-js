const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
const button = document.querySelector('button');
const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');

function addTask() {
    if (inputBox.value == '') {
        modal.classList.add('show')
        return
    }

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
    inputBox.value = "";
    saveData();
}

button.addEventListener('click', addTask);

btn.addEventListener('click', () => {
    modal.classList.remove('show')
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();