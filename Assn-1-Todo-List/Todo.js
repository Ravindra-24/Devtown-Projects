/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/
// console.log(navigator);
// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(`position`,position);
// })
// navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
//   console.log(`stream`, stream);
// })

// const query = prompt("what is my name")
// console.log(query);

const body = document.querySelector("body");
    const theme = ()=>{
      const currentTheme = localStorage.getItem('theme');
    if(currentTheme === "dark"){
        body.classList.add('dark');
        body.classList.remove("light");
    }else{
      body.classList.add("light");
      body.classList.remove("dark");
    }}
theme()


const handleTheme = () => {
body.classList.toggle("dark");
 localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

const todoContainer = document.querySelector("#todo-container");
const input = document.querySelector("#add-todo");
const addbutton = document.querySelector("#add-todo-btn");
const saveButton = document.querySelector("#edit-todo-btn");
const listState = document.querySelector(".list-state");
const heading = document.querySelector(".heading");

const lastUpdatedContainer = document.querySelector("#last-updated");
let lastUpdated = new Date().toLocaleString();

lastUpdatedContainer.innerHTML = lastUpdated;

const listItemComplete = (todo_text = "") => ` <div
id="task"
class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent"
>
<div class="inline-flex items-center space-x-2">
  <div class="completed">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-slate-500"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  </div>
  <div class="text-slate-500 line-through">${todo_text}</div>
</div>

                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5 " stroke="currentColor" class="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer remove-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </div>
                </div>`;

const listItem = (
  todo_text = ""
) => `<div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150">
                <div class=" inline-flex items-center space-x-2">
                    <div class="completed">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-500 hover:text-indigo-600 hover:cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                    </div>
                    <div>${todo_text}</div>
                </div>
                <div class="flex justify-between">
  <div class="edit-btn mx-2">
    <svg
      class="w-4 h-4 fill-current text-gray-500 hover:text-blue-700 hover:cursor-pointer"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M14.846 1.403l3.752 3.753.625-.626A2.653 2.653 0 0015.471.778l-.625.625zm2.029 5.472l-3.752-3.753L1.218 15.028 0 19.998l4.97-1.217L16.875 6.875z"
        ></path>
      </g>
    </svg>
  </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-red-500 hover:text-slate-700 hover:cursor-pointer remove-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </div>
            </div>`;

let idOfElementToEdit = null;
let todos;
const key = 'key'

const updateTodoInStorage = (todoList) => {
  const todoString = JSON.stringify(todoList);
  localStorage.setItem(key, todoString);
};

const initializa = ()=>{
  const data = localStorage.getItem(key);
  if(!data){
    todos = [];
  }else{
    todos = JSON.parse(data);
    renderList(todos);
    return;
  }
}

const handleCompleted = (todoElement, id) => {
  const completedTask = todoElement.querySelector(".completed");
  completedTask.addEventListener("click", () => {
    const element = todos.find((todo) => todo.id === id);
    element.completed = !element.completed;
    renderList();
    updateTodoInStorage(todos)
  });
}

const showEdit = (todoElement,id) => {
  const editButton = todoElement.querySelector(".edit-btn");
  editButton.addEventListener("click", () => {
    const element = todos.find((todo) => todo.id === id);
    heading.innerHTML = "Edit Todo";
    input.value = element.text;
    addbutton.style = "display: none";
    saveButton.style = "display: inline";
    idOfElementToEdit = id;

  })
};

const handleEdit = () => {
  const newtodos = input.value;
  const element = todos.find((todo) => todo.id === idOfElementToEdit);
  if(newtodos === "" || newtodos === null) {
    alert("Please enter a todo, Empty TODO's are not allowed");
  }else {
    element.text = newtodos;
  input.value = "";
  heading.innerHTML = "Todo list";
  addbutton.style = "display: inline";
  saveButton.style = "display: none";
  renderList();
  updateTodoInStorage(todos);
  }
  
}

const handleDelete = (todoElement, id) => {
  const deletebtn = todoElement.querySelector(".remove-icon");
  deletebtn.addEventListener("click", () => {
    todoElement.remove();
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    listState.innerHTML =
      todos.length >= 1 ? `Hello, here are your latest` : `Hey, add a todo!`;
    renderList();
    updateTodoInStorage(todos)
  });
};



function renderList() {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    if (todo.completed === true) {
      todoElement.innerHTML = listItemComplete(todo.text);
    } else {
      todoElement.innerHTML = listItem(todo.text);
      showEdit(todoElement, todo.id);
    }
    todoContainer.appendChild(todoElement);

    handleDelete(todoElement, todo.id);
    handleCompleted(todoElement, todo.id);
    
  });
};

const handleAdd = (e) => {
  const itemToAdd = input.value;
  if (itemToAdd !== null && itemToAdd !== "") {
    todos.push({
      text: itemToAdd,
      completed: false,
      id: Date.now(),
    });
    updateTodoInStorage(todos);
    input.value = "";
    listState.innerHTML =
      todos.length >= 1 ? `Hello, here are your latest` : `Hey, add a todo!`;
    renderList();
    return;
  } else {
    return window.alert("adding an empty item is not possible");
  }
};


addbutton.addEventListener("click", handleAdd);
saveButton.addEventListener("click", handleEdit);

initializa();