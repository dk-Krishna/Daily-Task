const title = document.querySelector("input");
const description = document.querySelector("textarea");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") 
    ? JSON.parse(localStorage.getItem("tasks")) 
    : [];

const showAllTasks = () => {
    tasks.forEach((item, index)=> {
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = item.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = item.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.innerText = "-"
        btn.setAttribute("class", "deleteBtn");
        div.append(btn);

        btn.addEventListener("click", ()=> {
            removeTask();
            tasks.splice(index, 1);
            console.log(tasks);
            showAllTasks();
            localStorage.setItem("tasks", JSON.stringify(tasks));
        })

        container.append(div);
    })

    // console.log(tasks);
}

function removeTask() {
    tasks.forEach(()=> {
        const div = document.querySelector(".task");
        div.remove();
    })
} 

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    removeTask();

    tasks.push({
        title: title.value, 
        description: description.value
    });

    showAllTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

showAllTasks();