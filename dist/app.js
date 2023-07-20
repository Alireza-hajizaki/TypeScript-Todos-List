import Store from "./classes/Store.js";
import Todo from "./classes/Todo.js";
import Ui from "./classes/Ui.js";
const ui = new Ui();
let $ = document;
const form = $.querySelector("#todo-form");
const inputElem = $.querySelector(".form-control");
const titleError = $.querySelector("#title-error");
const formSubmitionHandler = (e) => {
    e.preventDefault();
    if (inputElem.value.trim() === "") {
        titleError.innerHTML = "Title is requared...";
    }
    else {
        titleError.innerHTML = "";
        const todoObj = {
            id: Math.round(Math.random() * 100),
            title: inputElem.value.trim(),
            status: false,
        };
        inputElem.value = "";
        const todo = new Todo(todoObj);
        ui.addTodoToList(todo);
        Store.setTodo(todo);
    }
};
window.changeStatusTodo = (id) => {
    Store.changeStatusTodo(id);
};
window.removeTodo = (e, id) => {
    ui.removeTodo(e, id);
};
form.addEventListener("submit", formSubmitionHandler);
window.addEventListener('load', () => {
    Store.displayTodos();
});
